'use client'
import { CiSearch } from "react-icons/ci";
import Image from "next/image";

interface GradientImageBorderProps {
    placeholder?: string;
    backgroundImage?: string;
}

export default function GradientImageBorder({
    backgroundImage,
}: GradientImageBorderProps) {
    return (
        <div className="w-[100%] lg:w-[60%] h-[100%] p-[1px] rounded-md bg-gradient-to-t from-purple-600 via-pink-500 to-purple-600 overflow-hidden">
            <div className="relative h-full rounded-md flex items-center px-4 overflow-hidden">
                {/* Background Image */}
                <Image
                    src={backgroundImage ?? '/images/3d-car.jpg'}
                    alt="Background"
                    layout="fill"
                    objectFit="cover"
                    className="absolute inset-0 z-0"
                />
            </div>
        </div>
    );
}
