import NotFound from '@/app/not-found';
import ArticleCard from '@/components/ArticleCard';
import LeftSideBar from '@/components/LeftSideBar';
import NavBar from '@/components/NavBar';
import RightSideBar from '@/components/RightSideBar';
import SearchBar from '@/components/SearchBar';
import SkeletonCard from '@/components/SkeletonCard';
import ThemeToggleButton from '@/components/ThemeToggle';
import TopicsHeading from '@/components/TopicsHeading';
import { articles } from '@/lib/data';
import { getArticleBySlug } from '@/lib/utils/getSlug';

export default async function ArticleDetail({ params }: { params: { slug: string } }) {
    const article = await getArticleBySlug(params.slug);

    if (!article) return <NotFound />;




    return (<>
        <div className="p-8">
            <h1 className="text-2xl font-bold">{article.title}</h1>
            <p>{article.content}</p>
        </div>
       
    </>

    );
}