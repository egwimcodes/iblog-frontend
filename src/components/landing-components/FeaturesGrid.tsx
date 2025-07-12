'use client';
import { FeaturesGridProps } from '@/lib/interface/features';
import { motion, easeOut } from 'framer-motion';
import TypingHeroText from './TypingHeroText';

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15, // This controls the delay between each child animation
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 80 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: easeOut,
        },
    },
};

export default function FeaturesGrid({ features }: FeaturesGridProps) {
    return (<>

        <div className="absolute -top-1/3 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[600px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-transparent to-transparent blur-3xl opacity-20 pointer-events-none" />

        <div className="relative ">
            <h2 className="text-center mb-16 font-poppins font-bold text-4xl md:text-5xl dark:text-white">
                <TypingHeroText />
                <br />
                <span className="text-xl md:text-2xl font-medium text-gray-500 dark:text-gray-400 mt-2 inline-block">
                    Built for the modern blogger
                </span>
            </h2>

            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative"
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{
                    once: false, // Only animate once
                    amount: 0.2, // Trigger when 20% of element is visible
                    margin: "0px 0px -100px 0px" // Adjust trigger point (negative = earlier)
                }}
            >
                {features.map((feat, idx) => (
                    <motion.div
                        key={idx}
                        variants={cardVariants}
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
                    </motion.div>
                ))}
            </motion.div>
        </div>

    </>

    );
}