'use client'
import { useState } from 'react';
import dynamic from "next/dynamic";
import { savePost } from '@/services/api';

// Dynamically import EditorJSWriter with SSR disabled
const EditorJSWriter = dynamic(
    () => import("@/components/EditorJSWriter"),
    { ssr: false }
);

export default function CreatePostPage() {
    const [title, setTitle] = useState('');
    const [slug, setSlug] = useState('');
    const [metaDescription, setMetaDescription] = useState('');
    const [status, setStatus] = useState('draft');
    const [postId, setPostId] = useState<string | undefined>();
    // Initialize with { blocks: [] } to avoid multiple placeholders
    const [editorData, setEditorData] = useState<any>({ blocks: [] });
    const [saving, setSaving] = useState(false);
    const [saveStatus, setSaveStatus] = useState<'idle' | 'success' | 'error'>('idle');

    // Save handler
    const handleSave = async () => {
        setSaving(true);
        try {
            const postData = {
                id: postId,
                content: editorData,
                title,
                slug,
                metaDescription,
                status
            };
            const savedPost = await savePost(postData);
            setPostId(savedPost.id);
            setSaveStatus('success');
        } catch (error) {
            console.error('Save failed:', error);
            setSaveStatus('error');
        } finally {
            setSaving(false);
            setTimeout(() => setSaveStatus('idle'), 2000);
        }
    };

    // Editor.js onChange handler
    function handleEditorChange(data: any): void {
        setEditorData(data);
    }

    return (
        <div className="container mx-auto px-4 py-8 max-w-5xl">
            {/* Editor.js Writer */}
            <EditorJSWriter
                data={editorData}
                onChange={handleEditorChange}
            />

            {/* Post Meta Fields */}
            <div className="mt-8 mb-6 space-y-4">
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Post title"
                    className="w-full text-3xl font-bold border-none focus:outline-none placeholder-gray-400"
                    maxLength={120}
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

            {/* Save Button */}
            <div className="flex justify-end mt-8">
                <button
                    onClick={handleSave}
                    disabled={saving}
                    className={`px-6 py-2 rounded-lg font-semibold shadow transition-all
                        ${saving ? 'bg-blue-400' :
                            saveStatus === 'success' ? 'bg-green-500' :
                                saveStatus === 'error' ? 'bg-red-500' : 'bg-blue-600'
                        } text-white hover:scale-105 active:scale-95`}
                >
                    {saving
                        ? 'Saving...'
                        : saveStatus === 'success'
                            ? 'Saved!'
                            : saveStatus === 'error'
                                ? 'Error'
                                : 'Save'}
                </button>
            </div>
        </div>
    );
}