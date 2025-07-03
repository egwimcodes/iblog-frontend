'use client'
import { useState, useRef } from 'react';
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
    const [editorData, setEditorData] = useState<any>({ blocks: [] });

    const [featuredImage, setFeaturedImage] = useState<File | null>(null);
    const [imagePreviewUrl, setImagePreviewUrl] = useState<string | null>(null);

    const [saving, setSaving] = useState(false);
    const [saveStatus, setSaveStatus] = useState<'idle' | 'success' | 'error'>('idle');

    // Drag and drop state
    const [isDragActive, setIsDragActive] = useState(false);
    const dropRef = useRef<HTMLDivElement>(null);

    const handleSave = async () => {
        setSaving(true);
        try {
            const postData = {
                id: postId,
                content: editorData,
                title,
                slug,
                metaDescription,
                status,
                featuredImage // optional: send this to your backend if needed
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

    function handleEditorChange(data: any): void {
        setEditorData(data);
    }

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setFeaturedImage(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreviewUrl(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    // Drag & Drop handlers
    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragActive(true);
    };

    const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragActive(false);
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            const file = e.dataTransfer.files[0];
            setFeaturedImage(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreviewUrl(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="container mx-auto px-4 max-w-5xl my-8">
            {/* Editor.js Writer */}
            <EditorJSWriter data={editorData} onChange={handleEditorChange} />

            {/* Post Meta Fields */}
            <div className="mt-8 mb-6 space-y-4">
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Seo Title (for SEO)"
                    className="w-full px-3 py-2 border rounded focus:outline-none placeholder-gray-400"
                    maxLength={120}
                />
                <textarea
                    value={metaDescription}
                    onChange={(e) => setMetaDescription(e.target.value)}
                    placeholder="Meta description (for SEO)"
                    className="w-full border rounded px-3 py-2"
                    rows={3}
                />
            </div>

            {/* Featured Image Upload */}
            <div className="featured-img-container  ">
                <label className="block text-lg font-semibold mb-2">Featured Image</label>
                <div className="content flex flex-row items-center justify-between">
                    <div className="drag-drop flex-[2] h-40 w-full flex flex-col items-center ">
                        <div
                            ref={dropRef}
                            className={`border-dashed border-2 rounded-lg p-6 text-center transition-colors h-full flex items-center justify-center
        ${isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}`}
                            onDragOver={handleDragOver}
                            onDragLeave={handleDragLeave}
                            onDrop={handleDrop}
                        >
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                className="hidden"
                                id="dragDropImage"
                            />
                            <label
                                htmlFor="dragDropImage"
                                className="cursor-pointer text-gray-600 hover:text-gray-800 transition-colors"
                            >
                                {isDragActive
                                    ? "Drop the image here..."
                                    : "Drag and drop an image here or click to select"}
                            </label>
                            {/* Show image preview here */}
                            {imagePreviewUrl && (
                                <img
                                    src={imagePreviewUrl}
                                    alt="Preview"
                                    className="mt-4 max-h-32 object-contain rounded shadow"
                                />
                            )}
                        </div>
                    </div>
                    <div className="or flex-[1] w-full flex items-center justify-center">
                        <span className="font-popoins font-semibold text-3xl text-pink-500 mx-4">or</span>
                    </div>
                    <div className="mb-6 flex-[2] w-full flex flex-col items-center">
                        <label className="block text-lg font-semibold mb-2">Featured Image</label>
                        <div className="flex items-center gap-4">
                            <input
                                type="file"
                                accept="image/*"
                                id="featuredImage"
                                onChange={handleImageChange}
                                className="hidden"
                            />
                            <label
                                htmlFor="featuredImage"
                                className="cursor-pointer bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold shadow hover:scale-105 active:scale-95 transition-all"
                            >
                                Choose File
                            </label>
                            {featuredImage && (
                                <span className="text-sm text-gray-700 truncate max-w-xs">
                                    {featuredImage.name}
                                </span>
                            )}
                        </div>
                        {imagePreviewUrl && (
                            <img
                                src={imagePreviewUrl}
                                alt="Preview"
                                className="mt-4 w-full max-h-96 object-cover rounded-lg border"
                            />
                        )}
                    </div>
                </div>

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