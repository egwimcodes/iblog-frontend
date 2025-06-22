"use client";
import Image from "next/image";
import Link from "next/link";
import OutlineBtn from "./OutlineBtn";
import { BiBookmarkAltPlus } from "react-icons/bi";
import { HiOutlineHandThumbUp } from "react-icons/hi2";
import { FaRegComment } from "react-icons/fa6";
import { CiMenuKebab } from "react-icons/ci";
import GradientImageBorder from "./GradientImageBorder";
import { motion, easeInOut } from "framer-motion";
import { ArticleData } from "@/lib/types";

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: easeInOut,
        },
    },
};

interface ArticleCardProps {
    data: ArticleData;
}

export default function ArticleCard({ data }: ArticleCardProps) {
    return (
        <motion.article
            className="article-card w-full"
            initial="hidden"
            animate="visible"
            variants={cardVariants}
        >
            <div className="content-card relative xsm:h-[270px] h-[260px] lg:h-[220px]">
                <div className="relative h-[250px] xsm:h-[270px] lg:h-[220px] w-[92dvw] lg:w-[45dvw] max-w-[700px] flex flex-col justify-end">
                    <motion.div
                        className="p-[1px] h-[80%] xsm:h-[75%] rounded-xl bg-gradient-to-t from-purple-600 via-pink-500 to-purple-600 overflow-hidden"
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <div className="bg-background-light dark:bg-background-dark transition-colors duration-500 px-[5%] rounded-[calc(0.75rem-1px)] h-full">
                            <div className="flex flex-row items-center justify-end py-2">
                                <div className="flex flex-row items-center space-x-2 xsm:space-x-1">
                                    <p className="font-poppins xsm:text-[10px] text-sm text-gray-500 dark:text-gray-400">
                                        {data.timeAgo}
                                    </p>
                                    <CiMenuKebab className="w-4 h-4 text-brand dark:text-brand" />
                                </div>
                            </div>

                            <div className="article-content-container">
                                <Link href={`/article/${data.slug}`}>
                                    <h2 className="title text-base text-black dark:text-white font-inter font-bold mb-2 hover:text-purple-600 transition-colors duration-300 cursor-pointer">
                                        {data.title}
                                    </h2>
                                </Link>

                                <div className="mini-content w-full flex flex-row gap-4">
                                    <p className="flex-[3] text-sm leading-relaxed line-clamp-4 text-gray-500 dark:text-gray-400">
                                        {data.excerpt}
                                    </p>
                                    <div className="featured-image flex-[1] min-h-full max-w-[100px] self-stretch flex justify-end">
                                        <GradientImageBorder />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Author */}
                    <motion.div
                        className="author-card absolute top-2 left-5"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.4 }}
                    >
                        <div className="p-[1px] w-[50dvw] md:w-[25dvw] lg:w-[16dvw] max-w-[300px] rounded-xl bg-gradient-to-t from-purple-600 via-pink-500 to-purple-600 overflow-hidden">
                            <div className="bg-background-light dark:bg-background-dark transition-colors duration-500 p-2 rounded-[calc(0.75rem-1px)]">
                                <div className="flex items-center justify-between">
                                    <div className="avatar w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden">
                                        <Image
                                            src={data.author.avatar}
                                            alt={data.author.name}
                                            width={40}
                                            height={40}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="h-10 w-[80%] flex flex-col items-start justify-between">
                                        <div className="flex items-center justify-between w-full">
                                            <h3 className="ps-2 md:ps-0 text-sm text-black dark:text-white font-poppins font-semibold truncate">
                                                {data.author.name}
                                            </h3>
                                            <div className="h-6">
                                                <OutlineBtn label="follow" />
                                            </div>
                                        </div>
                                        <h3 className="ps-2 w-[95%] md:ps-0 text-sm text-gray-500 dark:text-gray-400 font-poppins truncate">
                                            {data.author.bio}
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Icons */}
                    <motion.div
                        className="author-card-icons absolute xsm:relative xsm:w-[170px] ml-auto w-[38dvw] md:w-[20dvw] lg:w-[14dvw] max-w-[240px] top-3 right-0"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5, duration: 0.4 }}
                    >
                        <div className="flex flex-row justify-evenly">
                            <div title="Save">
                                <BiBookmarkAltPlus className="w-5 h-5 text-brand dark:text-brand" />
                            </div>
                            <div className="flex items-center space-x-1" title="Likes">
                                <HiOutlineHandThumbUp className="w-5 h-5 text-brand dark:text-brand" />
                                <span className="text-sm text-gray-500 dark:text-gray-400 font-poppins">{data.likes}</span>
                            </div>
                            <div className="flex items-center space-x-1" title="Comments">
                                <FaRegComment className="w-5 h-5 text-brand dark:text-brand" />
                                <span className="text-sm text-gray-500 dark:text-gray-400 font-poppins">{data.comments}</span>
                            </div>
                        </div>
                        <hr className="mt-2 h-[2px] hidden xsm:block w-full bg-gradient-to-r from-purple-600 via-pink-700 to-purple-600 border-0 rounded-full" />
                    </motion.div>
                </div>
            </div>
        </motion.article>
    );
}
