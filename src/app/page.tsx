"use client"
import ArticleCard from '@/components/ArticleCard'
import LeftSideBar from '@/components/LeftSideBar'
import NavBar from '@/components/NavBar'
import RightSideBar from '@/components/RightSideBar'
import SearchBar from '@/components/SearchBar'
import SkeletonCard from '@/components/SkeletonCard'
import ThemeToggleButton from '@/components/ThemeToggle'
import TopicsHeading from '@/components/TopicsHeading'
import { useState, useEffect } from "react";
export default function Home() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // simulate loading time

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-800 dark:text-white">
      <ThemeToggleButton />
      <NavBar />

      <main className="flex flex-col md:flex-row max-w-screen-xl mx-auto px-4 md:px-6 lg:px-12">
        {/* Left Sidebar */}
        <aside className="hidden md:block w-[18vw] lg:w-[16vw] xl:w-[14vw]">
          <LeftSideBar />
        </aside>

        {/* Main Content */}
        <section className="flex-1 flex flex-col items-center md:px-6 mt-4">
          {/* Mobile Search */}
          <div className="md:hidden w-full mb-4">
            <SearchBar />
          </div>

          {/* Topics Heading */}
          <div className="w-full mb-4">
            <TopicsHeading />
          </div>

          {/* Articles */}
          <div className="w-full space-y-6">
            {loading ? (
              <SkeletonCard />
            ) : (
              <ArticleCard />
            )}
            {loading ? (
              <SkeletonCard />
            ) : (
              <ArticleCard />
            )}
            {loading ? (
              <SkeletonCard />
            ) : (
              <ArticleCard />
            )}
            {loading ? (
              <SkeletonCard />
            ) : (
              <ArticleCard />
            )}
            {loading ? (
              <SkeletonCard />
            ) : (
              <ArticleCard />
            )}
          </div>
        </section>

        {/* Right Sidebar */}
        <aside className="hidden md:block w-[18vw] lg:w-[16vw] xl:w-[14vw]">
          <RightSideBar />
        </aside>
      </main>
    </div>
  )
}
