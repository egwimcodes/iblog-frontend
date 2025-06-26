import { articles } from "../data";

export const getArticleBySlug = async (slug: string) =>
  articles.find((article) => article.slug === slug);


// export const getArticleBySlug = async (slug: string) => {
//   console.log(slug);
//   const found = articles.find((article) => article.slug === slug);
//   console.log(`what's expected: ${found}`);
//   return found;
// };


// lib/utils.ts
import { clsx, ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges Tailwind CSS class names conditionally.
 * This ensures Tailwind conflict resolution works correctly.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs));
}
