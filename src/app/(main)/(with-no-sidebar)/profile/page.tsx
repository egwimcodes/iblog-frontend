import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { FiEdit, FiInstagram } from "react-icons/fi";
import { SlSocialFacebook } from "react-icons/sl";
import { TbPoint } from "react-icons/tb";
import Image from "next/image";
import SavedRecent from "@/components/SavedRecent";
import SavedDraftMyArticles from "@/components/SavedDraftMyArticles";

export default function ProfilePage() {
    return (
        <>
            <div className="search-topics w-[90dvw] md:w-[50dvw] flex flex-col space-y-2 mx-auto">
                {/* Cover Section */}
                <div className="relative flex flex-col h-[150px] md:h-[230px] w-full">
                    <div className="w-full max-h-[170px] overflow-hidden rounded-t-2xl">
                        <Image
                            src="/images/cover-bg.jpg"
                            alt="Cover"
                            width={400}
                            height={300}
                            priority
                            className="w-full h-auto object-cover"
                        />
                    </div>

                    <div className="w-full h-full flex items-center justify-end">
                        <FiEdit className="mx-4 w-5 h-5 text-pink-500" />
                    </div>

                    {/* Centered Avatar */}
                    <div className="absolute top-[60px] md:top-[130px]  left-1/2 transform -translate-x-1/2">
                        <div className="w-[80px] h-[80px] rounded-full overflow-hidden border-2 border-white dark:border-black">
                            <Image
                                src="/images/user-avatar.jpg"
                                alt="Avatar"
                                width={160}
                                height={160}
                                priority
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* User Info */}
                <div className="w-full flex flex-col items-center  space-y-2 text-center">
                    <h2 className="text-base font-semibold font-poppins">Ana Belly</h2>
                    <h3 className="text-sm text-gray-500 dark:text-gray-400 font-poppins truncate">
                        Financial business expert
                    </h3>

                    <div className="flex flex-row items-center space-x-2">
                        <h3 className="text-sm text-gray-500 dark:text-gray-400 font-poppins">2.1k followers</h3>
                        <TbPoint className="text-pink-500" />
                        <h3 className="text-sm text-gray-500 dark:text-gray-400 font-poppins">0 following</h3>
                    </div>

                    {/* Socials */}
                    <div className="w-full mt-4 space-y-3">
                        {[
                            { icon: <SlSocialFacebook />, handle: "@anabelly" },
                            { icon: <FiInstagram />, handle: "@anabelly" },
                            { icon: <FaXTwitter />, handle: "@anabelly" },
                            { icon: <FaLinkedinIn />, handle: "@anabelly" },
                        ].map((social, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                                <span className="text-pink-500 w-5 h-5">{social.icon}</span>
                                <h3 className="text-pink-500 text-sm font-poppins">{social.handle}</h3>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Saved Section */}
                <div className="w-full mt-4">
                    <SavedDraftMyArticles />
                </div>
            </div>
        </>
    );
}