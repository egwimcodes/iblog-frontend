
import SavedRecent from "./SavedRecent";

export default function LeftSideBar() {
    return (
        <aside className="hidden md:flex flex-col w-[18vw] lg:w-[16vw] xl:w-[14vw] max-w-[240px] px-4 md:px-2 mt-8">
           

            {/* Saved Section */}
            <div className="w-full">
                <SavedRecent />
            </div>
        </aside>
    );
}
