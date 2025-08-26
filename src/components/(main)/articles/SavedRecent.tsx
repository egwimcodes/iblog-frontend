'use client'
import SavedRecentSkeleton from "@/components/components-skeletons/SavedRecentSkeleton";
import Image from "next/image"
import { useState, useEffect } from "react"
import { FaBookmark, FaClock } from "react-icons/fa";

export default function SavedRecent() {
    const [selected, setSelected] = useState('Saved');
    const [loading, setLoading] = useState(true);

    // Simulate loading (replace with real data fetching logic)
    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1200);
        return () => clearTimeout(timer);
    }, []);

    const topics = [
        { label: 'Saved', icon: <FaBookmark className="mr-2 text-pink-500" /> },
        { label: 'Recent', icon: <FaClock className="mr-2 text-purple-500" /> }
    ];

    // Example content for each tab
    const savedContent = (
        <div className="w-full px-2 mt-4 space-y-6">
            {[1, 2, 3].map((_, i) => (
                <div key={i} className="space-y-2">
                    <div className="flex items-center space-x-2">
                        <div className="flex-shrink-0">
                            <div className="avatar w-6 h-6 rounded-full overflow-hidden ">
                                <Image
                                    src={`/images/user-avatar.jpg`}
                                    alt="Author avatar"
                                    width={24}
                                    height={24}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        <div className="flex justify-between w-full">
                            <h3 className="text-sm font-bold font-poppins">Ana Belly</h3>
                            <h3 className="text-[10px] font-poppins">2d ago</h3>
                        </div>
                    </div>
                    <h2 className="text-[12px] font-bold font-inter text-gray-600 dark:text-gray-400 line-clamp-2">
                        2050’s Ultimate Speed Machines: The Sports Cars of Tomorrow...
                    </h2>
                    <hr className="border-gray-300" />
                </div>
            ))}
        </div>
    );

    const recentContent = (
        <div className="w-full px-2 mt-4 space-y-6">
            {[1, 2, 3].map((_, i) => (
                <div key={i} className="space-y-2">
                    <div className="flex items-center space-x-2">
                        <div className="flex-shrink-0">
                            <div className="avatar w-6 h-6 rounded-full overflow-hidden ">
                                <Image
                                    src={`/images/user-avatar.jpg`}
                                    alt="Author avatar"
                                    width={24}
                                    height={24}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        <div className="flex justify-between w-full">
                            <h3 className="text-sm font-bold font-poppins">Ana Belly</h3>
                            <h3 className="text-[10px] font-poppins">1h ago</h3>
                        </div>
                    </div>
                    <h2 className="text-[12px] font-bold font-inter text-gray-600 dark:text-gray-400 line-clamp-2">
                        The Future of Electric Cars: What to Expect in 2050...
                    </h2>
                    <hr className="border-gray-300" />
                </div>
            ))}
        </div>
    );

    return (
        <div className="flex flex-col w-full items-center">
            <div className="h-14 flex items-center space-x-2 overflow-x-auto w-full px-2 no-scrollbar mx-auto">
                <ul className="flex space-x-4 overflow-x-auto whitespace-nowrap scroll-smooth">
                    {topics.map((topic) => (
                        <li
                            key={topic.label}
                            onClick={() => setSelected(topic.label)}
                            className={`cursor-pointer font-medium pb-1 flex items-center ${selected === topic.label
                                ? 'text-black dark:text-white'
                                : 'text-gray-500 dark:text-gray-400'
                                }`}
                        >
                            <span className="inline-flex items-center relative">
                                {topic.icon}
                                {topic.label}
                                {selected === topic.label && (
                                    <span className="absolute left-0 -bottom-1 h-[3px] w-full bg-gradient-to-t from-pink-500 to-pink-300 rounded-full transition-all duration-500"></span>
                                )}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>

            {loading ? (
                <SavedRecentSkeleton />
            ) : selected === 'Saved' ? (
                savedContent
            ) : (
                recentContent
            )}
        </div>
    )
}
