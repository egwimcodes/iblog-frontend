export const articles = [
  {
    id: 1,
    title: "2050’s Ultimate Speed Machines: The Sports Cars of Tomorrow ",
    slug: "2050s-ultimate-speed-machines",
    excerpt:
      "Explore cutting-edge automotive innovations of 2050. Explore cutting-edge automotive innovations of 2050. Explore cutting-edge automotive innovations of 2050.",
    content:
      "It’s frustrating to spend days on a draft, finally get ready tohit that publish button, only to then spend extra time hunting for the perfect picture to illustrate your story.It’s frustrating to spend days on a draft, finally get ready for the perfect picture to illustrate your story.It’s days on a draft, finally get ready tohit Let’s be honest — most of us stick to the usual suspects when it,comes to open-source tools. React, TensorFlow, Docker, Next.js. Legends, yes — but in 2025, there’s an underground movement of projects that are solving hard problems in beautiful ways. And they deserve your attention.It’s frustrating to spend days on a draft, finally get ready tohit that publish button, only to then spend extra time hunting for the perfect picture to illustrate your story.It’s frustrating to spend days on a draft, finally get ready for the perfect picture to illustrate your story.It’s days on a draft, finally get ready tohit Let’s be honest — most of us stick to the usual suspects when it,comes to open-source tools. React, TensorFlow, Docker, Next.js. Legends, yes — but in 2025, there’s an underground movement of projects that are solving hard problems in beautiful ways. And they deserve your attention.",
    image: "/images/speed-machine.jpg",
    date: "2025-06-19",
    timeAgo: "1 min ago",
    likes: 1300,
    comments: 180,
    author: {
      name: "John Doe",
      avatar: "/images/avatar1.jpg",
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
      avatar: "/images/avatar1.jpg",
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
    image: "/images/avatar1.jpg",
    date: "2025-06-19",
    timeAgo: "25 mins ago",
    likes: 780,
    comments: 89,
    author: {
      name: "Marcus Lee",
      avatar: "/images/avatar1.jpg",
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
      avatar: "/images/avatar1.jpg",
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
      avatar: "/images/avatar1.jpg",
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
      avatar: "/images/avatar1.jpg",
      bio: "Lifestyle coach focused on mindful tech use.",
    },
  },
];
  

interface SubSubSubCategory {
  label: string;
  children: string[]; // Bottom level must be string array
}

interface SubSubCategory {
  label: string;
  children: SubSubSubCategory[];
}

interface SubCategory {
  label: string;
  children: SubSubCategory[];
}

interface Category {
  icon: string;
  color: string;
  borderColor: string;
  textColor: string;
  title: string;
  sub: SubCategory[];
}

const categories: Category[] = [
  // Previous categories remain unchanged...

  {
    icon: "🍳",
    color: "text-orange-500",
    borderColor: "border-orange-400",
    textColor: "text-orange-700 dark:text-orange-200",
    title: "Food",
    sub: [
      {
        label: "Cooking",
        children: [
          {
            label: "Techniques",
            children: [
              {
                label: "Baking",
                children: ["Sourdough", "Pastry", "Gluten-Free"],
              },
              { label: "Grilling", children: ["BBQ", "Smoking", "Marinades"] },
            ],
          },
        ],
      },
    ],
  },
  {
    icon: "🏋️",
    color: "text-teal-500",
    borderColor: "border-teal-400",
    textColor: "text-teal-700 dark:text-teal-200",
    title: "Fitness",
    sub: [
      {
        label: "Workouts",
        children: [
          {
            label: "Training",
            children: [
              {
                label: "Strength",
                children: ["Powerlifting", "Bodybuilding", "Kettlebells"],
              },
              { label: "Cardio", children: ["HIIT", "Running", "Cycling"] },
            ],
          },
        ],
      },
    ],
  },
  {
    icon: "🎨",
    color: "text-pink-500",
    borderColor: "border-pink-400",
    textColor: "text-pink-700 dark:text-pink-200",
    title: "Design",
    sub: [
      {
        label: "Digital",
        children: [
          {
            label: "UI/UX",
            children: [
              {
                label: "Figma",
                children: ["Prototyping", "Components", "Plugins"],
              },
              {
                label: "Web Design",
                children: ["Responsive", "Typography", "Color Theory"],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    icon: "🎮",
    color: "text-indigo-500",
    borderColor: "border-indigo-400",
    textColor: "text-indigo-700 dark:text-indigo-200",
    title: "Gaming",
    sub: [
      {
        label: "Genres",
        children: [
          {
            label: "PC Gaming",
            children: [
              {
                label: "RPGs",
                children: ["Open World", "Character Builds", "Mods"],
              },
              {
                label: "FPS",
                children: ["Competitive", "Tactics", "Hardware"],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    icon: "🎬",
    color: "text-amber-500",
    borderColor: "border-amber-400",
    textColor: "text-amber-700 dark:text-amber-200",
    title: "Entertainment",
    sub: [
      {
        label: "Streaming",
        children: [
          {
            label: "Platforms",
            children: [
              {
                label: "Netflix",
                children: ["Originals", "Hidden Gems", "Documentaries"],
              },
              {
                label: "YouTube",
                children: ["Creators", "Algorithm", "Monetization"],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    icon: "📚",
    color: "text-emerald-500",
    borderColor: "border-emerald-400",
    textColor: "text-emerald-700 dark:text-emerald-200",
    title: "Education",
    sub: [
      {
        label: "Learning",
        children: [
          {
            label: "Online",
            children: [
              {
                label: "MOOCs",
                children: ["Coursera", "edX", "Certifications"],
              },
              {
                label: "Tutoring",
                children: ["Platforms", "Techniques", "Pricing"],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    icon: "🏠",
    color: "text-cyan-500",
    borderColor: "border-cyan-400",
    textColor: "text-cyan-700 dark:text-cyan-200",
    title: "Home",
    sub: [
      {
        label: "Improvement",
        children: [
          {
            label: "DIY",
            children: [
              {
                label: "Renovation",
                children: ["Kitchens", "Bathrooms", "Flooring"],
              },
              {
                label: "Gardening",
                children: ["Vegetables", "Landscaping", "Houseplants"],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    icon: "🚗",
    color: "text-lime-500",
    borderColor: "border-lime-400",
    textColor: "text-lime-700 dark:text-lime-200",
    title: "Automotive",
    sub: [
      {
        label: "Vehicles",
        children: [
          {
            label: "EVs",
            children: [
              {
                label: "Technology",
                children: ["Batteries", "Charging", "Range"],
              },
              {
                label: "Manufacturers",
                children: ["Tesla", "Rivian", "Lucid"],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    icon: "🔬",
    color: "text-violet-500",
    borderColor: "border-violet-400",
    textColor: "text-violet-700 dark:text-violet-200",
    title: "Science",
    sub: [
      {
        label: "Fields",
        children: [
          {
            label: "Space",
            children: [
              {
                label: "Astronomy",
                children: ["Telescopes", "Exoplanets", "Cosmology"],
              },
              { label: "Exploration", children: ["Mars", "Moon", "ISS"] },
            ],
          },
        ],
      },
    ],
  },
  {
    icon: "🛒",
    color: "text-fuchsia-500",
    borderColor: "border-fuchsia-400",
    textColor: "text-fuchsia-700 dark:text-fuchsia-200",
    title: "Business",
    sub: [
      {
        label: "Marketing",
        children: [
          {
            label: "Digital",
            children: [
              {
                label: "SEO",
                children: ["Keywords", "Backlinks", "Analytics"],
              },
              {
                label: "Social Media",
                children: ["Algorithms", "Content", "Advertising"],
              },
            ],
          },
        ],
      },
    ],
  },
];

export default categories;