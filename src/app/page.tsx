import NavBar from '@/components/NavBar'
import SearchBar from '@/components/SearchBar'
import ThemeToggleButton from '@/components/ThemeToggle'
import TopicsHeading from '@/components/TopicsHeading'

export default function Home() {
  return (
    <div className=''>
      <ThemeToggleButton />
      <NavBar />
      <div className="nav-search md:hidden flex flex-row justify-center my-1 space-y-3">
        <SearchBar />
      </div>
      <div className="topics flex flex-row justify-center my-1 space-y-3">
        <TopicsHeading />
      </div>
    </div>
  )
}