import IBlogPicks from "@/components/main/articles/IblogPicks";
import SuggestedTopics from "@/components/main/articles/SuggestedTopics";
import WhoToFollow from "@/components/main/articles/WhoToFollow";

export default function RightSideBar() {
    return (
        <aside className="hidden md:flex flex-col w-[18vw] lg:w-[16vw] xl:w-[14vw] max-w-[260px] mt-14 px-4 md:px-2 space-y-2">
            <IBlogPicks />
            <SuggestedTopics />
            <WhoToFollow />
        </aside>
    );
}
