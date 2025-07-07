import Image from "next/image";
import IBlogPicks from "./IblogPicks";
import SuggestedTopics from "./SuggestedTopics";
import WhoToFollow from "./WhoToFollow";

export default function RightSideBar() {
    return (
        <aside className="hidden md:flex flex-col w-[18vw] lg:w-[16vw] xl:w-[14vw] max-w-[260px]  px-4 md:px-2 space-y-2">
            <IBlogPicks />
            <SuggestedTopics />
            <WhoToFollow />
        </aside>
    );
}
