import { div } from "framer-motion/client";
import OutlineBtn from "./OutlineBtn";
import TextBtn from "./TextBtn";

export default function SuggestedTopics() {
    const topics = ["Tech", "AI", "Design", "Startups", "Productivity", "Self Growth", "Web3", "Money", "Success", "Writing"];

    return (
        <div className="w-full flex flex-col">
            {/* Header */}
            <h1 className="iblog-picks relative inline-block text-lg md:text-xl lg:text-2xl font-bold">
                <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 h-1 absolute left-0 bottom-0 w-[80%] rounded-full"></span>
                <span className="relative z-10">Suggested Topics 🚀</span>
            </h1>

            {/* Flex Row of Buttons */}
            <div className="topics-list mt-6 w-full flex flex-row flex-wrap gap-3">
                {topics.map((topic, index) => (
                    <div className="" key={index}>
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
