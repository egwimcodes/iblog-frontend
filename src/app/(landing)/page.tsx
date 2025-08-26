"use client";
import Link from "next/link";
import { Spotlight } from "@/components/global/Spotlight";
import { BackgroundBeams } from "@/components/landing/background-beams";
import { Button } from "@/components/global/Button";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import FeaturesGrid from "@/components/landing/FeaturesGrid";
import { features } from "@/lib/data/features";
import AboutSection from "@/components/landing/AboutSection";
import BlogsScetion from "@/components/landing/BlogsScetion";
import { ResetPasswordModal } from "@/components/auth/password/PasswordReset";
import { AuthModal } from "@/components/auth/AuthModal";


export default function Home() {
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
    const [authModalView, setAuthModalView] = useState<"login" | "register" | "reset">("login");

    useEffect(() => {
        const hash = new URLSearchParams(window.location.hash.substring(1));
        const idToken = hash.get("id_token");
        if (idToken && window.opener) {
            window.opener.postMessage({ id_token: idToken }, window.location.origin);
            window.close();
        }
    }, []);
    return (
        <>
            <main className="relative min-h-screen w-full bg-background text-foreground overflow-hidden">
                {/* Spotlight Background */}
                <Spotlight
                    className="top-[40vh] left-[20vw] md:left-[30vw] h-[80vh] w-[80vw]"
                    fill="white"
                />

                {/* Hero Section */}
                <section className="pt-[120px] md:pt-[140px] px-6 max-w-4xl mx-auto text-center relative z-10">


                    <motion.div
                        className="px-6 max-w-4xl mx-auto text-center relative z-10"
                        initial={{ opacity: 0, y: -40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.05 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight dark:text-white">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                                Write, Inspire,
                            </span>{" "}
                            and Share on the world&apos;s smartest blogging platform.
                        </h1>
                    </motion.div>
                    <motion.p
                        className="mt-6 text-lg text-zinc-400 dark:text-zinc-300 max-w-xl mx-auto"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.15 }}>
                        IBLOG empowers creators with AI-enhanced tools, clean UI, and community rewards.
                    </motion.p>
                    <div className="mt-8 flex justify-center gap-4">
                        <motion.div className=""
                            initial={{ opacity: 0, x: -40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}>
                            <Button variant="primary">Start Blogging</Button>
                        </motion.div>
                        <Link href={"/articles"}>
                            <motion.div
                                initial={{ opacity: 0, x: 40 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}>
                                <Button variant="outline">Explore Blogs</Button>
                            </motion.div>
                        </Link>
                    </div>
                </section>

                {/* Features Section */}
                <section id="features" className="relative z-10 mt-32 px-4 md:px-6 max-w-7xl mx-auto">
                    <FeaturesGrid features={features} />
                </section>

                {/* About Section */}
                <section id="about" className="relative z-10 mt-32 px-6 max-w-6xl mx-auto">
                    <AboutSection />
                </section>

                {/* Blogs Preview */}
                <section id="blogs" className="relative z-10 mt-32 px-6 max-w-6xl mx-auto text-center">
                    <BlogsScetion />
                </section>

                {/* Background Animation */}
                <BackgroundBeams />
            </main>

            {/* Auth Modals */}
            <AuthModal
                isOpen={isAuthModalOpen}
                onClose={() => setIsAuthModalOpen(false)}
                initialView={authModalView}
            />
            <ResetPasswordModal
                isOpen={authModalView === 'reset'}
                onClose={() => {
                    setIsAuthModalOpen(false);
                    setAuthModalView('login');
                }}
            />
        </>
    );
}