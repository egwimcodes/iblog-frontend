import { articles } from "@/lib/data/articles";
import { Button } from "../global/Button";
import Image from "next/image";


export default function BlogsScetion() {
    return (
        <>
            <h2 className="text-3xl font-bold mb-2 dark:text-white">
                <span className="relative inline-block">
                    <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-amber-500 text-transparent bg-clip-text bg-300% animate-gradient">
                        About
                    </span>
                    <span className="absolute -bottom-2 left-0 h-1 w-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                </span>
            </h2>
            <h2 className="text-3xl font-bold mb-4 dark:text-white">Latest <span className="text-purple-500">Blog</span></h2>
            <p className="text-zinc-400 dark:text-zinc-300 mb-6">Check out trending posts from our vibrant community</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                {articles.map((article) => (
                    <article
                        key={article.id}
                        className="group relative flex flex-col rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-transparent border border-gray-200 dark:border-gray-700 hover:-translate-y-1"
                    >
                        <div className="relative h-48 w-full overflow-hidden">
                            <Image
                                src={article.image}
                                alt={article.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                loading="lazy"
                                width={24}
                                height={24}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                            <div className="absolute top-4 right-4 flex gap-2">
                                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/90 text-white backdrop-blur-sm">
                                    {article.timeAgo}
                                </span>
                                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-secondary/90 text-white backdrop-blur-sm">
                                    {article.likes} ♥
                                </span>
                            </div>
                        </div>

                        <div className="p-5 flex-1 flex flex-col">
                            <div className="flex items-center gap-3 mb-3">
                                <Image
                                    src={article.author.avatar}
                                    alt={article.author.name}
                                    className="w-8 h-8 rounded-full object-cover"
                                    width={24}
                                    height={24}
                                />
                                <div>
                                    <p className="text-sm font-medium text-gray-900 dark:text-white">{article.author.name}</p>
                                    <p className="text-xs text-gray-500 dark:text-gray-400">{article.date}</p>
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                                <a href={`/blog/${article.slug}`} className="hover:text-primary transition-colors">
                                    {article.title}
                                </a>
                            </h3>

                            <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                                {article.excerpt}
                            </p>

                            <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700 flex justify-between items-center">
                                <div className="flex gap-1">
                                    <span className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 flex items-center gap-1">
                                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                        </svg>
                                        {article.comments}
                                    </span>
                                </div>
                                <a
                                    href={`/blog/${article.slug}`}
                                    className="text-sm dark:text-white font-medium text-primary hover:text-primary/80 flex items-center gap-1 transition-colors"
                                >
                                    Read article
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </article>
                ))}
            </div>

            <div className="mt-8">
                <Button>See All Blogs</Button>
            </div></>
    );
}