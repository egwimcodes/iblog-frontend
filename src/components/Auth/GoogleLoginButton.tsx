"use client";

import { useAppDispatch } from "@/lib/redux/redux-hooks";
import { hideLoader, showLoader } from "@/lib/redux/store/uiSlice";
import { toast } from "react-toastify";
import { useEffect, useRef, useCallback } from "react";

export default function GoogleLoginButton() {
    const dispatch = useAppDispatch();
    const popupRef = useRef<Window | null>(null);
    const popupCheckIntervalRef = useRef<NodeJS.Timeout | null>(null);

    // Define listener with useCallback so it doesn't recreate unnecessarily
    const listener = useCallback(
        (event: MessageEvent) => {
            if (event.origin !== window.location.origin) return;

            const { id_token, error } = event.data;
            if (error) {
                toast.error("Google login cancelled or failed");
                dispatch(hideLoader());
                popupRef.current?.close();
                if (popupCheckIntervalRef.current) clearInterval(popupCheckIntervalRef.current);
                window.removeEventListener("message", listener);
                return;
            }

            if (id_token) {
                console.log("✅ Google ID Token received:", id_token);
                dispatch(hideLoader());

                fetch("/api/auth/google", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ token: id_token }),
                })
                    .then((res) => {
                        if (!res.ok) throw new Error("Login failed");
                        return res.json();
                    })
                    .then((userData) => {
                        console.log("User Data:", userData);
                        toast.success("Signed in with Google");
                        window.location.href = "/articles";
                    })
                    .catch((err) => {
                        console.error(err);
                        toast.error("Login failed");
                    })
                    .finally(() => {
                        dispatch(hideLoader());
                        popupRef.current?.close();
                        if (popupCheckIntervalRef.current) clearInterval(popupCheckIntervalRef.current);
                        window.removeEventListener("message", listener);
                    });
            }
        },
        [dispatch]
    );

    useEffect(() => {
        window.addEventListener("message", listener);
        return () => {
            window.removeEventListener("message", listener);
            if (popupCheckIntervalRef.current) clearInterval(popupCheckIntervalRef.current);
        };
    }, [listener]);

    const startLogin = () => {
        dispatch(showLoader());
        const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!;
        const redirectUri = `${window.location.origin}/google-popup`;
        const nonce = crypto.randomUUID();

        const authUrl =
            "https://accounts.google.com/o/oauth2/v2/auth?" +
            new URLSearchParams({
                client_id: clientId,
                redirect_uri: redirectUri,
                response_type: "id_token",
                scope: "openid email profile",
                nonce,
            });

        popupRef.current = window.open(authUrl, "googleLogin", "width=500,height=600");

        popupCheckIntervalRef.current = setInterval(() => {
            if (!popupRef.current || popupRef.current.closed) {
                if (popupCheckIntervalRef.current) clearInterval(popupCheckIntervalRef.current);
                dispatch(hideLoader());
                toast.error("Google login cancelled");
                window.removeEventListener("message", listener);
            }
        }, 500);
    };

    return (
        <button onClick={startLogin} className="btn-primary">
            Sign in with Google
        </button>
    );
}
