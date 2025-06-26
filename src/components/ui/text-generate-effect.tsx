"use client";
import { useEffect, useState } from "react";

export function TextGenerateEffect({ text, className }: { text: string; className?: string }) {
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setDisplayedText(text.slice(0, i + 1));
            i++;
            if (i === text.length) clearInterval(interval);
        }, 50);

        return () => clearInterval(interval);
    }, [text]);

    return <p className={className}>{displayedText}</p>;
}
