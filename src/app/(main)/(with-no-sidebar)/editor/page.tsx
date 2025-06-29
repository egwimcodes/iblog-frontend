'use client';

import TiptapEditor from '@/components/TipTap';
import React, { useState } from 'react';

export default function CreateArticle() {
    const [content, setContent] = useState('');

    const handleSubmit = async () => {
        await fetch('/api/articles', {
            method: 'POST',
            body: JSON.stringify({ content }),
            headers: { 'Content-Type': 'application/json' },
        });
    };

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4">Create Article</h1>
            <TiptapEditor onChange={setContent} />
            <button
                onClick={handleSubmit}
                className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
                Publish
            </button>
        </div>
    );
}
