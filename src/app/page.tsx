import ArticleCard from '@/components/ArticleCard'
import NavBar from '@/components/NavBar'
import SearchBar from '@/components/SearchBar'
import ThemeToggleButton from '@/components/ThemeToggle'
import TopicsHeading from '@/components/TopicsHeading'

export default function Home() {
  return (
    <div className=''>
      <ThemeToggleButton />
      <NavBar />
      <main className="main flex flex-row ">
        <div className="left-sidebar flex-1"></div>
        <div className="container flex flex-col items-center">
          <div className="nav-search md:hidden flex flex-row justify-center my-1 space-y-3">
            <SearchBar />
          </div>
          <div className="topics flex flex-row justify-center my-1 space-y-3">
            <TopicsHeading />
          </div>
          <div className="article-card flex flex-col">
            <ArticleCard />
            
          </div>
        </div>
        <div className="right-sidebar flex-1"></div>
      </main>


    </div>
  )
}