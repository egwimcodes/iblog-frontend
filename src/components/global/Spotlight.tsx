import { cn } from "@/lib/utils/getSlug";
import { motion } from "framer-motion";

export function Spotlight({ className }: { className?: string; fill?: string }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 1 }}
            className={cn("pointer-events-none absolute z-0 h-[60vh] w-[60vw] rounded-full blur-[100px] bg-gradient-to-br from-purple-500 via-pink-400 to-purple-600", className)}
        />
    );
}
  