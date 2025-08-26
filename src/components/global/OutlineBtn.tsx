'use client'
import React from 'react'

interface OutlineBtnProps {
    label?: string;
    onClick?: () => void;
    className?: string;
    disabled?: boolean;
    children?: React.ReactNode;
}

export default function OutlineBtn({ label, onClick, className = '', disabled = false, children }: OutlineBtnProps) {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`w-full max-w-xs h-[100%] p-[1px] rounded-full bg-gradient-to-t from-purple-600 via-pink-500 to-purple-600 overflow-hidden ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
            <div className="bg-background-light dark:bg-background-dark transition-colors duration-500 h-full w-full rounded-full flex items-center justify-center px-4">
                {label ? <p className="text-brand font-inter font-medium text-sm">
                    {label}
                </p> : children}

            </div>
        </button>
    )
}