"use client";
import { motion } from "framer-motion";

export function BackgroundBeams({ className }: { className?: string }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.05 }}
            transition={{ duration: 2 }}
            className={`absolute inset-0 z-0 pointer-events-none ${className}`}
        >
            <div className="absolute w-px h-full left-1/4 bg-gradient-to-b from-transparent via-white/30 to-transparent animate-beam"></div>
            <div className="absolute w-px h-full left-1/2 bg-gradient-to-b from-transparent via-white/20 to-transparent animate-beam delay-75"></div>
            <div className="absolute w-px h-full left-3/4 bg-gradient-to-b from-transparent via-white/10 to-transparent animate-beam delay-150"></div>
        </motion.div>
    );
}
