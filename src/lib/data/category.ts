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