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
        <div className="w-full h-full rounded-md bg-gradient-to-t from-purple-600 via-pink-500 to-purple-600 p-[2px]">
            <div className="relative w-full h-full bg-white dark:bg-black rounded-md overflow-hidden">
                <Image
                    src={backgroundImage ?? '/images/3d-car.jpg'}
                    alt="Background"
                    fill
                    className="object-cover"
                />
            </div>
        </div>


    );
}
