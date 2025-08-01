// app/not-found.tsx
import Link from 'next/link';
import { PiWarningCircleLight } from 'react-icons/pi';

export default function NotFound() {
    return (
        <div
            className="min-h-screen flex flex-col items-center justify-center bg-background-light dark:bg-background-dark px-4 text-center"
        >
            <PiWarningCircleLight className="text-brand dark:text-brand text-7xl mb-4" />

            <h1 className="text-4xl font-bold text-gray-800 dark:text-white font-inter mb-2">
                404 - Page Not Found
            </h1>

            <p className="text-gray-600 dark:text-gray-400 font-poppins mb-6 max-w-md">
                Sorry, we couldn&apos;t find the page you were looking for. It might have been removed, renamed, or didn’t exist.
            </p>

            <Link href="/" className="bg-brand text-white dark:text-black px-6 py-3 rounded-full font-medium hover:opacity-90 transition">
                 {'<< Go back to Homepage'}
            </Link>
        </div>
    );
}
