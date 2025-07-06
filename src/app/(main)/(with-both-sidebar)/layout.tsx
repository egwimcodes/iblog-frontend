import SearchBar from '@/components/SearchBar';
import ThemeToggleButton from '@/components/ThemeToggle';
import Footer from '@/components/Footer';

import NavBar from '@/components/NavBar';
import RightSideBar from '@/components/RightSideBar';
import LeftSideBar from '@/components/LeftSideBar';

type LayoutProps = {

  children: React.ReactNode;
  leftSideBar?: boolean;
  rightSideBar?: boolean;
}
export default function ArticleLayout({
  children,
  leftSideBar = true,
  rightSideBar = true,

}: LayoutProps) {

  return (<>
    <div className="min-h-screen text-gray-800 dark:text-white">
      
      <NavBar />

      <main className="flex flex-col md:flex-row max-w-screen-xl mx-auto px-4 md:px-6 lg:px-12">
        {/* Left Sidebar  */}
        <aside className="hidden md:block w-[18vw] lg:w-[16vw] xl:w-[14vw]">
          {/* <LeftSideBar /> */}
          {leftSideBar && <LeftSideBar />}
        </aside>

        {/* Main Content */}
        <section className="flex-1 flex flex-col items-center md:px-6 mt-4 md:mx-[1dvw]">
          {/* Mobile Search */}
          <div className="md:hidden w-full mb-4">
            <SearchBar />
          </div>



          {/* Articles */}

          <div className="w-full space-y-4 mb-20">
            {children}
          </div>
        </section>

        {/* Right Sidebar */}
        <aside className="hidden md:block w-[18vw] lg:w-[16vw] xl:w-[14vw]">
          {rightSideBar && <RightSideBar />}
        </aside>
      </main>
    </div>

  </>

  );
}