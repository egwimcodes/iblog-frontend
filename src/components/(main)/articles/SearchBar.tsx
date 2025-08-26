'use client'
import { CiSearch } from "react-icons/ci";

export default function SearchBar() {
    return (
        <div className="w-[95dvw] md:w-[50dvw] h-12 p-[1px] rounded-full bg-gradient-to-t from-purple-600 via-pink-500 to-purple-600 overflow-hidden">
            <div className="bg-white dark:bg-background-dark transition-colors duration-500 h-full rounded-[calc(3rem-20px)] flex items-center px-4">
                <input
                    type="text"
                    placeholder="Search..."
                    className="w-full bg-transparent outline-none text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                />
                <CiSearch className="w-10 h-10 text-gray-500 dark:text-gray-500" />
            </div>
        </div>
    )
}
