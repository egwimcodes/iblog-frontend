'use client'
import Image from "next/image";
import { BiBookmarkAltPlus } from "react-icons/bi";
import { HiOutlineHandThumbUp } from "react-icons/hi2";
import { FaRegComment } from "react-icons/fa6";
import { CiMenuKebab } from "react-icons/ci";
import { motion, easeInOut } from "framer-motion";
import { ArticleData } from "@/lib/types/types";
import { IoSendSharp } from "react-icons/io5";
import GradientImageBorder from "@/components/(main)/articles/GradientImageBorder";
import OutlineBtn from "@/components/global/OutlineBtn";


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

export default function ArticleDetail({ article }: { article: ArticleData }) {

    return (<>
        <motion.article
            className="article-card w-full"
            initial="hidden"
            animate="visible"
            variants={cardVariants}
        >
            <div className="content-card relative ">
                <div className="relative h-fit  w-[92dvw] lg:w-[45dvw] max-w-[700px] flex flex-col justify-end">
                    <motion.div
                        className="p-[1px] h-[80%] xsm:h-[75%]   rounded-xl bg-gradient-to-t from-purple-600 via-pink-500 to-purple-600 overflow-hidden mt-[50px]"
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                    >
                        <div className="bg-background-light h-fit min-h-[60dvh] dark:bg-background-dark transition-colors duration-500 px-[5%] rounded-[calc(0.75rem-1px)] py-4">
                            <div className="flex flex-row items-center justify-end py-2">
                                <div className="flex flex-row items-center space-x-2 xsm:space-x-1">
                                    <p className="font-poppins xsm:text-[10px] text-sm text-gray-500 dark:text-gray-400">
                                        {article.timeAgo}
                                    </p>
                                    <CiMenuKebab className="w-4 h-4 text-brand dark:text-brand" />
                                </div>
                            </div>

                            <div className="article-content-container flex flex-col space-y-4">
                                <h2 className="title text-xl text-black dark:text-white font-inter font-bold mb-2 hover:text-purple-600 transition-colors duration-300 cursor-pointer">
                                    {article.title}
                                </h2>

                                <div className="featured-image h-[180px] sm:h-[220px] md:h-[250px] lg:h-[300px] w-full">
                                    <GradientImageBorder />
                                </div>


                                <div className="mini-content w-full flex flex-row gap-4">
                                    <p className="text-sm leading-relaxed  text-gray-500 dark:text-gray-400">
                                        {article.content}
                                    </p>
                                </div>
                                <div className="article-image h-[180px] sm:h-[220px] md:h-[250px] lg:h-[300px] w-full">
                                    <div className="flex flex-row h-[inherit] space-x-2">

                                        <GradientImageBorder />
                                        <GradientImageBorder />
                                    </div>
                                </div>
                                <div className="mini-content w-full flex flex-row gap-4">
                                    <div className="relative pl-4">
                                        {/* Vertical gradient line */}
                                        <div className="absolute top-0 left-0 w-1 h-full rounded bg-gradient-to-b from-purple-600 via-pink-500 to-purple-600"></div>

                                        <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                                            {article.excerpt}
                                        </p>
                                    </div>
                                </div>

                                <div className="comment-section space-y-4">
                                    <div className="comment">
                                        <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400 mb-2">
                                            Comment
                                        </p>

                                        <div className="w-full p-[1px] rounded-lg bg-gradient-to-t from-purple-600 via-pink-500 to-purple-600 overflow-hidden">
                                            <div className="bg-white dark:bg-background-dark transition-colors duration-500 w-full rounded-lg flex flex-col px-4 py-3 gap-3">

                                                {/* Textarea */}
                                                <textarea
                                                    placeholder="Write your comment..."
                                                    className="w-full min-h-[80px] resize-none bg-transparent outline-none text-sm text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                                                />

                                                {/* Buttons */}
                                                <div className="flex justify-end space-x-4">
                                                    <button
                                                        type="button"
                                                        className="text-xs text-gray-600 dark:text-gray-300 hover:text-red-500 transition"
                                                    >
                                                        Cancel
                                                    </button>

                                                    <button
                                                        className={`max-w-xs h-[100%] p-[1px] rounded-full bg-gradient-to-t from-purple-600 via-pink-500 to-purple-600 overflow-hidden`}
                                                    >
                                                        <div className="bg-background-light dark:bg-background-dark transition-colors duration-500 rounded-full flex items-center justify-center px-4">
                                                            <IoSendSharp className="text-pink-500" />
                                                        </div>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className="peoples-comments">
                                    <div className="w-full flex flex-col">
                                        {/* Picks List */}
                                        <div className="items w-full space-y-6 mt-6">
                                            {[1, 2, 3].map((_, index) => (
                                                <div key={index} className="space-y-2">
                                                    {/* Author Info */}
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
                                                        <div className="h-10 w-[100%] flex flex-col items-start justify-between">
                                                            <div className="flex items-center justify-between w-full">
                                                                <h3 className="ps-2 md:ps-0 text-sm text-black dark:text-white font-poppins font-semibold truncate">
                                                                    Ana Belly
                                                                </h3>
                                                                <p className="font-poppins text-gray-500">2d ago</p>

                                                            </div>
                                                            <h3 className="ps-2 w-[95%] md:ps-0 text-sm text-gray-500 dark:text-gray-400 font-poppins truncate">
                                                                Financial business expert
                                                            </h3>
                                                        </div>
                                                    </div>

                                                    {/* Post Title */}
                                                    <p className="text-sm md:text-base font-inter font-semibold  text-gray-500 dark:text-gray-400">
                                                        You&apos;re absolutely right - these tools are mind-blowing. But hey, at Techlusion, we’ve already been building solutions with AutoGen, Reflex,  long before it was cool 😎.
                                                    </p>
                                                    {/* Icons */}
                                                    <motion.div
                                                        className="author-card-icons  xsm:relative xsm:w-[170px] ml-auto w-[38dvw] md:w-[20dvw] lg:w-[14dvw] max-w-[240px] top-3 right-0"
                                                        initial={{ opacity: 0, x: 20 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: 0.5, duration: 0.4 }}
                                                    >
                                                        <div className="flex flex-row justify-evenly items-center space-x-2">

                                                            <div className="flex items-center space-x-1" title="Likes">
                                                                <HiOutlineHandThumbUp className="w-5 h-5 text-brand dark:text-brand" />
                                                                <span className="text-sm text-gray-500 dark:text-gray-400 font-poppins">{article.likes}</span>
                                                            </div>
                                                            <div className="flex items-center space-x-1" title="Comments">
                                                                <FaRegComment className="w-5 h-5 text-brand dark:text-brand" />
                                                                <span className="text-sm text-gray-500 dark:text-gray-400 font-poppins">{article.comments}</span>
                                                            </div>
                                                            <div title="reply">
                                                                <p className="text-base font-inter font-semibold underline  text-gray-500 dark:text-gray-400">
                                                                    reply
                                                                </p>
                                                            </div>
                                                        </div>
                                                        <hr className="mt-2 h-[2px] hidden xsm:block w-full bg-gradient-to-r from-purple-600 via-pink-700 to-purple-600 border-0 rounded-full" />
                                                    </motion.div>
                                                    {/* Divider */}
                                                    <hr className="border-t border-gray-300" />
                                                </div>
                                            ))}
                                        </div>
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
                                            src={article.author.avatar}
                                            alt={article.author.name}
                                            width={40}
                                            height={40}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="h-10 w-[80%] flex flex-col items-start justify-between">
                                        <div className="flex items-center justify-between w-full">
                                            <h3 className="ps-2 md:ps-0 text-sm text-black dark:text-white font-poppins font-semibold truncate">
                                                {article.author.name}
                                            </h3>
                                            <div className="h-6">
                                                <OutlineBtn label="follow" />
                                            </div>
                                        </div>
                                        <h3 className="ps-2 w-[95%] md:ps-0 text-sm text-gray-500 dark:text-gray-400 font-poppins truncate">
                                            {article.author.bio}
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
                                <span className="text-sm text-gray-500 dark:text-gray-400 font-poppins">{article.likes}</span>
                            </div>
                            <div className="flex items-center space-x-1" title="Comments">
                                <FaRegComment className="w-5 h-5 text-brand dark:text-brand" />
                                <span className="text-sm text-gray-500 dark:text-gray-400 font-poppins">{article.comments}</span>
                            </div>
                        </div>
                        <hr className="mt-2 h-[2px] hidden xsm:block w-full bg-gradient-to-r from-purple-600 via-pink-700 to-purple-600 border-0 rounded-full" />
                    </motion.div>
                </div>
            </div>
        </motion.article>

    </>

    );
}