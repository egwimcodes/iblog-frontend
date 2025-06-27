import { articles } from "../data";

export const  getArticleBySlug = async (slug: string) =>
  articles.find((article) => article.slug === slug);

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
