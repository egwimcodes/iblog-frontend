"use client"
import Link from 'next/link'
import React, { useState, useEffect } from 'react';
import { HiMenuAlt3 } from "react-icons/hi";
import { MdDarkMode, MdLightMode } from "react-icons/md";

type HeaderProps = {
    currentPage: (page: string) => void;
}

function Header({ currentPage }: HeaderProps) {
    const [IsToggled, setIsToggled] = useState(false);
    const [CurrentPage, setCurrentPage] = useState("Home");
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        currentPage(CurrentPage);
    }, [CurrentPage]);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "light";
        setTheme(savedTheme);
        document.documentElement.classList.toggle("dark", savedTheme === "dark");
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        document.documentElement.classList.toggle("dark", newTheme === "dark");
    };

    return (
        <>
            <header className="fixed w-full shadow-md z-50 bg-white dark:bg-gray-900">
                <nav className="py-2.5">
                    <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
                        {/* Logo */}
                        <Link href="/" className="flex items-center">
                            <span className="font-poltawskiNowy text-xl font-bold whitespace-nowrap dark:text-white">
                                iBlog
                            </span>
                        </Link>

                        {/* Action buttons (Log in & Sign Up) */} 
                        
                        
                        <div className="flex items-center md:order-2">
                            <button onClick={toggleTheme} className="mr-4 p-2 rounded-full text-gray-800 dark:text-white bg-gray-200 dark:bg-gray-700">
                                {theme === "light" ? <MdDarkMode size={24} /> : <MdLightMode size={24} />}
                            </button>
                            <Link
                                href="/login"
                                className="text-white bg-primarycol font-medium rounded-3xl text-sm px-4 py-2.5 sm:mr-2 lg:mr-2 dark:hover:bg-primary60 focus:outline-none hidden md:block"
                            >
                                Log in
                            </Link>
                            <Link
                                href="/signup"
                                className="text-white bg-primarycol font-medium rounded-3xl text-sm px-4 py-2.5 sm:mr-2 lg:mr-0 dark:bg-primary50 dark:hover:bg-primary60 focus:outline-none hidden md:block"
                            >
                                Sign Up
                            </Link>
                            {/* Mobile Menu Button */}
                            <HiMenuAlt3 className='flex md:hidden text-2xl dark:text-white' onClick={() => { setIsToggled(!IsToggled) }} />
                        </div>

                        {/* Desktop Navigation Links */}
                        <div className={`${IsToggled ? "flex" : "hidden"} flex-col items-center justify-center w-full md:flex md:w-auto md:order-1`} id="mobile-menu-2">
                            <ul className="flex flex-col text-center mt-4 font-medium md:flex-row md:space-x-4 md:mt-0">
                                <li>
                                    <Link
                                        href="/"
                                        className={`${CurrentPage === "Home" ? "border-b-2" : ""} block py-2 text-gray-800 rounded md:bg-transparent md:p-0 dark:text-white`}
                                        aria-current="page"
                                        onClick={() => { setCurrentPage("Home") }}
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href=""
                                        className={`${CurrentPage === "Portfolio" ? "border-b-2" : ""} block py-2 pl-3 pr-4 text-gray-800 rounded lg:bg-transparent md:p-0 dark:text-white`}
                                        onClick={() => { setCurrentPage("Portfolio") }}
                                    >
                                        Portfolio
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href=""
                                        className={`${CurrentPage === "ContactUs" ? "border-b-2" : ""} block py-2 pl-3 pr-4 text-gray-800 rounded lg:bg-transparent md:p-0 dark:text-white`}
                                        onClick={() => { setCurrentPage("ContactUs") }}
                                    >
                                        Contact Us
                                    </Link>
                                </li>
                            </ul>
                            {/* Mobile Action buttons */}
                            <div className="flex items-center md:hidden my-2">
                                <Link
                                    href="/login"
                                    className="text-gray-800 bg-primarycol font-medium rounded-3xl text-sm px-4 py-2.5 sm:mr-2 lg:mr-2 dark:hover:bg-primary60 focus:outline-none"
                                >
                                    Log in
                                </Link>
                                <Link
                                    href="/signup"
                                    className="bg-primary col font-medium rounded-3xl text-sm px-4 py-2.5 sm:mr-2 lg:mr-0 text-gray-800 dark:hover:bg-primary60 focus:outline-none"
                                >
                                    Sign Up
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header;
