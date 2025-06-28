import CategoryList from "@/components/CategoryList";
import TopicsHeading from "@/components/TopicsHeading";
export default function SearchTopics() {
    return (<>
     {/* Topics Heading */}
          <div className="w-full mb-4">
            <TopicsHeading />
          </div>
    
        <div className="search-topics w-full flex flex-col space-y-4">
            <div className="heading flex flex-col items-center my-10">
                <h1 className="title text-3xl text-neutral-900 dark:text-white font-inter font-bold hover:text-purple-600 transition-colors duration-300 cursor-pointer">
                    Explore Topics
                </h1>
            </div>

            <CategoryList />
        </div>
    </>
    );
}
