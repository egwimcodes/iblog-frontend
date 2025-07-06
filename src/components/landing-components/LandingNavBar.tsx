'use client';

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import ThemeToggleButton from "@/components/ThemeToggle";
import { AuthModal } from "@/components/AuthModal";
import { ResetPasswordModal } from "@/components/PasswordReset";

export function Navbar({ activePage = 'home' }: { activePage?: 'home' | 'features' | 'blogs' | 'about' }) {
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
    const [authModalView, setAuthModalView] = useState<'login' | 'register' | 'reset'>('login');

    return (
        <>
            <nav className="w-full z-20 fixed top-0 left-0 backdrop-blur-md border-b border-border py-4 px-8 flex justify-between items-center">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                    IBLOG
                </h1>
                <div className="space-x-4 hidden md:flex text-zinc-400 dark:text-zinc-300">
                    <Link href="/">
                        <span className={`hover:underline ${activePage === 'home' ? 'text-purple-500' : ''}`}>Home</span>
                    </Link>
                    <Link href="/#features">
                        <span className={`hover:underline ${activePage === 'features' ? 'text-purple-500' : ''}`}>Features</span>
                    </Link>
                    <Link href="/#blogs">
                        <span className={`hover:underline ${activePage === 'blogs' ? 'text-purple-500' : ''}`}>Blogs</span>
                    </Link>
                    <Link href="/about">
                        <span className={`hover:underline ${activePage === 'about' ? 'text-purple-500' : ''}`}>About</span>
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