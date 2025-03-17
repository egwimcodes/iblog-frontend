import React, { useState } from "react";
import Image from "next/image";
import { ImArrowUpRight2 } from "react-icons/im";
function All_Articles() {
    const categories = [
        "All",
        "Design",
        "Artificial Intelligence",
        "Mobile",
        "Presentation",
        "Software Engineer",
        "Developer",
    ];

    const [activeCategory, setActiveCategory] = useState("All");

    const articles = Array.from({ length: 16 }, (_, i) => ({
        id: i + 1,
        title: `Article Title ${i + 1}`,
        description: "This is a short description of the article, giving a brief overview.",
        category: categories[i % categories.length], // Assign categories cyclically
        author: `Author ${i + 1}`,
        image: `/assets/2c281131-7756-4301-ad76-bb9b3c381ff1.jpg`, // Random placeholder images
        // image: `https://source.unsplash.com/400x300/?tech,${i}`, // Random placeholder images
    }));

    // Filter articles based on active category
    const filteredArticles =
        activeCategory === "All"
            ? articles
            : articles.filter((article) => article.category === activeCategory);

    return (
        
        <div className="all-articles mt-4">
            {/* Category Sort */}
            <div className="category-sort flex flex-wrap justify-center sm:justify-between w-full sm:w-[70%] mx-auto cursor-pointer gap-4">
                {categories.map((category) => (
                    <p
                        key={category}
                        className={`pb-1 text-sm sm:text-base transition-all cursor-pointer mx-2 ${activeCategory === category ? "border-b-2 mx-2 font-medium" : "text-gray-500"
                            }`}
                        onClick={() => setActiveCategory(category)}
                    >
                        {category}
                    </p>
                ))}
            </div>

            {/* Display active category */}
            <div className="sorting-section mt-4">
                <p className="text-gray-700">
                    Showing articles for: <strong>{activeCategory}</strong>
                </p>
            </div>

            {/* Article Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
                {filteredArticles.map((article) => (
                    <div
                        key={article.id}
                        className="shadow-lg  overflow-hidden transform transition duration-300 hover:scale-105"
                    >
                        <img src={article.image} alt={article.title} className="w-full h-60 object-cover bg-white rounded-xl" />
                        <h3 className="text-sm font-light p-2">{article.category}</h3>
                        <div className="p-2">
                            <div className="row flex flex-row justify-between">
                                <h3 className="text-lg font-semibold">{article.title}</h3>
                                <ImArrowUpRight2 />
                            </div>
                            <p className="text-sm text-gray-600 mt-1">{article.description}</p>
                            <div className="author-details flex items-center my-1">
                                <Image
                                    src={"/assets/portrait-businesswoman-isolated-home.jpg"}
                                    width={40}
                                    height={40}
                                    alt="author"
                                    className="rounded-full"
                                />
                                <div className="col">

                                    <p className="text-light-textwhite mx-2">IntellaNex</p>
                                    <p className="text-light-textwhite/50 mx-2 font-light text-sm">1 Jan 2025 ==</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default All_Articles;
