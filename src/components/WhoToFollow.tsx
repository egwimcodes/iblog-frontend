import Image from "next/image";
import TextBtn from "./TextBtn";
import OutlineBtn from "./OutlineBtn";

export default function WhoToFollow() {
    return (
        <div className="w-full flex flex-col">
            {/* Header */}
            <h1 className="iblog-picks relative inline-block text-lg md:text-xl lg:text-2xl font-bold">
                <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 h-1 absolute left-0 bottom-0 w-[70%] rounded-full"></span>
                <span className="relative z-10">Who To Follow 🚶‍♂️‍➡️</span>
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

                                    <div className="avatar w-full h-full sm:w-10 sm:h-10 rounded-full overflow-hidden">
                                        <Image
                                            src="/images/avatar1.jpg"
                                            alt="Author avatar"
                                            width={40}
                                            height={40}
                                            className="w-[40px] h-[40px] object-cover"
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
