// lib/data.ts
// data.ts
export const articles = [
  {
    id: 1,
    title: "2050’s Ultimate Speed Machines",
    slug: "2050s-ultimate-speed-machines",
    excerpt: "Explore cutting-edge automotive innovations of 2050.",
    content:
      "Explore cutting-edge automotive innovations expected by 2050, featuring electric supercars, autonomous race vehicles, and AI-assisted driving experiences that redefine speed and luxury.",
    image: "/images/speed-machine.jpg",
    date: "2025-06-19",
    timeAgo: "1 min ago",
    likes: 1300,
    comments: 180,
    author: {
      name: "John Doe",
      avatar: "/avatars/john.jpg",
      bio: "Automotive journalist and tech enthusiast.",
    },
  },
  {
    id: 2,
    title: "The Rise of AI in Everyday Life",
    slug: "the-rise-of-ai-in-everyday-life",
    excerpt: "AI is now in your home, car, and pocket. Here's how.",
    content:
      "Artificial intelligence has quietly woven itself into our daily routines—from smart thermostats and virtual assistants to personalized shopping experiences and automated healthcare diagnostics.",
    image: "/images/ai-daily-life.jpg",
    date: "2025-06-19",
    timeAgo: "10 mins ago",
    likes: 950,
    comments: 102,
    author: {
      name: "Sarah Connor",
      avatar: "/avatars/sarah.jpg",
      bio: "Tech analyst and AI advocate.",
    },
  },
  {
    id: 3,
    title: "Why Remote Work is Here to Stay",
    slug: "why-remote-work-is-here-to-stay",
    excerpt: "Work from home isn't going away — it's just getting started.",
    content:
      "The pandemic accelerated remote work adoption, but now it's a long-term shift. Companies are embracing flexible policies, and workers enjoy better work-life balance and productivity from home.",
    image: "/images/remote-work.jpg",
    date: "2025-06-19",
    timeAgo: "25 mins ago",
    likes: 780,
    comments: 89,
    author: {
      name: "Marcus Lee",
      avatar: "/avatars/marcus.jpg",
      bio: "Workplace strategist and business author.",
    },
  },
  {
    id: 4,
    title: "Inside the Metaverse: What to Expect",
    slug: "inside-the-metaverse-what-to-expect",
    excerpt: "Virtual lands, avatars, and a new way to socialize.",
    content:
      "The metaverse promises immersive 3D worlds where users can socialize, work, and play. As tech giants invest billions, expect virtual real estate, NFTs, and new social norms to emerge.",
    image: "/images/metaverse-world.jpg",
    date: "2025-06-19",
    timeAgo: "45 mins ago",
    likes: 1420,
    comments: 210,
    author: {
      name: "Lena Brown",
      avatar: "/avatars/lena.jpg",
      bio: "Futurist and virtual world researcher.",
    },
  },
  {
    id: 5,
    title: "Green Tech Innovations of the Decade",
    slug: "green-tech-innovations-of-the-decade",
    excerpt: "Eco-friendly tech you need to know about in 2025.",
    content:
      "Sustainable technologies are advancing fast. Solar skins that blend into architecture, carbon-negative concrete, and AI-optimized energy grids are redefining eco-friendly living.",
    image: "/images/green-tech.jpg",
    date: "2025-06-19",
    timeAgo: "1 hour ago",
    likes: 1100,
    comments: 130,
    author: {
      name: "Nathan Green",
      avatar: "/avatars/nathan.jpg",
      bio: "Environmental tech writer and speaker.",
    },
  },
  {
    id: 6,
    title: "Mastering the Art of Digital Minimalism",
    slug: "mastering-the-art-of-digital-minimalism",
    excerpt: "Cut the noise. Focus only on what truly matters online.",
    content:
      "Digital minimalism is the practice of simplifying your online presence to focus on what truly matters. Turn off notifications, delete unused apps, and reclaim your time and attention.",
    image: "/images/digital-minimalism.jpg",
    date: "2025-06-19",
    timeAgo: "2 hours ago",
    likes: 670,
    comments: 75,
    author: {
      name: "Emily Ray",
      avatar: "/avatars/emily.jpg",
      bio: "Lifestyle coach focused on mindful tech use.",
    },
  },
];
  
  

export const getArticleBySlug = (slug: string) =>
  articles.find((article) => article.slug === slug);
