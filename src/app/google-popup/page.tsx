"use client";

import { useEffect } from "react";

export default function GooglePopup() {
    useEffect(() => {
        const hash = new URLSearchParams(window.location.hash.substring(1));
        const idToken = hash.get("id_token");

        if (window.opener && idToken) {
            window.opener.postMessage(
                { id_token: idToken, error: false },
                window.location.origin
            );
            window.close();
        } else if (window.opener) {
            window.opener.postMessage(
                { error: true },
                window.location.origin
            );
            window.close();
        }
    }, []);

    return <p>Signing you in...</p>;
}
