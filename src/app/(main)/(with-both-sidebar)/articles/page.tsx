"use client";
import ArticleCard from '@/components/ui/ArticleCard'
import SkeletonCard from '@/components/skeletons/SkeletonCard'
import { articles } from '@/lib/data/articles';
import { useState, useEffect } from "react";
import TopicsHeading from '@/components/ui/TopicsHeading';
export default function Home() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // simulate loading time

    return () => clearTimeout(timer);
  }, []);
  return (

    <>
      {/* Topics Heading */}
      <div className="w-full mb-4">
        <TopicsHeading />
      </div>
      <div className="w-full space-y-6">
        {loading
          ? Array.from({ length: 5 }).map((_, index) => <SkeletonCard key={index} />)
          : articles.map((article) => (
            <ArticleCard key={article.id} data={article} />
          ))}
      </div>
    </>
    // <div className="min-h-screen text-gray-800 dark:text-white">
    //   <ThemeToggleButton />
    //   <NavBar />

    //   <main className="flex flex-col md:flex-row max-w-screen-xl mx-auto px-4 md:px-6 lg:px-12">
    //     {/* Left Sidebar */}
    //     <aside className="hidden md:block w-[18vw] lg:w-[16vw] xl:w-[14vw]">
    //       <LeftSideBar />
    //     </aside>

    //     {/* Main Content */}
    //     <section className="flex-1 flex flex-col items-center md:px-6 mt-4 md:mx-[1dvw]">
    //       {/* Mobile Search */}
    //       <div className="md:hidden w-full mb-4">
    //         <SearchBar />
    //       </div>

    //       {/* Topics Heading */}
    //       <div className="w-full mb-4">
    //         <TopicsHeading />
    //       </div>

    //       {/* Articles */}
    //       <div className="w-full space-y-6">
    //         {loading
    //           ? Array.from({ length: 5 }).map((_, index) => <SkeletonCard key={index} />)
    //           : articles.map((article) => (
    //             <ArticleCard key={article.id} data={article} />
    //           ))}
    //       </div>
    //     </section>

    //     {/* Right Sidebar */}
    //     <aside className="hidden md:block w-[18vw] lg:w-[16vw] xl:w-[14vw]">
    //       <RightSideBar />
    //     </aside>
    //   </main>
    //   <Footer />  
    // </div>
  )
}
