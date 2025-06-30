'use client'
import { useState } from 'react';
import RichTextEditor from '@/components/RichTextEditor';
import { savePost } from '@/services/api';

export default function CreatePostPage() {
    const [title, setTitle] = useState('');
    const [slug, setSlug] = useState('');
    const [metaDescription, setMetaDescription] = useState('');
    const [status, setStatus] = useState('draft');
    const [postId, setPostId] = useState<string | undefined>();

    const handleSave = async (content: string) => {
        try {
            const postData = {
                id: postId,
                content,
                title,
                slug,
                metaDescription,
                status
            };

            const savedPost = await savePost(postData);
            setPostId(savedPost.id);
            return true;
        } catch (error) {
            console.error('Save failed:', error);
            return false;
        }
    };

    return (
        <div className="container mx-auto px-4 py-8 max-w-5xl">
            <div className="mb-6 space-y-4">
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Post title"
                    className="w-full text-3xl font-bold border-none focus:outline-none"
                />

                <div className="flex gap-4">
                    <input
                        type="text"
                        value={slug}
                        onChange={(e) => setSlug(e.target.value)}
                        placeholder="post-slug"
                        className="flex-1 border rounded px-3 py-2"
                    />

                    <select
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        className="border rounded px-3 py-2"
                    >
                        <option value="draft">Draft</option>
                        <option value="published">Published</option>
                    </select>
                </div>

                <textarea
                    value={metaDescription}
                    onChange={(e) => setMetaDescription(e.target.value)}
                    placeholder="Meta description (for SEO)"
                    className="w-full border rounded px-3 py-2"
                    rows={3}
                />
            </div>

            <RichTextEditor
                initialContent=""
                onSave={handleSave}
                postId={postId}
            />
        </div>
    );
}