"use client";
import Image from "next/image";
import { useAppDispatch } from "@/lib/redux/redux-hooks";
import { hideLoader, showLoader } from "@/lib/redux/slices/uiSlice";
import { toast } from "react-toastify";
import { useCallback, useEffect, useRef } from "react";
import { FinalizeGoogleLogin } from "@/lib/api/fetch-utils";
import { setUser } from "@/lib/redux/slices/accountSlice";
import { useRouter } from "next/navigation";

export default function GoogleLoginButton() {
    const dispatch = useAppDispatch();
    const popupRef = useRef<Window | null>(null);
    const popupCheckInterval = useRef<NodeJS.Timeout | null>(null);
    const router = useRouter();
    // 🎯 Handle messages from popup (success / error)
    const listener = useCallback(
        async (event: MessageEvent) => {
            if (event.origin !== window.location.origin) return;

            const { id_token, error } = event.data;

            if (error) {
                toast.error("Google login cancelled or failed");
                dispatch(hideLoader());
                return;
            }

            if (id_token) {
                // console.log("✅ Token:", id_token);
                try {
                    const res = await FinalizeGoogleLogin({ token: id_token });
                    // console.log("✅ FinalizeGoogleLogin:", res);
                    dispatch(
                        setUser({
                            profile: res.user,
                            tokens: { access: res.access, refresh: res.refresh },
                        })
                    );
                    router.push("/articles")
                } catch (err) {
                    toast.error(`Login failed ${err}`);
                } finally {
                    dispatch(hideLoader());
                }
            }
        },
        [dispatch, router]
    );

    useEffect(() => {
        window.addEventListener("message", listener);
        return () => {
            window.removeEventListener("message", listener);
            if (popupCheckInterval.current) clearInterval(popupCheckInterval.current);
        };
    }, [listener]);

    const startLogin = () => {
        dispatch(showLoader());

        const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!;
        const redirectUri = `${window.location.origin}/google-popup/`;
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

        popupRef.current = window.open(
            authUrl,
            "googleLogin",
            "width=500,height=600"
        );

        // 🔍 Poll every 500ms to detect if user closes popup manually
        popupCheckInterval.current = setInterval(() => {
            if (popupRef.current && popupRef.current.closed) {
                clearInterval(popupCheckInterval.current!);
                popupRef.current = null;
                dispatch(hideLoader());
            }
        }, 500);
    };

    return (
        <button onClick={startLogin} className="w-full">
            <div className="p-[1.5px] rounded-full bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 overflow-hidden">
                <div className="flex items-center justify-center gap-2 bg-white dark:bg-background-dark px-6 py-[7px] rounded-full">
                    <Image
                        src="/images/google-logo.svg"
                        alt="Google"
                        className="w-5 h-5"
                        width={24}
                        height={24}
                    />
                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                        Continue with Google
                    </span>
                </div>
            </div>
        </button>
    );


}
