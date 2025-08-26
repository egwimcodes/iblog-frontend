'use client';

import Image from "next/image";
import { Spotlight } from "@/components/global/Spotlight";
import { TextGenerateEffect } from "@/components/(main)/editors/text-generate-effect";
import { BackgroundBeams } from "@/components/landing/background-beams";
import { Button } from "@/components/global/Button";
import { FaRocket, FaLightbulb, FaUsers, FaHeart } from "react-icons/fa";

export default function About() {
    const aboutText = "IBLOG was born from a simple idea: blogging should be effortless yet powerful. We combine AI intelligence with human creativity to give you the best publishing experience on the web.";
    const stats = [
        { value: "10K+", label: "Active Writers", icon: <FaUsers className="text-2xl" /> },
        { value: "1M+", label: "Monthly Readers", icon: <FaHeart className="text-2xl" /> },
        { value: "2023", label: "Founded", icon: <FaLightbulb className="text-2xl" /> },
        { value: "100%", label: "Passion", icon: <FaRocket className="text-2xl" /> }
    ];

    const team = [
        {
            name: "Alex Johnson",
            role: "Founder & CEO",
            bio: "Former tech journalist turned entrepreneur",
            img: "/images/team1.jpg"
        },
        {
            name: "Maria Chen",
            role: "Head of Product",
            bio: "UX specialist with a love for storytelling",
            img: "/images/team2.jpg"
        },
        {
            name: "Jamal Williams",
            role: "Lead Developer",
            bio: "Full-stack wizard and open-source advocate",
            img: "/images/team3.jpg"
        }
    ];

    return (
        <>
            <main className="relative min-h-screen w-full bg-background text-foreground overflow-hidden">




                {/* Hero Section */}
                <section className="pt-[120px] md:pt-[140px] px-6 max-w-6xl mx-auto text-center relative z-10">
                    <Spotlight className="top-40 left-1/4 h-[40vh] w-[50vw]" fill="white" />

                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight dark:text-white mb-6">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                            Our Story
                        </span>
                    </h1>

                    <div className="max-w-3xl mx-auto">
                        <TextGenerateEffect text={aboutText} className="text-lg md:text-xl text-zinc-500 dark:text-zinc-300" />
                    </div>

                    <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="p-4 rounded-xl 
                                       bg-transparent dark:bg-white/5 
                                       backdrop-blur-sm 
                                       border border-zinc-300/40 dark:border-white/10 
                                       hover:bg-zinc-200/60 dark:hover:bg-white/10 
                                       transition-colors"
                            >
                                <div className="text-purple-600 dark:text-purple-400 mb-2">{stat.icon}</div>
                                <div className="text-2xl font-bold text-zinc-800 dark:text-white">{stat.value}</div>
                                <div className="text-sm text-zinc-600 dark:text-zinc-300">{stat.label}</div>
                            </div>

                        ))}
                    </div>
                </section>

                {/* Mission Section */}
                <section className="relative mt-32 px-6 max-w-6xl mx-auto">
                    <div className="absolute -top-20 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-30" />

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6 dark:text-white">
                                Why We Built <span className="text-purple-500">IBLOG</span>
                            </h2>
                            <p className="text-zinc-500 dark:text-zinc-300 mb-4">
                                We saw creators struggling with outdated platforms that prioritized algorithms over authentic expression.
                            </p>
                            <p className="text-zinc-500 dark:text-zinc-300">
                                Our mission is to give writers the tools they need without compromising their voice or vision.
                            </p>
                        </div>
                        <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden border border-white/10">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <FaRocket className="text-6xl text-white opacity-20" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="mt-32 px-6 max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold mb-12 text-center dark:text-white">
                        Meet The <span className="text-pink-500">Team</span>
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        {team.map((member, index) => (
                            <div key={index} className="group relative">
                                <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-50 blur transition duration-500" />
                                <div className="relative h-full bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 overflow-hidden">
                                    <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden border-2 border-white/20">
                                        <Image
                                            src={member.img}
                                            alt={member.name}
                                            className="w-full h-full object-cover"
                                            width={24}
                                            height={24}
                                        />
                                    </div>
                                    <h3 className="text-xl font-bold text-center text-white">{member.name}</h3>
                                    <p className="text-purple-400 text-center mb-2">{member.role}</p>
                                    <p className="text-zinc-400 text-center text-sm">{member.bio}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA Section */}
                <section className="mt-32 px-6 max-w-4xl mx-auto text-center">
                    <div className="relative p-8 rounded-2xl bg-gradient-to-br from-purple-900/50 to-pink-900/50 border border-white/10 backdrop-blur-lg">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                            Ready to start your blogging journey?
                        </h2>
                        <p className="text-zinc-300 mb-6 max-w-2xl mx-auto">
                            Join thousands of creators who are already building their audience with IBLOG.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button variant="primary" className="px-8">Get Started</Button>
                            <Button variant="outline" className="px-8">Learn More</Button>
                        </div>
                    </div>
                </section>

                <BackgroundBeams />
            </main>
        </>
    );
}


