'use client';
import { Button } from "@headlessui/react";
import { motion, Variants } from "framer-motion";
import { FaRocket, FaUsers, FaLightbulb } from "react-icons/fa";

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            when: "beforeChildren"
        }
    }
};

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};

const statsVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    show: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: "circOut"
        }
    }
};

export default function AboutSection() {
    return (
        <section className="relative py-16 px-4 sm:px-6 lg:px-8">
            {/* Gradient line */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-30" />

            {/* Content grid */}
            <motion.div
                className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto"
                initial="hidden"
                whileInView="show"
                viewport={{
                    once: false,
                    amount: 0.2,
                    margin: "0px 0px -100px 0px"
                }}
                variants={containerVariants}
            >
                {/* Left column - text content */}
                <motion.div variants={cardVariants}>
                    <div className="space-y-6">
                    
                        <h2 className="text-3xl font-bold mb-2 dark:text-white">
                            <span className="relative inline-block">
                                <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-amber-500 text-transparent bg-clip-text bg-300% animate-gradient">
                                    About
                                </span>
                                <span className="absolute -bottom-2 left-0 h-1 w-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                            </span>
                        </h2>

                        <h3 className="text-lg dark:text-white font-semibold mb-4">
                            Why We Built <span className="text-purple-500">IBLOG</span>
                        </h3>

                        <motion.p
                            className="text-zinc-500 dark:text-zinc-300"
                            variants={statsVariants}
                        >
                            We saw creators struggling with outdated platforms that prioritized algorithms over authentic expression.
                        </motion.p>

                        <motion.p
                            className="text-zinc-500 dark:text-zinc-300"
                            variants={statsVariants}
                        >
                            Our mission is to give writers the tools they need without compromising their voice or vision.
                        </motion.p>

                        <motion.div
                            className="grid grid-cols-2 gap-4 mt-8"
                            variants={containerVariants}
                        >
                            <motion.div
                                className="p-4 rounded-xl bg-transparent dark:bg-white/5 backdrop-blur-sm border border-zinc-300/40 dark:border-white/10 hover:bg-zinc-200/60 dark:hover:bg-white/10 transition-colors"
                                variants={statsVariants}
                            >
                                <FaRocket className="text-purple-400 mb-2 text-2xl" />
                                <div className="text-2xl font-bold text-zinc-800 dark:text-white">10K+</div>
                                <div className="text-sm text-zinc-600 dark:text-zinc-300">Active Writers</div>
                            </motion.div>

                            <motion.div
                                className="p-4 rounded-xl bg-transparent dark:bg-white/5 backdrop-blur-sm border border-zinc-300/40 dark:border-white/10 hover:bg-zinc-200/60 dark:hover:bg-white/10 transition-colors"
                                variants={statsVariants}
                            >
                                <FaUsers className="text-pink-400 mb-2 text-2xl" />
                                <div className="text-2xl font-bold text-zinc-800 dark:text-white">1M+</div>
                                <div className="text-sm text-zinc-600 dark:text-zinc-300">Monthly Readers</div>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Right column - visual element */}
                <motion.div
                    className="relative h-64 md:h-80 rounded-2xl overflow-hidden border border-white/10"
                    variants={cardVariants}
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <FaLightbulb className="text-6xl text-white opacity-20" />
                    </div>
                </motion.div>
            </motion.div>

            {/* Read more button */}
            <motion.div
                className="mt-8 flex justify-end"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                transition={{ delay: 0.3 }}
            >
                <Button className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:shadow-lg transition-all">
                    Read More
                </Button>
            </motion.div>
        </section>
    );
}