"use client"
import Image from "next/image";
import OutlineBtn from "./OutlineBtn";
import { BiBookmarkAltPlus } from "react-icons/bi";
import { HiOutlineHandThumbUp } from "react-icons/hi2";
import { FaRegComment } from "react-icons/fa6";
import { CiMenuKebab } from "react-icons/ci";
import GradientImageBorder from "./GradientImageBorder";
import { motion, easeInOut } from "framer-motion";

// Animation variant for fade and slight slide
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
export default function ArticleCard() {
    return (
        <motion.article
            className="article-card w-full"
            initial="hidden"
            animate="visible"
            variants={cardVariants}
        >
            <div className="content-card relative h-[260px]">
                <div className="relative h-[250px] w-[95dvw] lg:w-[45dvw] max-w-[700px] flex flex-col justify-end">

                    {/* Main card */}
                    <motion.div
                        className="p-[1px] h-[80%] rounded-xl bg-gradient-to-t from-purple-600 via-pink-500 to-purple-600 overflow-hidden"
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <div className="bg-white dark:bg-black px-6 rounded-[calc(0.75rem-1px)] h-full">
                            {/* Time and menu */}
                            <div className="flex flex-row items-center justify-end py-2">
                                <div className="flex flex-row items-center space-x-2">
                                    <p className="font-poppins text-sm text-gray-500 dark:text-gray-400">1 min ago</p>
                                    <CiMenuKebab className="w-4 h-4 text-brand dark:text-brand" />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="article-content-container">
                                <h2 className="title text-base font-inter font-bold mb-2">
                                    2050’s Ultimate Speed Machines: The Sports Cars of Tomorrow...
                                </h2>

                                <div className="mini-content w-full flex flex-row gap-4">
                                    <p className="flex-[3] text-sm leading-relaxed line-clamp-4 lg:line-clamp-5 text-gray-500 dark:text-gray-400">
                                        It’s frustrating to spend days on a draft, finally get ready to hit that publish button, only to then spend extra time hunting for the perfect picture to illustrate your story.
                                    </p>
                                    <div className="featured-image flex-[1] max-w-[100px] self-stretch flex justify-end">
                                        <GradientImageBorder />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Author card */}
                    <motion.div
                        className="author-card absolute top-2 left-5"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.4 }}
                    >
                        <div className="p-[1px] w-[50dvw] md:w-[25dvw] lg:w-[16dvw] max-w-[300px] rounded-xl bg-gradient-to-t from-purple-600 via-pink-500 to-purple-600 overflow-hidden">
                            <div className="bg-white dark:bg-black p-2 rounded-[calc(0.75rem-1px)]">
                                <div className="flex items-center justify-between">
                                    <div className="avatar w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden">
                                        <Image
                                            src="/images/avatar1.jpg"
                                            alt="Author avatar"
                                            width={40}
                                            height={40}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="h-10 w-[80%] flex flex-col items-start justify-between">
                                        <div className="flex items-center justify-between w-full">
                                            <h3 className="ps-2 md:ps-0 text-sm font-poppins font-semibold truncate">
                                                Ana Belly
                                            </h3>
                                            <div className="h-6">
                                                <OutlineBtn label="follow" />
                                            </div>
                                        </div>
                                        <h3 className="ps-2 w-[95%] md:ps-0 text-sm text-gray-500 dark:text-gray-400 font-poppins truncate">
                                            Financial business expert
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Icons card */}
                    <motion.div
                        className="author-card-icons absolute w-[40dvw] md:w-[20dvw] lg:w-[14dvw] max-w-[240px] top-3 right-0"
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
                                <span className="text-sm text-gray-500 dark:text-gray-400 font-poppins">1.3k</span>
                            </div>
                            <div className="flex items-center space-x-1" title="Comments">
                                <FaRegComment className="w-5 h-5 text-brand dark:text-brand" />
                                <span className="text-sm text-gray-500 dark:text-gray-400 font-poppins">1.3k</span>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </motion.article>
    );
}
