"use client";

import Link from "next/link";
import { Spotlight } from "@/components/ui/Spotlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Button } from "@/components/ui/Button";
import ThemeToggleButton from "@/components/ThemeToggle";
import { useState } from "react";
import { AuthModal } from "@/components/AuthModal";
import { ResetPasswordModal } from "@/components/PasswordReset";
import { articles } from "@/lib/data";
import { FaBolt, FaRobot, FaUserCircle, FaRocket, FaLightbulb, FaUsers } from "react-icons/fa";

const features = [
    {
        title: "AI Writer",
        desc: "Generate blog ideas, outlines, and full posts with AI assistance.",
        icon: <FaRobot className="text-3xl text-purple-500 group-hover:scale-110 group-hover:text-pink-500 transition-transform duration-300" />,
        gradient: "from-purple-500 via-pink-400 to-purple-600"
    },
    {
        title: "Custom Profiles",
        desc: "Showcase your content and personality with personalized pages.",
        icon: <FaUserCircle className="text-3xl text-pink-500 group-hover:scale-110 group-hover:text-purple-500 transition-transform duration-300" />,
        gradient: "from-pink-500 via-purple-400 to-pink-600"
    },
    {
        title: "Engagement Tools",
        desc: "Real-time feedback, shares, highlights, and reactions.",
        icon: <FaBolt className="text-3xl text-yellow-400 group-hover:scale-110 group-hover:text-pink-500 transition-transform duration-300" />,
        gradient: "from-yellow-400 via-pink-400 to-purple-500"
    },
];

