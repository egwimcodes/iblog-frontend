'use client';

import { Typewriter } from 'react-simple-typewriter';

export default function TypingHeroText() {
    return (
        <span className="relative inline-block group">
            <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-amber-500 text-transparent bg-clip-text bg-300% animate-gradient">
                <Typewriter
                    words={['Powerful features,', 'Built for creators,', 'Powered by AI']}
                    loop={false}
                    cursor
                    cursorStyle="|"
                    typeSpeed={80}
                    deleteSpeed={40}
                    delaySpeed={1000}
                />
            </span>
            <span className="absolute -bottom-2 left-0 h-1 w-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
        </span>
    );
}
