'use client';
import TextBtn from "@/components/global/TextBtn";
import Image from "next/image";
import { useState } from "react";
import { FaRegComment } from "react-icons/fa6";
import { HiOutlineHandThumbUp } from "react-icons/hi2";

export default function SavedDraftMyArticles() {
    const [selected, setSelected] = useState('Saved');
    const topics = ['Saved', 'Draft', 'My Articles'];

    return (
        <div className="w-full mx-auto px-4 py-6 ">
            {/* Tab Navigation */}
            <div className="flex justify-center mb-6">
                <div className="flex space-x-6 overflow-x-auto pb-2 no-scrollbar">
                    {topics.map((topic) => (
                        <button
                            key={topic}
                            onClick={() => setSelected(topic)}
                            className={`relative px-1 py-2 text-sm font-medium transition-colors ${selected === topic
                                ? 'text-black dark:text-white'
                                : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                                }`}
                        >
                            {topic}
                            {selected === topic && (
                                <span className="absolute left-0 bottom-0 h-0.5 w-full bg-gradient-to-r from-pink-500 to-purple-600 rounded-full" />
                            )}
                        </button>
                    ))}
                </div>
            </div>

            {/* Articles Saved List */}
            {selected === 'Saved' && (<div className="saved space-y-4 w-full">
                {[1, 2, 3].map((_, i) => (<div key={i}>
                    <div className="flex gap-4">
                        {/* Article Image */}
                        <div className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 relative rounded-md overflow-hidden">
                            <Image
                                src={'/images/3d-car.jpg'}
                                alt="Article thumbnail"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 80px, 96px"
                            />
                        </div>

                        {/* Article Content */}
                        <div className="flex-1 flex flex-col justify-between">
                            <div className="flex justify-between items-start gap-2">
                                <h2 className="text-sm md:text-xl font-semibold text-gray-800 dark:text-gray-200 line-clamp-2">
                                    2050&apos;s Ultimate Speed Machines: The Sports Cars of Tomorrow...
                                </h2>
                                <span className="text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap">2d ago</span>
                            </div>

                            {/* Author and Actions */}
                            <div className="mt-2 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="w-6 h-6 rounded-full overflow-hidden">
                                        <Image
                                            src="/images/user-avatar.jpg"
                                            alt="Author avatar"
                                            width={24}
                                            height={24}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <span className="text-xs font-medium text-gray-700 dark:text-gray-300 text-nowrap">Ana Belly</span>
                                </div>

                                <div className="w-full flex items-center justify-between gap-4">
                                    <div className=""></div>
                                    <div className="flex items-center gap-4">
                                        {/* <button className="flex items-center gap-1 text-gray-500 dark:text-gray-400 hover:text-pink-500">
                                        <BiBookmarkAltPlus className="w-4 h-4" />
                                    </button> */}
                                        <button className="flex items-center gap-1 text-gray-500 dark:text-gray-400 hover:text-pink-500">
                                            <HiOutlineHandThumbUp className="w-4 h-4" />
                                            <span className="text-xs">90k</span>
                                        </button>
                                        <button className="flex items-center gap-1 text-gray-500 dark:text-gray-400 hover:text-pink-500">
                                            <FaRegComment className="w-4 h-4" />
                                            <span className="text-xs">90k</span>
                                        </button>
                                    </div>

                                    <TextBtn label="remove" className="text-xs" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="border-gray-300" />

                </div>

                ))}
            </div>)}

            {/* Articles Draft List */}
            {selected === 'Draft' && (<div className="saved space-y-4 w-full">
                {[1, 2, 3].map((_, i) => (<div key={i}>
                    <div key={i} className="flex gap-4">
                        {/* Article Image */}
                        <div className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 relative rounded-md overflow-hidden">
                            <Image
                                src={'/images/3d-car.jpg'}
                                alt="Article thumbnail"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 80px, 96px"
                            />
                        </div>

                        {/* Article Content */}
                        <div className="flex-1 flex flex-col justify-between">
                            <div className="flex justify-between items-start gap-2">
                                <h2 className="text-sm md:text-xl font-semibold text-gray-800 dark:text-gray-200 line-clamp-2">
                                    2050&apos;s Ultimate Speed Machines: The Sports Cars of Tomorrow...
                                </h2>
                                <span className="text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap">2d ago</span>
                            </div>

                            {/* Author and Actions */}
                            <div className="mt-2 flex items-center justify-between">
                                <div className="w-full flex items-center justify-between gap-4">
                                    <div className="flex items-center gap-4">
                                        {/* <button className="flex items-center gap-1 text-gray-500 dark:text-gray-400 hover:text-pink-500">
                                        <BiBookmarkAltPlus className="w-4 h-4" />
                                    </button> */}
                                        <button className="flex items-center gap-1 text-gray-500 dark:text-gray-400 hover:text-pink-500">
                                            <HiOutlineHandThumbUp className="w-4 h-4" />
                                            <span className="text-xs">90k</span>
                                        </button>
                                        <button className="flex items-center gap-1 text-gray-500 dark:text-gray-400 hover:text-pink-500">
                                            <FaRegComment className="w-4 h-4" />
                                            <span className="text-xs">90k</span>
                                        </button>
                                    </div>

                                    <TextBtn label="remove" className="text-xs" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="border-gray-300" />

                </div>

                ))}
            </div>)}

            {/* Articles Published List */}
            {selected === 'My Articles' && (<div className="saved space-y-4 w-full">
                {[1, 2, 3].map((_, i) => (<div key={i}>
                    <div key={i} className="flex gap-4">
                        {/* Article Image */}
                        <div className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 relative rounded-md overflow-hidden">
                            <Image
                                src={'/images/3d-car.jpg'}
                                alt="Article thumbnail"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 80px, 96px"
                            />
                        </div>

                        {/* Article Content */}
                        <div className="flex-1 flex flex-col justify-between">
                            <div className="flex justify-between items-start gap-2">
                                <h2 className="text-sm md:text-xl font-semibold text-gray-800 dark:text-gray-200 line-clamp-2">
                                    2050&apos;s Ultimate Speed Machines: The Sports Cars of Tomorrow...
                                </h2>
                                <span className="text-xs text-gray-500 dark:text-gray-400 whitespace-nowrap">2d ago</span>
                            </div>

                            {/* Author and Actions */}
                            <div className="mt-2 flex items-center justify-between">
                                <div className="w-full flex items-center justify-between gap-4">
                                    <div className="flex items-center gap-4">

                                        <button className="flex items-center gap-1 text-gray-500 dark:text-gray-400 hover:text-pink-500">
                                            <HiOutlineHandThumbUp className="w-4 h-4" />
                                            <span className="text-xs">90k</span>
                                        </button>
                                        <button className="flex items-center gap-1 text-gray-500 dark:text-gray-400 hover:text-pink-500">
                                            <FaRegComment className="w-4 h-4" />
                                            <span className="text-xs">90k</span>
                                        </button>
                                    </div>
                                    <div className="edd-btn flex  gap-2">
                                        <TextBtn label="edit" className="text-xs" />
                                        <TextBtn label="draft" className="text-xs" />
                                        <TextBtn label="remove" className="text-xs " />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className="border-gray-300" />

                </div>

                ))}
            </div>)}

        </div>
    );
}