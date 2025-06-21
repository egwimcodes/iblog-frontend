// components/SkeletonCard.tsx
export default function SkeletonCard() {
    return (
        <div className="animate-pulse w-full">
            <div className="relative h-[260px] w-[95dvw] lg:w-[45dvw] max-w-[700px] flex flex-col justify-end">
                <div className="h-[80%] rounded-xl bg-gradient-to-t from-purple-600 via-pink-500 to-purple-600 overflow-hidden">
                    <div className="bg-white dark:bg-black px-6 py-4 rounded-[calc(0.75rem-1px)] h-full">
                        <div className="flex justify-end space-x-2 mb-4">
                            <div className="h-4 w-24 bg-gray-300 dark:bg-gray-700 rounded" />
                            <div className="h-4 w-4 bg-gray-300 dark:bg-gray-700 rounded-full" />
                        </div>
                        <div className="h-4 w-[70%] bg-gray-300 dark:bg-gray-700 rounded mb-3" />
                        <div className="space-y-2">
                            <div className="h-3 w-full bg-gray-300 dark:bg-gray-700 rounded" />
                            <div className="h-3 w-full bg-gray-300 dark:bg-gray-700 rounded" />
                            <div className="h-3 w-[90%] bg-gray-300 dark:bg-gray-700 rounded" />
                        </div>
                    </div>
                </div>
                {/* Author skeleton */}
                <div className="absolute top-2 left-5 p-[1px] w-[50dvw] md:w-[25dvw] lg:w-[16dvw] max-w-[300px] rounded-xl bg-gradient-to-t from-purple-600 via-pink-500 to-purple-600 overflow-hidden">
                    <div className="bg-white dark:bg-black p-2 rounded-[calc(0.75rem-1px)] flex items-center space-x-2">
                        <div className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-700" />
                        <div className="flex flex-col space-y-1 w-full">
                            <div className="h-3 w-[70%] bg-gray-300 dark:bg-gray-700 rounded" />
                            <div className="h-3 w-[60%] bg-gray-300 dark:bg-gray-700 rounded" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
