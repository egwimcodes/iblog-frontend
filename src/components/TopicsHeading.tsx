'use client'
import { useState } from 'react'
import { IoMdAdd } from 'react-icons/io'

export default function TopicsHeading() {
    const [selected, setSelected] = useState('For you')
    const topics = [
        'For you',
        'Following',
        'Featured',
        'Trending',
        'Latest',
        'Popular',
        'Tech',
        'Health',
        'Finance',
        'Education',
        'Entertainment',
        'Lifestyle'
    ];


    return (
        <div className="w-[95dvw] lg:w-[45dvw] max-w-[700px]  h-14 flex flex-row items-center space-x-2">
            <IoMdAdd className="w-8 h-8 text-gray-500 dark:text-gray-400" />
            <ul className="flex space-x-4 overflow-x-auto whitespace-nowrap w-full no-scrollbar px-2 scroll-smooth">
                {topics.map((topic) => (
                    <li
                        key={topic}
                        onClick={() => setSelected(topic)}
                        className={`relative cursor-pointer font-medium pb-1
              ${selected === topic ? 'text-black dark:text-white' : 'text-gray-500 dark:text-gray-400'}
            `}
                    >
                        <span className="inline-block relative">
                            {topic}
                            {selected === topic && (
                                <span className="absolute left-0 -bottom-1 h-[3px] w-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-500"></span>
                            )}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    )
}
