import { cn } from "@/lib/utils/getSlug";
import { ReactNode } from "react";

function HeroHighlight({ children, className }: { children: ReactNode; className?: string }) {
    return (
        <section className={cn("relative z-10", className)}>
            {children}
        </section>
    );
}

function Highlight({ children, className }: { children: ReactNode; className?: string }) {
    return (
        <span className={cn("bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 text-transparent bg-clip-text", className)}>
            {children}
        </span>
    );
}
  
export { HeroHighlight, Highlight as HeroText };