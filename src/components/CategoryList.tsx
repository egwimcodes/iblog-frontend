'use client'
import categories from "@/lib/data/category";
import React, { useState } from "react";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";

type Category = {
    icon: string;
    color: string;
    borderColor: string;
    textColor: string;
    title: string;
    sub: {
        label: string;
        children: (
            | {
                label: string;
                children: (
                    | {
                        label: string;
                        children: string[];
                    }
                    | string
                )[];
            }
            | string
        )[];
    }[];
};

export const CategoryList = () => {
    const [searchTerm, setSearchTerm] = useState("");

    // Function to generate a slug from text
    const generateSlug = (text: string) =>
        text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

    // Recursive search function
    const searchCategories = (category: Category): boolean => {
        // Check if category title matches
        if (category.title.toLowerCase().includes(searchTerm.toLowerCase())) {
            return true;
        }

        // Check subcategories
        return category.sub.some(sub => {
            // Check subcategory label
            if (sub.label.toLowerCase().includes(searchTerm.toLowerCase())) {
                return true;
            }

            // Check children
            return sub.children.some(child => {
                if (typeof child === "string") {
                    return child.toLowerCase().includes(searchTerm.toLowerCase());
                } else {
                    // Check child label
                    if (child.label.toLowerCase().includes(searchTerm.toLowerCase())) {
                        return true;
                    }
                    // Check grandchildren
                    return child.children.some(grandchild => {
                        if (typeof grandchild === "string") {
                            return grandchild.toLowerCase().includes(searchTerm.toLowerCase());
                        } else {
                            // Check grandchild label
                            if (grandchild.label.toLowerCase().includes(searchTerm.toLowerCase())) {
                                return true;
                            }
                            // Check great-grandchildren
                            return grandchild.children.some(
                                greatGrandchild => greatGrandchild.toLowerCase().includes(searchTerm.toLowerCase())
                            );
                        }
                    });
                }
            });
        });
    };

    // Filter categories based on search term
    const filteredCategories = searchTerm
        ? categories.filter(category => searchCategories(category))
        : categories;

    return (
        <div className="space-y-6">
            {/* Updated Search Bar with Gradient Border */}
            <div className="sticky top-0 z-10 pb-4 flex justify-center">
                <div className="w-[95dvw] md:w-[50dvw] h-12 p-[1px] rounded-full bg-gradient-to-t from-purple-600 via-pink-500 to-purple-600 overflow-hidden">
                    <div className="bg-white dark:bg-background-dark transition-colors duration-500 h-full rounded-[calc(3rem-1px)] flex items-center px-4">
                        <input
                            type="text"
                            placeholder="Search topics..."
                            className="w-full bg-transparent outline-none text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <CiSearch className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                    </div>
                </div>
            </div>

            {/* Categories Grid */}
            {filteredCategories.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredCategories.map((cat: Category, i) => (
                        <div
                            key={i}
                            className={`p-4 rounded-lg ${cat.borderColor} border-l-4 bg-background-light dark:bg-background-dark shadow-sm hover:shadow-md transition-shadow`}
                        >
                            {/* Category Title */}
                            <Link
                                href={`/category/${generateSlug(cat.title)}`}
                                className={`block ${cat.color} font-semibold text-lg mb-3 hover:underline`}
                            >
                                {cat.icon} {cat.title}
                            </Link>

                            <div className="space-y-2">
                                {cat.sub.map((group, j) => (
                                    <div key={j} className="ml-2">
                                        {/* Group Title */}
                                        <Link
                                            href={`/category/${generateSlug(cat.title)}/${generateSlug(group.label)}`}
                                            className={`block ${cat.textColor} font-medium mb-1 hover:underline`}
                                        >
                                            🔹 {group.label}
                                        </Link>

                                        <div className="ml-4 space-y-1">
                                            {group.children.map((child, k) => {
                                                if (typeof child === "string") {
                                                    return (
                                                        <Link
                                                            key={k}
                                                            href={`/category/${generateSlug(cat.title)}/${generateSlug(group.label)}/${generateSlug(child)}`}
                                                            className={`block ${cat.textColor} text-sm hover:underline`}
                                                        >
                                                            🔸 {child}
                                                        </Link>
                                                    );
                                                } else {
                                                    return (
                                                        <div key={k} className="ml-2">
                                                            <Link
                                                                href={`/category/${generateSlug(cat.title)}/${generateSlug(group.label)}/${generateSlug(child.label)}`}
                                                                className={`block ${cat.textColor} text-sm font-medium hover:underline`}
                                                            >
                                                                🔸 {child.label}
                                                            </Link>

                                                            <div className="ml-4 space-y-1">
                                                                {child.children.map((subChild, l) => {
                                                                    if (typeof subChild === "string") {
                                                                        return (
                                                                            <Link
                                                                                key={l}
                                                                                href={`/category/${generateSlug(cat.title)}/${generateSlug(group.label)}/${generateSlug(child.label)}/${generateSlug(subChild)}`}
                                                                                className={`block ${cat.textColor} text-xs hover:underline`}
                                                                            >
                                                                                ▪️ {subChild}
                                                                            </Link>
                                                                        );
                                                                    } else {
                                                                        return (
                                                                            <div key={l} className="ml-2">
                                                                                <Link
                                                                                    href={`/category/${generateSlug(cat.title)}/${generateSlug(group.label)}/${generateSlug(child.label)}/${generateSlug(subChild.label)}`}
                                                                                    className={`block ${cat.textColor} text-xs font-medium hover:underline`}
                                                                                >
                                                                                    ▪️ {subChild.label}
                                                                                </Link>

                                                                                <div className="ml-4">
                                                                                    {subChild.children.map((lastChild, m) => (
                                                                                        <Link
                                                                                            key={m}
                                                                                            href={`/category/${generateSlug(cat.title)}/${generateSlug(group.label)}/${generateSlug(child.label)}/${generateSlug(subChild.label)}/${generateSlug(lastChild)}`}
                                                                                            className={`block ${cat.textColor} text-xs hover:underline`}
                                                                                        >
                                                                                            ▫️ {lastChild}
                                                                                        </Link>
                                                                                    ))}
                                                                                </div>
                                                                            </div>
                                                                        );
                                                                    }
                                                                })}
                                                            </div>
                                                        </div>
                                                    );
                                                }
                                            })}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center py-10 text-gray-500 dark:text-gray-400">
                    No categories found matching &quot;{searchTerm}&quot;
                </div>
            )}
        </div>
    );
};

export default CategoryList;