export default function Home() {
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
    const [authModalView, setAuthModalView] = useState<"login" | "register" | "reset">("login");

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
                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight dark:text-white">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                            Write, Inspire,
                        </span>{" "}
                        and Share on the world's smartest blogging platform.
                    </h1>

                    <p className="mt-6 text-lg text-zinc-400 dark:text-zinc-300 max-w-xl mx-auto">
                        IBLOG empowers creators with AI-enhanced tools, clean UI, and community rewards.
                    </p>
                    <div className="mt-8 flex justify-center gap-4">
                        <Button variant="primary">Start Blogging</Button>
                        <Link href={"/articles"}>
                            <Button variant="outline">Explore Blogs</Button>
                        </Link>
                    </div>
                </section>

                {/* Features Section */}
                <section id="features" className="relative z-10 mt-32 px-4 md:px-6 max-w-7xl mx-auto">
                    <div className="absolute -top-1/3 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[600px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent blur-3xl opacity-20 pointer-events-none" />

                    <div className="relative">
                        <h2 className="text-center mb-16 font-poppins font-bold text-4xl md:text-5xl dark:text-white">
                            <span className="relative inline-block">
                                <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-amber-500 text-transparent bg-clip-text bg-300% animate-gradient">
                                    Powerful features,
                                </span>
                                <span className="absolute -bottom-2 left-0 h-1 w-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                            </span>
                            <br />
                            <span className="text-xl md:text-2xl font-medium text-gray-500 dark:text-gray-400 mt-2 inline-block">
                                Built for the modern blogger
                            </span>
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
                            {features.map((feat, idx) => (
                                <div
                                    key={idx}
                                    className={`group relative min-h-[220px] rounded-3xl p-[2px] overflow-hidden bg-gradient-to-br ${feat.gradient} shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-br before:from-pink-400/30 before:via-purple-400/30 before:to-yellow-400/30 before:opacity-0 group-hover:before:opacity-40 before:blur-lg before:transition-opacity before:duration-500`}
                                >
                                    <div className="relative z-10 h-full w-full rounded-3xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl p-8 flex flex-col items-center">
                                        <div className="relative mb-6">
                                            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                            <div className="relative p-4 rounded-2xl bg-gradient-to-br from-white/90 to-gray-100/90 dark:from-gray-800/90 dark:to-gray-900/90 shadow-inner transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                                                <div className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                                                    {feat.icon}
                                                </div>
                                            </div>
                                        </div>
                                        <h3 className="text-2xl font-bold mb-3 dark:text-white text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                            {feat.title}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300 text-center mb-6 flex-1 text-base">
                                            {feat.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* About Section */}
                <section id="about" className="relative z-10 mt-32 px-6 max-w-6xl mx-auto">
                    <div className="absolute -top-20 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-30" />

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-2 dark:text-white">
                                <span className="relative inline-block">
                                    <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-amber-500 text-transparent bg-clip-text bg-300% animate-gradient">
                                        About
                                    </span>
                                    <span className="absolute -bottom-2 left-0 h-1 w-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                                </span>
                            </h2>
                            <h3 className="text-lg dark:text-white font-popoins font-semibold mb-4">
                                Why We Built <span className="text-purple-500 mt-2">IBLOG</span>
                            </h3>
                            <p className="text-zinc-500 dark:text-zinc-300 mb-4">
                                We saw creators struggling with outdated platforms that prioritized algorithms over authentic expression.
                            </p>
                            <p className="text-zinc-500 dark:text-zinc-300">
                                Our mission is to give writers the tools they need without compromising their voice or vision.
                            </p>
                            <div className="mt-8 grid grid-cols-2 gap-4">
                                <div className="p-4 rounded-xl 
                                       bg-transparent dark:bg-white/5 
                                       backdrop-blur-sm 
                                       border border-zinc-300/40 dark:border-white/10 
                                       hover:bg-zinc-200/60 dark:hover:bg-white/10 
                                       transition-colors">
                                    <FaRocket className="text-purple-400 mb-2 text-2xl" />
                                    <div className="text-2xl font-bold text-zinc-800 dark:text-white">10K+</div>
                                    <div className="text-sm text-zinc-600 dark:text-zinc-300">Active Writers</div>
                                </div>
                                <div className="p-4 rounded-xl 
                                       bg-transparent dark:bg-white/5 
                                       backdrop-blur-sm 
                                       border border-zinc-300/40 dark:border-white/10 
                                       hover:bg-zinc-200/60 dark:hover:bg-white/10 
                                       transition-colors">
                                    <FaUsers className="text-pink-400 mb-2 text-2xl" />
                                    <div className="text-2xl font-bold text-zinc-800 dark:text-white">1M+</div>
                                    <div className="text-sm text-zinc-600 dark:text-zinc-300">Monthly Readers</div>
                                </div>
                            </div>
                        </div>
                        <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden border border-white/10">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <FaLightbulb className="text-6xl text-white opacity-20" />
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 flex justify-end itsems-center">
                        <Button>Read More</Button>
                    </div>
                </section>

                {/* Blogs Preview */}
                <section id="blogs" className="relative z-10 mt-32 px-6 max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4 dark:text-white">Latest Blogs</h2>
                    <p className="text-zinc-400 dark:text-zinc-300 mb-6">Check out trending posts from our vibrant community</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {articles.map((article) => (
                            <article
                                key={article.id}
                                className="group relative flex flex-col rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-transparent border border-gray-200 dark:border-gray-700 hover:-translate-y-1"
                            >
                                <div className="relative h-48 w-full overflow-hidden">
                                    <img
                                        src={article.image}
                                        alt={article.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                    <div className="absolute top-4 right-4 flex gap-2">
                                        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/90 text-white backdrop-blur-sm">
                                            {article.timeAgo}
                                        </span>
                                        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-secondary/90 text-white backdrop-blur-sm">
                                            {article.likes} ♥
                                        </span>
                                    </div>
                                </div>

                                <div className="p-5 flex-1 flex flex-col">
                                    <div className="flex items-center gap-3 mb-3">
                                        <img
                                            src={article.author.avatar}
                                            alt={article.author.name}
                                            className="w-8 h-8 rounded-full object-cover"
                                        />
                                        <div>
                                            <p className="text-sm font-medium text-gray-900 dark:text-white">{article.author.name}</p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">{article.date}</p>
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                                        <a href={`/blog/${article.slug}`} className="hover:text-primary transition-colors">
                                            {article.title}
                                        </a>
                                    </h3>

                                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                                        {article.excerpt}
                                    </p>

                                    <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700 flex justify-between items-center">
                                        <div className="flex gap-1">
                                            <span className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 flex items-center gap-1">
                                                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                                </svg>
                                                {article.comments}
                                            </span>
                                        </div>
                                        <a
                                            href={`/blog/${article.slug}`}
                                            className="text-sm dark:text-white font-medium text-primary hover:text-primary/80 flex items-center gap-1 transition-colors"
                                        >
                                            Read article
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                    <div className="mt-8">
                        <Button>See All Blogs</Button>
                    </div>
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