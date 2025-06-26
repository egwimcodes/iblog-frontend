"use client";

import Link from "next/link";
import { Spotlight } from "@/components/ui/Spotlight";
import { HeroHighlight, HeroText as Highlight } from "@/components/ui/hero-highlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Button } from "@/components/ui/Button";
import ThemeToggleButton from "@/components/ThemeToggle";

export default function Home() {
    return (
        <main className="relative min-h-screen w-full bg-background text-foreground overflow-hidden">
            <ThemeToggleButton />
            {/* Navbar */}
            <nav className="w-full z-20 fixed top-0 left-0 backdrop-blur-md border-b border-border py-4 px-8 flex justify-between items-center">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                    IBLOG
                </h1>
                <div className="space-x-4 hidden md:flex text-zinc-400 dark:text-zinc-300">
                    <Link href="#"><span className="hover:underline">Home</span></Link>
                    <Link href="#features"><span className="hover:underline">Features</span></Link>
                    <Link href="#blogs"><span className="hover:underline">Blogs</span></Link>
                    <Link href="#about"><span className="hover:underline">About</span></Link>
                </div>
                <Button variant="outline">Register</Button>
            </nav>

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
                    <Link href={"/article"}>
                    <Button variant="outline">Explore Blogs</Button>
                    </Link>
                </div>
            </section>

            {/* Features */}
            <section id="features" className="relative z-10 mt-32 px-6 max-w-6xl mx-auto">
                <TextGenerateEffect
                    text="Powerful features, built for bloggers."
                    className="text-center mb-12 font-popoins font-semibold text-3xl dark:text-white"
                />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            title: "AI Writer",
                            desc: "Generate blog ideas, outlines, and full posts with AI assistance.",
                        },
                        {
                            title: "Custom Profiles",
                            desc: "Showcase your content and personality with personalized pages.",
                        },
                        {
                            title: "Engagement Tools",
                            desc: "Real-time feedback, shares, highlights, and reactions.",
                        },
                    ].map((feat, idx) => (
                        <div
                            key={idx}
                            className="p-6 border border-border rounded-lg backdrop-blur-sm bg-muted/10 hover:scale-[1.02] transition"
                        >
                            <h3 className="text-xl font-bold mb-2 dark:text-white">{feat.title}</h3>
                            <p className="text-sm text-zinc-400 dark:text-zinc-300">{feat.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Blogs Preview */}
            <section id="blogs" className="relative z-10 mt-32 px-6 max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4 dark:text-white">Latest Blogs</h2>
                <p className="text-zinc-400 dark:text-zinc-300 mb-6">Check out trending posts from our vibrant community</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[1, 2, 3].map((i) => (
                        <div
                            key={i}
                            className="p-4 rounded-xl bg-muted/10 border border-border hover:bg-muted/20 transition"
                        >
                            <h3 className="text-xl font-semibold mb-2 dark:text-white">Blog Title #{i}</h3>
                            <p className="text-sm text-zinc-400 dark:text-zinc-300">Short preview of a smart and engaging blog post...</p>
                        </div>
                    ))}
                </div>
                <div className="mt-8">
                    <Button>See All Blogs</Button>
                </div>
            </section>

            {/* Footer */}
            <footer className="w-full mt-32 py-10 text-center text-sm text-zinc-400 dark:text-zinc-300 relative z-10">
                Built with ❤️ by <a href="https://egwimcodes.dev" className="underline text-pink-400">egwimcodes</a> • © {new Date().getFullYear()}
            </footer>

            {/* Background Animation */}
            <BackgroundBeams />
        </main>
    );
}
