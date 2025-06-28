import Image from "next/image";
import { FiEdit } from "react-icons/fi";
import { TbPoint } from "react-icons/tb";
import { SlSocialFacebook } from "react-icons/sl";
import { FiInstagram } from "react-icons/fi";
import { FaXTwitter, FaLinkedinIn } from "react-icons/fa6";
import SavedRecent from "./SavedRecent";

export default function LeftSideBar() {
    return (
        <aside className="hidden md:flex flex-col w-[18vw] lg:w-[16vw] xl:w-[14vw] max-w-[240px] px-4 md:px-2 mt-16">
           

            {/* Saved Section */}
            <div className="w-full mt-4">
                <SavedRecent />
            </div>
        </aside>
    );
}
