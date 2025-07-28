'use client'
import Image from 'next/image';
import { useState, useRef } from 'react';
import dynamic from "next/dynamic";
import { FiUpload } from 'react-icons/fi';
import OutlineBtn from '@/components/OutlineBtn';
import TextBtn from '@/components/TextBtn';

// Define types for EditorJS data
interface EditorJSBlock {
    type: string;
    data: Record<string, unknown>;
}

interface EditorJSData {
    blocks: EditorJSBlock[];
    time?: number;
    version?: string;
}

interface SavePostParams {
    id?: string;
    content: string;
    title?: string;
    slug?: string;
    metaDescription?: string;
    status?: string;
    featuredImage?: File | null;
}

// Dynamically import EditorJSWriter with SSR disabled
const EditorJSWriter = dynamic(
    () => import("@/components/EditorJSWriter"),
    { ssr: false }
);

export default function CreatePostPage() {
    const [title, setTitle] = useState('');
    const [slug] = useState('');
    const [metaDescription, setMetaDescription] = useState('');
    const [status] = useState('draft');
    const [postId] = useState<string | undefined>();
    const [editorData, setEditorData] = useState<EditorJSData>({ blocks: [] });

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
            const postData: SavePostParams = {
                id: postId,
                content: JSON.stringify(editorData), // Convert EditorJS data to string
                title,
                slug,
                metaDescription,
                status,
                featuredImage
            };
            console.log(postData)

            // const savedPost = await savePost(postData);
            // setPostId(savedPost.id);
            setSaveStatus('success');
        } catch (error) {
            console.error('Save failed:', error);
            setSaveStatus('error');
        } finally {
            setSaving(false);
            setTimeout(() => setSaveStatus('idle'), 2000);
        }
    };

    const handleEditorChange = (data: EditorJSData): void => {
        setEditorData(data);
    };

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
                {/* Gradient border for input */}
                <div className="p-[1px] rounded-lg bg-gradient-to-t from-purple-600 via-pink-500 to-purple-600">
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Seo Title (for SEO)"
                        className="w-full px-3 py-2 rounded-[calc(3rem-41px)] bg-opacity-100 focus:bg-opacity-95 focus:outline-none placeholder-gray-400 border-none"
                        maxLength={120}
                    />
                </div>
                {/* Gradient border for textarea */}
                <div className="p-[1px] rounded-lg bg-gradient-to-t from-purple-600 via-pink-500 to-purple-600">
                    <textarea
                        value={metaDescription}
                        onChange={(e) => setMetaDescription(e.target.value)}
                        placeholder="Meta description (for SEO)"
                        className="w-full rounded-[calc(3rem-41px)] px-3 py-2 bg-opacity-100 focus:bg-opacity-95 focus:outline-none placeholder-gray-400 border-none"
                        rows={3}
                    />
                </div>
            </div>

            {/* Featured Image Upload */}
            <div className="featured-img-container">
                <label className="block text-lg font-semibold mb-2">Featured Image</label>
                <div className="content flex flex-row items-center justify-between">
                    <div className="drag-drop flex-[2] h-40 w-full flex flex-col items-center">
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
                            {imagePreviewUrl && (
                                <Image
                                    src={imagePreviewUrl}
                                    alt="Preview"
                                    width={200}
                                    height={150}
                                    className="mt-4 max-h-32 object-contain rounded shadow"
                                />
                            )}
                        </div>
                    </div>
                    <div className="or flex-[1] w-full flex items-center justify-center">
                        <span className="font-poppins font-semibold text-3xl text-pink-500 mx-4">or</span>
                    </div>
                    <div className="mb-6 flex-[2] w-full flex flex-col items-center">
                        <div className="flex items-center gap-4">
                            <input
                                type="file"
                                accept="image/*"
                                id="featuredImage"
                                onChange={handleImageChange}
                                className="hidden"
                            />
                            <div className="p-[2px] rounded-md bg-gradient-to-t from-purple-600 via-pink-500 to-purple-600 shadow">
                                <label
                                    htmlFor="featuredImage"
                                    className="cursor-pointer bg-background-light dark:bg-background-dark text-pink-500 rounded-md flex items-center justify-center p-3 w-full h-full hover:scale-95 active:scale-100 transition-all"
                                    title="Upload Image"
                                >
                                    <FiUpload size={24} />
                                </label>
                            </div>
                            {featuredImage && (
                                <span className="text-sm text-gray-700 truncate max-w-xs">
                                    {featuredImage.name}
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Save Button */}
            <div className="flex justify-end my-20 h-10">
                <TextBtn
                    onClick={handleSave}
                    className={`font-semibold bg-transparent w-[100px] mx-10
            ${saving ? 'text-blue-400' :
                            saveStatus === 'success' ? 'text-green-500' :
                                saveStatus === 'error' ? 'text-red-500' : 'text-blue-600'} text-white active:scale-95`} label={''}                >
                    {saving
                        ? 'Saving...'
                        : saveStatus === 'success'
                            ? 'Saved!'
                            : saveStatus === 'error'
                                ? 'Error'
                                : 'Save'}
                </TextBtn>
                <OutlineBtn
                    onClick={handleSave}
                    className={`font-semibold w-[200px] shadow transition-all
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
                                : 'Publish'}
                </OutlineBtn>
            </div>
        </div>
    );
}