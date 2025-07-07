export interface ArticleData {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  timeAgo: string;
  likes: string | number;
  comments: string | number;
  author: Author;
}

export interface Author {
  name: string;
  avatar: string;
  bio: string;
}

