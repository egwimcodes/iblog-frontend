'use client'
import Image from "next/image";
import SearchBar from "./SearchBar";
import OutlineBtn from "./OutlineBtn";
import TextBtn from "./TextBtn";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FiEdit, FiUser, FiSettings, FiLogOut } from "react-icons/fi";
import { GoBell } from "react-icons/go";
import { useState, useRef } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/redux/redux-hooks";
import { clearUser } from "@/lib/redux/slices/accountSlice";

// function useOutsideClick(ref: RefObject<HTMLElement>, callback: () => void) {
//     useEffect(() => {
//         function handleClickOutside(event: MouseEvent) {
//             if (ref.current && !ref.current.contains(event.target as Node)) {
//                 callback();
//             }
//         }
//         document.addEventListener("mousedown", handleClickOutside);
//         return () => document.removeEventListener("mousedown", handleClickOutside);
//     }, [ref, callback]);
// }

export default function NavBar() {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const [showLogoutModal, setShowLogoutModal] = useState<boolean>(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const modalRef = useRef<HTMLDivElement>(null);
    const router = useRouter();
    const dispatch = useAppDispatch()
    const {isAuthenticated }= useAppSelector((state) => state.user);


    const handleLogout = () => {
        // Show confirmation modal instead of immediate logout
        setShowLogoutModal(true);
        setMenuOpen(false);
        dispatch(clearUser());

    };

    const confirmLogout = () => {
        setIsLoading(true);
        // Add actual logout logic here (clear tokens, etc.)
        setTimeout(() => {
            setIsLoading(false);
            setShowLogoutModal(false);
            router.push("/");
        }, 1000);
    };

    function handleLogin(): void {
        throw new Error("Function not implemented.");
    }

    return (
        <nav className="sticky top-0 z-50 bg-transparent shadow-sm">
            <div className="min-w-dvw min-h-20 flex justify-center items-center mt-4">
                <div className="w-[95%] h-16 rounded-lg flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/">
                        {/* <Image
                            src="/images/IBlog.png"
                            alt="Company Logo"
                            width={80}
                            height={20}
                            priority
                            className="hover:opacity-80 transition-opacity"
                        /> */}
                        <h1 className="ml-4 md:ml-0 text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                            IBLOG
                        </h1>
                    </Link>

                    {/* Search */}
                    <div className="nav-search hidden md:block">
                        <SearchBar />
                    </div>

                    {/* Right Side Buttons */}
                    {isAuthenticated ? (
                        <div className="flex items-center space-x-4">
                            <button className="flex items-center" aria-label="Create post" onClick={() => router.push("/editor")}>
                                <FiEdit className="mx-2 w-5 h-5 text-brand" />
                                <span className="text-base text-brand font-medium">Write</span>
                            </button>

                            <button className="p-2" aria-label="Notifications" onClick={() => router.push("/notifications")}>
                                <GoBell className="mx-4 w-5 h-5 text-brand" />
                            </button>

                            {/* Avatar & Dropdown */}
                            <div className="relative" ref={menuRef}>
                                <button
                                    className="w-10 h-10 rounded-full overflow-hidden"
                                    onClick={() => setMenuOpen(!menuOpen)}
                                    aria-label="User menu"
                                >
                                    <Image
                                        src="/images/user-avatar.jpg"
                                        alt="User avatar"
                                        width={40}
                                        height={40}
                                        className="w-full h-full object-cover pointer-events-none"
                                        draggable={false}
                                    />
                                </button>

                                {menuOpen && (
                                    <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-neutral-800 ring-1 ring-black ring-opacity-5 z-50">
                                        <ul className="py-1 text-sm text-gray-700 dark:text-gray-200 select-none">
                                            <li>
                                                <button
                                                    onClick={() => router.push("/profile")}
                                                    className="flex items-center w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-neutral-700"
                                                >
                                                    <FiUser className="mr-2" /> Profile
                                                </button>
                                            </li>
                                            <li>
                                                <button
                                                    onClick={() => router.push("/settings")}
                                                    className="flex items-center w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-neutral-700"
                                                >
                                                    <FiSettings className="mr-2" /> Settings
                                                </button>
                                            </li>
                                            <li>
                                                <button
                                                    onClick={handleLogout}
                                                    className="flex items-center w-full px-4 py-2 text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-neutral-700"
                                                >
                                                    <FiLogOut className="mr-2" /> Sign out
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    ) : (
                        <div className="flex items-center space-x-2">
                            <TextBtn
                                label={isLoading ? "Logging in..." : "Login"}
                                onClick={handleLogin}
                                disabled={isLoading}
                            />
                            <div className="register-btn h-10">
                                <OutlineBtn
                                    label="Register"
                                    onClick={() => router.push("/register")}
                                />
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Logout Confirmation Modal */}
            {showLogoutModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div
                        ref={modalRef}
                        className="bg-white dark:bg-neutral-800 rounded-lg shadow-xl p-6 w-full max-w-sm"
                    >
                        <div className="text-center">
                            <FiLogOut className="mx-auto h-12 w-12 text-red-500 dark:text-red-400" />
                            <h3 className="mt-2 text-lg font-medium text-gray-900 dark:text-white">
                                Sign Out
                            </h3>
                            <div className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                                Are you sure you want to sign out?
                            </div>
                        </div>
                        <div className="mt-5 flex justify-center space-x-4">
                            <button
                                type="button"
                                onClick={() => setShowLogoutModal(false)}
                                className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-700 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                                disabled={isLoading}
                            >
                                Cancel
                            </button>
                            <button
                                type="button"
                                onClick={confirmLogout}
                                className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors"
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    <span className="flex items-center">
                                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Signing out...
                                    </span>
                                ) : (
                                    "Sign out"
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}