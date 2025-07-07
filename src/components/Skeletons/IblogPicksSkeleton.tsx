'use client'

export default function IblogPicksSkeleton() {
    return (
        <div className="w-full flex flex-col animate-pulse">
            
            {/* Picks List Skeleton */}
            <div className="items w-full space-y-6 mt-6">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="space-y-2">
                        {/* Author Info Skeleton */}
                        <div className="flex items-center gap-3">
                            <div className="flex-shrink-0">
                                <span className="avatar w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-700 block" />
                            </div>
                            <div className="flex justify-between w-full text-sm">
                                <span className="w-20 h-4 rounded bg-gray-200 dark:bg-gray-700" />
                                <span className="w-10 h-3 rounded bg-gray-200 dark:bg-gray-700" />
                            </div>
                        </div>
                        {/* Post Title Skeleton */}
                        <span className="block w-3/4 h-4 rounded bg-gray-200 dark:bg-gray-700" />
                        {/* Divider */}
                        <hr className="border-t border-gray-300 dark:border-gray-700" />
                        {/* Content Snippet Skeleton */}
                        <span className="block w-full h-3 rounded bg-gray-200 dark:bg-gray-700" />
                        <span className="block w-5/6 h-3 rounded bg-gray-200 dark:bg-gray-700" />
                        {/* Read More Button Skeleton */}
                        <div className="flex justify-end text-sm">
                            <span className="w-24 h-4 rounded bg-gray-200 dark:bg-gray-700" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}