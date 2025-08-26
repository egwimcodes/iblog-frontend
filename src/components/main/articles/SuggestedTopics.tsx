import OutlineBtn from "@/components/global/OutlineBtn";
import TextBtn from "@/components/global/TextBtn";

export default function SuggestedTopics() {
    const topics = ["Tech", "AI", "Design", "Startups", "Productivity", "Self Growth", "Web3", "Money", "Success", "Writing"];

    return (
        <div className="w-full flex flex-col">
            {/* Header */}
            <h1 className="text-lg md:text-lg font-bold">
                <span className="relative inline-block">
                    <span className="relative z-10">Suggested Topics✨</span>
                    <span className="block absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 rounded-full"></span>
                </span>
            </h1>

            {/* Flex Row of Buttons */}
            <div className="topics-list mt-6 w-full flex flex-row flex-wrap gap-3">
                {topics.map((topic, index) => (
                    <div className="text-sm" key={index}>
                        <OutlineBtn key={index} label={topic} />
                    </div>
                ))}
            </div>
            <div className="more-btn flex flex-row items-center justify-end my-2">

                <TextBtn label='See More ' />
            </div>
        </div>
    );
}
