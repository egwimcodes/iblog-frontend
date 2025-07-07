'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
import TextBtn from "./TextBtn";
import IblogPicksSkeleton from "./Skeletons/IblogPicksSkeleton";

export default function IBlogPicks() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1200);
        return () => clearTimeout(timer);
    }, []);



    return (
        <div className="w-full flex flex-col">
            {/* Header */}
            <h1 className="text-lg md:text-lg font-bold">
                <span className="relative inline-block">
                    <span className="relative z-10">IBlog Picks ✨</span>
                    <span className="block absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 rounded-full"></span>
                </span>
            </h1>
            {/* Picks List */}
            {loading ? (<IblogPicksSkeleton />) : (<div className="items w-full space-y-6 mt-6">
                {[1, 2, 3].map((_, index) => (
                    <div key={index} className="space-y-2">
                        {/* Author Info */}
                        <div className="flex items-center gap-3">
                            <div className="flex-shrink-0">
                                <div className="avatar w-6 h-6 rounded-full overflow-hidden">
                                    <Image
                                        src={`/images/${index === 2 ? "avatar1.jpg" : "user-avatar.jpg"}`}
                                        alt="Author avatar"
                                        width={24}
                                        height={24}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                            <div className="flex justify-between w-full text-sm">
                                <h3 className="text-sm font-bold font-poppins">Ana Belly</h3>
                                <h3 className="text-[10px] font-poppins">2d ago</h3>
                            </div>
                        </div>
                        {/* Post Title */}
                        <h2 className="text-[12px] font-bold font-inter text-gray-600 dark:text-gray-400 line-clamp-2">
                            2050’s Ultimate Speed Machines: The Sports Cars of Tomorrow...
                        </h2>
                        {/* Divider */}
                        <hr className="border-t border-gray-300 dark:border-gray-700" />
                        {/* Content Snippet */}
                        <p className="text-[11px] text-gray-500 dark:text-gray-400 line-clamp-3">
                            Discover the most anticipated sports cars of 2050, featuring
                            groundbreaking technology and mind-blowing speed. Get ready to
                            be amazed by the future of automotive engineering.
                        </p>
                        {/* Read More Button */}
                        <div className="flex justify-end text-sm">
                            <TextBtn label="Read Full Article  -->" />
                        </div>
                    </div>
                ))}
            </div>)}
        </div>
    );
}