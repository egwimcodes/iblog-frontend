'use client'

import Image from "next/image";

interface GradientImageBorderProps {
    backgroundImage?: string;
}

export default function GradientImageBorder({ backgroundImage }: GradientImageBorderProps) {
    return (
        <div className="w-full h-full rounded-md bg-gradient-to-t from-purple-600 via-pink-500 to-purple-600 p-[2px]">
            <div className="relative w-full h-full bg-white dark:bg-black rounded-md overflow-hidden">
                <Image
                    src={backgroundImage ?? '/images/3d-car.jpg'}
                    alt="Background"
                    fill
                    className="object-cover"
                    sizes="100vw" // ✅ Optional: helps optimize loading
                    priority // ✅ Optional: if above the fold
                />
            </div>
        </div>
    );
}
