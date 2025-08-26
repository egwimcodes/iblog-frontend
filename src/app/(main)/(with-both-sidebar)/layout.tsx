import SearchBar from '@/components/main/articles/SearchBar';

import NavBar from '@/components/global/NavBar';
import RightSideBar from '@/components/main/RightSideBar';
import LeftSideBar from '@/components/main/LeftSideBar';

type LayoutProps = {

  children: React.ReactNode;
}
export default function ArticleLayout({
  children,
}: LayoutProps) {

  return (<>
    <div className="min-h-screen text-gray-800 dark:text-white ">

      <NavBar />

      <main className="flex flex-col md:flex-row max-w-screen-xl mx-auto px-4 md:px-6 lg:px-12 space-y-4">
        {/* Left Sidebar  */}
        <aside className="hidden md:block w-[18vw] lg:w-[16vw] xl:w-[14vw]">
          {/* <LeftSideBar /> */}
          <LeftSideBar />
        </aside>

        {/* Main Content */}
        <section className="flex-1 flex flex-col items-center md:px-6 mt-4 md:mx-[1dvw]">
          {/* Mobile Search */}
          <div className="md:hidden w-full mb-4">
            <SearchBar />
          </div>



          {/* Articles */}

          <div className="w-full  mb-20 ">
            {children}
          </div>
        </section>

        {/* Right Sidebar */}
        <aside className="hidden md:block w-[18vw] lg:w-[16vw] xl:w-[14vw]">
          <RightSideBar />
        </aside>
      </main>
    </div>

  </>

  );
}