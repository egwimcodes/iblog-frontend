'use client';
import { FeaturesGridProps } from '@/lib/interface/features';
import { motion, easeOut } from 'framer-motion';

// const containerVariants = {
//     hidden: {},
//     show: {
//         transition: {
//             staggerChildren: 0.15,
//         },
//     },
// };

const getCardVariant = (index: number) => ({
    
    hidden: { opacity: 0, y: 40 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5 + index * 0.1, // each card delays a bit more
            ease: easeOut,
        },
    },
});
export default function FeaturesGrid({features}:FeaturesGridProps) {
    return (
        <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative"
           
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
        >
            {features.map((feat, idx) => (
                console.log(idx),
                <motion.div
                    key={idx}
                    variants={getCardVariant(idx)}
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
    );
}
