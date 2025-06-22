import Image from "next/image";
import TextBtn from "./TextBtn";

export default function IBlogPicks() {
    return (
        <div className="w-full flex flex-col">
            {/* Header */}
            <h1 className="iblog-picks relative inline-block text-lg md:text-xl lg:text-2xl font-bold">
                <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 h-1 absolute left-0 bottom-0 w-[45%] rounded-full"></span>
                <span className="relative z-10">IBlog Picks ✨</span>
            </h1>
            {/* Picks List */}
            <div className="items w-full space-y-6 mt-6">
                {[1, 2, 3].map((_, index) => (
                    <div key={index} className="space-y-2">
                        {/* Author Info */}
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-10 rounded-full overflow-hidden">
                                <Image
                                    src={`/images/${index === 2 ? "avatar1.jpg" : "user-avatar.jpg"}`}
                                    alt="Avatar"
                                    width={40}
                                    height={40}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="flex justify-between w-full text-sm">
                                <h3 className="font-poppins font-bold">Ana Belly</h3>
                                <p className="font-poppins text-gray-500">2d ago</p>
                            </div>
                        </div>

                        {/* Post Title */}
                        <h2 className="text-sm md:text-base font-inter font-semibold line-clamp-2 text-gray-500 dark:text-gray-400">
                            2050’s Ultimate Speed Machines: The Sports Cars of Tomorrow...
                        </h2>

                        {/* Divider */}
                        <hr className="border-t border-gray-300" />
                    </div>
                ))}
            </div>
            <div className="more-btn flex flex-row items-center justify-end">

                <TextBtn label='See More Picks >>' />
            </div>
        </div>
    );
}
