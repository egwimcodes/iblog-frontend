import { getArticleBySlug } from '@/lib/data'; // you can define this
import NotFound from '@/app/not-found';

export default async function ArticleDetail({ params }: { params: { slug: string } }) {
    const article = await getArticleBySlug(params.slug);

    if (!article) return <NotFound />;

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold">{article.title}</h1>
            <p>{article.content}</p>
        </div>
    );
}