import { articles } from "../data";

export const getArticleBySlug = (slug: string) =>
  articles.find((article) => article.slug === slug);
