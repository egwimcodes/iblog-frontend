// app/articles/[slug]/layout.tsx

import React from 'react'

export default function ArticleLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="article-layout-container">
            {/* You can include a different header, sidebars, etc */}
            <header className="bg-white dark:bg-black shadow">
                <div className="max-w-5xl mx-auto px-4 py-4">
                    <h1 className="text-2xl font-bold">Article Detail</h1>
                </div>
            </header>
            <main className="max-w-5xl mx-auto px-4 py-6">
                {children}
            </main>
        </div>
    )
}
