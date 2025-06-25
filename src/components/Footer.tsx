import React from 'react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="w-full border-t border-gray-200  dark:border-gray-500 py-6 mt-10 bg-">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                    © {new Date().getFullYear()} IBLOG. All rights reserved.
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                    Built with ❤️ by{" "}
                    <Link
                        href="https://egwimcodes.dev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 dark:text-pink-400 hover:underline"
                    >
                        egwimcodes
                    </Link>
                </p>
            </div>
        </footer>
    );
}
