'use client'
import React from 'react'

interface OutlineBtnProps {
    label: string
    onClick?: () => void
    className?: string
}

export default function OutlineBtn({ label, onClick, className = '' }: OutlineBtnProps) {
    return (
        <button
            onClick={onClick}
            className={`w-full max-w-xs h-[100%] p-[1px] rounded-full bg-gradient-to-t from-purple-600 via-pink-500 to-purple-600 overflow-hidden ${className}`}
        >
            <div className="bg-white dark:bg-black transition-colors duration-300 h-full w-full rounded-full flex items-center justify-center px-4">
                <p className="text-brand font-inter font-medium text-sm">{label}</p>
            </div>
        </button>
    )
}
