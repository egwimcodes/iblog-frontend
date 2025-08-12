'use client';

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { AuthModal } from "@/components/auth/AuthModal";
import { ResetPasswordModal } from "../ui/PasswordReset";

export function LandingNavbar() {
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
    const [authModalView, setAuthModalView] = useState<'login' | 'register' | 'reset'>('login');
    const pathname = usePathname();

    // Determine active page based on current route
    const getActivePage = () => {
        if (pathname === '/') return 'home';
        if (pathname === '/about') return 'about';
        if (pathname.startsWith('/blog')) return 'blogs';
        if (pathname === '/features') return 'features';
        return 'home';
    };

    const activePage = getActivePage();

    return (
        <>
            <nav className="w-full z-20 fixed top-0 left-0 backdrop-blur-md border-b dark:border-gray-400 border-border py-5 px-8 flex justify-between items-center">
                <Link
                    href="/"
                    className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-clip-text text-transparent"
                >
                    IBLOG
                </Link>

                <div className="space-x-4 hidden md:flex text-zinc-400 dark:text-zinc-300">
                    <Link href="/">
                        <span className={`hover:underline transition-colors ${activePage === 'home' ? 'text-purple-500 font-medium' : ''}`}>
                            Home
                        </span>
                    </Link>
                    <Link href="/#features">
                        <span className={`hover:underline transition-colors ${activePage === 'features' ? 'text-purple-500 font-medium' : ''}`}>
                            Features
                        </span>
                    </Link>
                    <Link href="/#blogs">
                        <span className={`hover:underline transition-colors ${activePage === 'blogs' ? 'text-purple-500 font-medium' : ''}`}>
                            Blogs
                        </span>
                    </Link>
                    <Link href="/about">
                        <span className={`hover:underline transition-colors ${activePage === 'about' ? 'text-purple-500 font-medium' : ''}`}>
                            About
                        </span>
                    </Link>
                </div>

                <div className="flex items-center gap-4">
                    <Button
                        variant="outline"
                        onClick={() => {
                            setAuthModalView('login');
                            setIsAuthModalOpen(true);
                        }}
                    >
                        Login
                    </Button>
                </div>
            </nav>

            {/* Auth Modals */}
            <AuthModal
                isOpen={isAuthModalOpen}
                onClose={() => setIsAuthModalOpen(false)}
                initialView={authModalView}
            />
            <ResetPasswordModal
                isOpen={authModalView === 'reset'}
                onClose={() => {
                    setIsAuthModalOpen(false);
                    setAuthModalView('login');
                }}
            />
        </>
    );
}