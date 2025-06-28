import { notFound } from "next/navigation";
import ArticleDetail from "./articlesDetail";
import { getArticleBySlug } from "@/lib/utils/getSlug";
import TopicsHeading from "@/components/TopicsHeading";

export default async function ArticleDetailPage({
  params: { slug },
}: {
  params: { slug: string };
}) {

  const article = await getArticleBySlug(slug);

  if (!article) {
    return notFound();
  }

  return (
    <>
      {/* Topics Heading */}
      <div className="w-full mb-4">
        <TopicsHeading />
      </div>
      <div className="w-full space-y-6">
        <ArticleDetail article={article} />
      </div>
    </>
  );
}
