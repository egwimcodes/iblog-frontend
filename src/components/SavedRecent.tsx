'use client'
import Image from "next/image"
import { useState } from "react"
export default function SavedRecent() {
    const [selected, setSelected] = useState('Saved')
    const topics = ['Saved', 'Recent']

    return (
        <div className="flex flex-col w-full items-center">
            <div className="h-14 flex items-center space-x-2 overflow-x-auto w-full px-2 no-scrollbar mx-auto">
                <ul className="flex space-x-4 overflow-x-auto whitespace-nowrap scroll-smooth">
                    {topics.map((topic) => (
                        <li
                            key={topic}
                            onClick={() => setSelected(topic)}
                            className={`cursor-pointer font-medium pb-1 ${selected === topic
                                ? 'text-black dark:text-white'
                                : 'text-gray-500 dark:text-gray-400'
                                }`}
                        >
                            <span className="inline-block relative">
                                {topic}
                                {selected === topic && (
                                    <span className="absolute left-0 -bottom-1 h-[3px] w-full bg-gradient-to-t from-pink-500 to-pink-300 rounded-full transition-all duration-500"></span>
                                )}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="w-full px-2 mt-4 space-y-6">
                {[1, 2, 3].map((_, i) => (
                    <div key={i} className="space-y-2">
                        <div className="flex items-center space-x-2">
                            <div className="flex-shrink-0">
                            
                                                            <div className="avatar w-full h-full sm:w-10 sm:h-10 rounded-full overflow-hidden">
                                                                <Image
                                                                    src={`/images/user-avatar.jpg`}
                                                                    alt="Author avatar"
                                                                    width={40}
                                                                    height={40}
                                                                    className="w-[40px] h-[40px] object-cover"
                                                                />
                                                            </div>
                                                        </div>
                            <div className="flex justify-between w-full">
                                <h3 className="text-sm font-bold font-poppins">Ana Belly</h3>
                                <h3 className="text-sm font-poppins">2d ago</h3>
                            </div>
                        </div>
                        <h2 className="text-sm font-bold font-inter text-gray-600 dark:text-gray-400 line-clamp-2">
                            2050’s Ultimate Speed Machines: The Sports Cars of Tomorrow...
                        </h2>
                        <hr className="border-gray-300" />
                    </div>
                ))}
            </div>
        </div>
    )
}
