// components/ui/Button.tsx
import { cn } from "@/lib/utils/getSlug";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "outline" | "ghost";
    className?: string;
}

export function Button({ variant = "primary", className = "", ...props }: ButtonProps) {
    const baseStyles = "px-6 py-2 text-sm font-semibold rounded-full transition-all";

    const variants = {
        primary: "bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 text-white hover:opacity-90",
        outline: "border border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white",
        ghost: "text-purple-600 hover:underline",
    };

    return (
        <button {...props} className={cn(baseStyles, variants[variant], className)} />
    );
}
