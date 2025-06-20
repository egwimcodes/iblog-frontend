import Image from "next/image";
import OutlineBtn from "./OutlineBtn";
import { BiBookmarkAltPlus } from "react-icons/bi";
import { HiOutlineHandThumbUp } from "react-icons/hi2";
import { FaRegComment } from "react-icons/fa6";
import GradientImageBorder from "./GradientImageBorder";


export default function ArticleCard() {
    return (<div className="article-card w-[95dvw] md:w-[50dvw]">

        <div className="content-card relative h-[200px]">
            {/* Make sure this parent has an explicit height */}
            <div className="relative h-[225px] md:h-[230px] lg:w-[45dvw] flex flex-col justify-end">
                {/* This is the div you want to be 80% of parent */}
                <div className="p-[1px] h-[80%] rounded-xl bg-gradient-to-t from-purple-600 via-pink-500 to-purple-600 overflow-hidden">
                    <div className="bg-white dark:bg-black p-6 rounded-[calc(0.75rem-1px)] h-full">
                        <div className="time-posted-menu"></div>
                        <div className="article-content-container">
                            <h2 className="title text-base font-inter font-bold mb-2">
                                2050’s Ultimate Speed Machines: The Sports Cars of Tomorrow...
                            </h2>

                            <div className="mini-content w-full flex flex-row flex-nowrap items-start gap-4 ">
                                <p className="flex-[3] text-sm leading-relaxed line-clamp-4 overflow-hidden text-gray-500 dark:text-gray-400">
                                    It’s frustrating to spend days on a draft, finally get ready to hit that publish button, only to then spend extra time hunting for the perfect picture to illustrate your story. It’s frustrating to spend days on a draft, finally get ready for the perfect picture to illustrate your story. It’s days on a draft, finally get ready to hit.
                                </p>
                                <div className="featured-image h-20 flex-[1] w-[30%] flex flex-row justify-end">
                                    <GradientImageBorder />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Author card on top */}
                <div className="author-card absolute top-2 left-5 ">
                    <div className="p-[1px] w-[50dvw] md:w-[25dvw] lg:w-[16dvw] rounded-xl bg-gradient-to-t from-purple-600 via-pink-500 to-purple-600 overflow-hidden">
                        <div className="bg-white dark:bg-black p-2 rounded-[calc(0.75rem-1px)] ">
                            <div className="author-container flex flex-row items-center justify-between">

                                <div className="avatar w-10 h-10 rounded-full overflow-hidden">
                                    <Image
                                        src="/images/avatar1.jpg"
                                        alt="Avatar"
                                        width={40}
                                        height={40}
                                        priority
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <div className="author-follow-btn h-10 w-[80%] flex flex-col items-start justify-between">
                                    <div className="author-name-follow w-[100%] flex flex-row items-center justify-between">
                                        <h3 className="ps-2 md:ps-0 text-sm font-poppins font-semibold truncate overflow-hidden whitespace-nowrap">
                                            Ana Belly
                                        </h3>

                                        <div className="follow-btn h-6">
                                            <OutlineBtn label="follow" />
                                        </div>
                                    </div>
                                    <h3 className="ps-2 w-[95%] md:ps-0 text-sm text-gray-500 dark:text-gray-400 font-poppins font-semibold truncate overflow-hidden whitespace-nowrap">Financial business expert</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="author-card-icons absolute w-[40dvw] md:w-[20dvw] top-3 right-0 ">
                    <div className="icon-label-container flex flex-row justify-evenly ">
                        <div className="icon-label">
                            <BiBookmarkAltPlus className="w-5 h-5 text-brand dark:text-brand" />
                        </div>
                        <div className="icon-label flex flex-row justify-between items-center space-x-1"><HiOutlineHandThumbUp className="w-5 h-5 text-brand dark:text-brand" />
                            <h3 className=" text-sm text-gray-500 dark:text-gray-400 font-poppins font-semibold  overflow-hidden whitespace-nowrap">1.3k</h3>
                        </div>
                        <div className="icon-label flex flex-row justify-between items-center space-x-1"><FaRegComment className="w-5 h-5 text-sm text-brand dark:text-brand" />
                            <h3 className="text-sm text-gray-500 dark:text-gray-400 font-poppins font-semibold  overflow-hidden whitespace-nowrap">1.3k</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </div>
    );
}