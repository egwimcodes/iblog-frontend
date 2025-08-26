import Image from "next/image";
import TextBtn from "../../global/TextBtn";
import OutlineBtn from "../../global/OutlineBtn";

export default function WhoToFollow() {
    return (
        <div className="w-full flex flex-col">
            {/* Header */}
            <h1 className="text-lg md:text-lg font-bold">
                <span className="relative inline-block">
                    <span className="relative z-10">Who to follow</span>
                    <span className="block absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 rounded-full"></span>
                </span>
            </h1>
            {/* Picks List */}
            <div className="items w-full space-y-6 mt-6">
                {[1, 2, 3, 4, 5].map((_, index) => (
                    <div key={index} className="space-y-2">
                        {/* Author Info */}
                        <div className="p-[1px] w-full rounded-xl bg-gradient-to-t from-purple-600 via-pink-500 to-purple-600 overflow-hidden" key={index}>
                            <div className="bg-background-light dark:bg-background-dark transition-colors duration-500 p-2 rounded-[calc(0.75rem-1px)]">
                                <div className="flex items-center justify-between ">
                                    <div className="flex-shrink-0 mr-1">

                                        <div className="avatar w-8 h-8 rounded-full overflow-hidden">
                                            <Image
                                                src="/images/avatar1.jpg"
                                                alt="Author avatar"
                                                width={24}
                                                height={24}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>
                                    <div className="h-10 w-[78%] flex flex-col items-start justify-between">
                                        <div className="flex items-center justify-between w-full">
                                            <h3 className="ps-2 md:ps-0 text-sm text-black dark:text-white font-poppins font-semibold truncate">
                                                Ana Belly
                                            </h3>
                                            <div className="h-6">
                                                <OutlineBtn label="follow" />
                                            </div>
                                        </div>
                                        <h3 className="ps-2 w-[95%] md:ps-0 text-sm text-gray-500 dark:text-gray-400 font-poppins truncate">
                                            Financial business expert
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className="border-t border-gray-300" />
                    </div>
                ))}
            </div>
            <div className="more-btn flex flex-row items-center justify-end my-2">

                <TextBtn label='See More Writers >>' />
            </div>
        </div>
    );
}
