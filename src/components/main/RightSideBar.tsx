import IBlogPicks from "./articles/IblogPicks";
import SuggestedTopics from "./articles/SuggestedTopics";
import WhoToFollow from "./articles/WhoToFollow";

export default function RightSideBar() {
    return (
        <aside className="hidden md:flex flex-col w-[18vw] lg:w-[16vw] xl:w-[14vw] max-w-[260px]  px-4 md:px-2 space-y-2">
            <IBlogPicks />
            <SuggestedTopics />
            <WhoToFollow />
        </aside>
    );
}
