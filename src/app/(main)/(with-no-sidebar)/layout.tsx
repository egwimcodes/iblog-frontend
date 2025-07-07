import NavBar from '@/components/NavBar';

export default function ArticleLayout({
  children,
}: { children: React.ReactNode; }) {

  return (<>
    <div className="min-h-screen text-gray-800 dark:text-white">
    
      <NavBar />

      <main className="flex flex-col md:flex-row max-w-screen-xl mx-auto px-4 md:px-6 lg:px-12">

        {/* Main Content */}
        <section className="flex-1 flex flex-col items-center md:px-6 mt-4 md:mx-[1dvw]">
          {/* Mobile Search */}
          {/* <div className="md:hidden w-full mb-4">
            <SearchBar />
          </div> */}



          {/* Articles */}

          <div className="w-full space-y-4">
            {children}
          </div>
        </section>


      </main>
    </div>

  </>

  );
}