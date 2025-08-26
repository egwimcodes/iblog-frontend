"use client";
import { useEffect } from "react";
import Image from "next/image";
import { Spotlight } from "@/components/global/Spotlight";
import { BackgroundBeams } from "@/components/landing/background-beams";
import { motion } from "framer-motion";
import { FiUser, FiLock, FiMail, FiDatabase } from "react-icons/fi";

export default function GooglePopup() {
    useEffect(() => {
        const params = new URLSearchParams(window.location.hash.substring(1));
        const id_token = params.get("id_token");

        if (id_token) {
            window.opener?.postMessage({ id_token }, window.location.origin);
        } else {
            window.opener?.postMessage(
                { error: "Login cancelled or failed" },
                window.location.origin
            );
        }

        setTimeout(() => window.close(), 4500);
    }, []);

    // Data items being transferred - responsive sizes
    const dataItems = [
        { icon: <FiUser className="text-xs sm:text-sm" />, label: "Profile" },
        { icon: <FiMail className="text-xs sm:text-sm" />, label: "Email" },
        { icon: <FiLock className="text-xs sm:text-sm" />, label: "Token" },
        { icon: <FiDatabase className="text-xs sm:text-sm" />, label: "Session" }
    ];

    return (
        <main className="relative min-h-screen w-full bg-gray-950 text-white overflow-hidden flex items-center justify-center p-4">
            <Spotlight
                className="top-0 left-0 md:left-[30vw] h-full w-full"
                fill="white"
            />
            <BackgroundBeams />

            <div className="flex flex-col items-center z-10 space-y-8 md:space-y-16 w-full max-w-4xl">
                {/* Logos with data transfer animation */}
                <div className="flex items-center justify-between w-full relative px-2 sm:px-0">
                    {/* Google Logo - responsive sizing */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4 }}
                        className="bg-white/5 backdrop-blur-sm p-2 sm:p-4 rounded-lg sm:rounded-xl border border-gray-800 shadow-lg"
                    >
                        <Image
                            src="/images/google-logo.png"
                            alt="Google"
                            width={80}
                            height={27}
                            className="w-16 sm:w-24 h-auto"
                            priority
                        />
                    </motion.div>

                    {/* Data transfer animation - responsive positioning */}
                    <div className="absolute left-[70px] right-[70px] sm:left-[100px] sm:right-[100px] md:left-[140px] md:right-[140px] h-16 sm:h-24 flex items-center">
                        {/* Connection line */}
                        <div className="absolute inset-0 flex items-center">
                            <div className="h-px bg-gray-700 w-full"></div>
                            <motion.div
                                className="h-px bg-blue-500 absolute left-0"
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 1.5, delay: 0.3 }}
                            />
                        </div>

                        {/* Data packets moving - responsive sizing */}
                        {dataItems.map((item, i) => (
                            <motion.div
                                key={i}
                                className="absolute left-0 bg-gray-900 border border-gray-800 rounded-md sm:rounded-lg px-2 py-1 sm:px-3 sm:py-2 flex items-center gap-1 sm:gap-2 shadow-lg"
                                initial={{ x: 0, opacity: 0 }}
                                animate={{ x: "calc(100% + 20px)", opacity: [0, 1, 1, 0] }}
                                transition={{
                                    duration: 1.8,
                                    delay: 0.4 + i * 0.3,
                                    ease: [0.32, 0.72, 0, 1]
                                }}
                            >
                                <span className="text-blue-400">{item.icon}</span>
                                <span className="text-[10px] sm:text-xs font-medium">{item.label}</span>
                            </motion.div>
                        ))}
                    </div>

                    {/* iBlog Logo - responsive sizing */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4 }}
                        className="bg-white/5 backdrop-blur-sm p-2 sm:p-4 rounded-lg sm:rounded-xl border border-gray-800 shadow-lg relative"
                    >
                        <Image
                            src="/images/iBlog.png"
                            alt="iBlog"
                            width={80}
                            height={27}
                            className="w-16 sm:w-24 h-auto"
                            priority
                        />
                        {/* Receiving indicator */}
                        <motion.div
                            className="absolute inset-0 rounded-lg sm:rounded-xl border border-blue-500 opacity-0"
                            animate={{
                                opacity: [0, 0.3, 0],
                                scale: [1, 1.03, 1]
                            }}
                            transition={{
                                duration: 0.8,
                                repeat: Infinity,
                                repeatDelay: 0.5,
                                times: [0, 0.5, 1]
                            }}
                        />
                    </motion.div>
                </div>

                {/* Status indicator - responsive sizing */}
                <motion.div
                    className="flex flex-col items-center space-y-3 sm:space-y-4 w-full max-w-md px-4 sm:px-0"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <div className="w-full bg-gray-800 rounded-full h-1 sm:h-1.5 overflow-hidden">
                        <motion.div
                            className="bg-blue-500 h-full rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 3.5, ease: "easeInOut" }}
                        />
                    </div>

                    <div className="text-center space-y-1">
                        <motion.p
                            className="text-sm sm:text-base font-medium text-gray-200"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            Securing your connection
                        </motion.p>
                        <motion.p
                            className="text-[10px] sm:text-xs text-gray-400"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.8 }}
                            transition={{ delay: 0.6 }}
                        >
                            Transferring encrypted authentication data
                        </motion.p>
                    </div>

                    <motion.div
                        className="flex flex-wrap justify-center gap-x-2 gap-y-1 text-[10px] sm:text-xs text-gray-400"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                    >
                        <span className="flex items-center gap-1">
                            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-400 animate-pulse"></span>
                            TLS 1.3 secured
                        </span>
                        <span className="hidden sm:inline">•</span>
                        <span>OAuth 2.0 protocol</span>
                    </motion.div>
                </motion.div>
            </div>
        </main>
    );
}