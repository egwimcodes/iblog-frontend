import { notFound } from "next/navigation";
import ArticleDetail from "./articlesDetail";
import { getArticleBySlug } from "@/lib/utils/getSlug";

export default async function ArticleDetailPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  console.log("Slug param:", slug);

  const article = await getArticleBySlug(slug);

  if (!article) {
    console.log("Article not found");
    return notFound();
  }

  return (
    <div className="w-full space-y-6">
      <ArticleDetail article={article} />
    </div>
  );
}
