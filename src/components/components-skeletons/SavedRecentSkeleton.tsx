'use client'

export default function SavedRecentSkeleton() {
    return (
        <div className="flex flex-col w-full items-center animate-pulse">

            {/* List Skeleton */}
            <div className="w-full px-2 mt-4 space-y-6">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="space-y-2">
                        <div className="flex items-center space-x-2">
                            <div className="flex-shrink-0">
                                <span className="avatar w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-700 block" />
                            </div>
                            <div className="flex justify-between w-full">
                                <span className="w-20 h-4 rounded bg-gray-200 dark:bg-gray-700" />
                                <span className="w-10 h-3 rounded bg-gray-200 dark:bg-gray-700" />
                            </div>
                        </div>
                        <span className="block w-3/4 h-4 rounded bg-gray-200 dark:bg-gray-700" />
                        <hr className="border-gray-300 dark:border-gray-700" />
                    </div>
                ))}
            </div>
        </div>
    )
}