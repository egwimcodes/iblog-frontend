import IBlogPicks from "@/components/IblogPicks";
import SuggestedTopics from "@/components/SuggestedTopics";
import WhoToFollow from "@/components/WhoToFollow";
import Image from "next/image";

export default function RightSideBar() {
    return (
        <aside className="hidden md:flex flex-col w-[18vw] lg:w-[16vw] xl:w-[14vw] max-w-[260px] mt-14 px-4 md:px-2 space-y-2">
            <IBlogPicks />
            <SuggestedTopics />
            <WhoToFollow />
        </aside>
    );
}
