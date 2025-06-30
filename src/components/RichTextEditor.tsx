'use client'
import { useState, useCallback, useRef } from 'react';
import { useEditor, EditorContent, BubbleMenu, FloatingMenu } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import TextAlign from '@tiptap/extension-text-align';
import Link from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';
import Table from '@tiptap/extension-table';
import TableRow from '@tiptap/extension-table-row';
import TableCell from '@tiptap/extension-table-cell';
import TableHeader from '@tiptap/extension-table-header';
import { Color } from '@tiptap/extension-color';
import TextStyle from '@tiptap/extension-text-style';
import Underline from '@tiptap/extension-underline';
import Youtube from '@tiptap/extension-youtube';
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import Placeholder from '@tiptap/extension-placeholder';
import CharacterCount from '@tiptap/extension-character-count';
import axios from 'axios';

// 👇 Top of file
import { common } from 'lowlight';

const { createLowlight } = require('lowlight');
// @ts-ignore
const javascript = require('highlight.js/lib/languages/javascript');
// @ts-ignore
const html = require('highlight.js/lib/languages/xml');

const lowlight = createLowlight();
lowlight.registerLanguage('js', javascript);
lowlight.registerLanguage('html', html);


import {
    FaBold, FaItalic, FaUnderline, FaStrikethrough, FaCode,
    FaParagraph, FaHeading, FaQuoteLeft, FaListOl, FaListUl,
    FaAlignLeft, FaAlignCenter, FaAlignRight, FaAlignJustify,
    FaLink, FaUnlink, FaImage, FaTable, FaYoutube, FaRedo,
    FaUndo, FaPalette, FaHighlighter, FaTrash, FaColumns,
    FaCheckSquare, FaFileUpload, FaSave, FaSpinner
} from 'react-icons/fa';

interface RichTextEditorProps {
    initialContent?: string;
    onSave?: (content: string) => Promise<boolean>;
    onUpdate?: (content: string) => void;
    editable?: boolean;
    postId?: string;
}

const RichTextEditor = ({
    initialContent = '',
    onSave,
    onUpdate,
    editable = true,
    postId
}: RichTextEditorProps) => {
    // ... (keep all your existing state and ref declarations)
    const [isLoading, setIsLoading] = useState(false);
    const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'success' | 'error'>('idle');
    const [linkUrl, setLinkUrl] = useState('');
    const [youtubeUrl, setYoutubeUrl] = useState('');
    const [showLinkMenu, setShowLinkMenu] = useState(false);
    const [wordCount, setWordCount] = useState(0);
    const [charCount, setCharCount] = useState(0);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const editor = useEditor({
        extensions: [
            StarterKit.configure({
                codeBlock: false,
            }),
            TextAlign.configure({
                types: ['heading', 'paragraph'],
            }),
            Link.configure({
                openOnClick: false,
            }),
            Image.configure({
                inline: true,
                allowBase64: false,
                HTMLAttributes: {
                    class: 'rounded-lg',
                },
            }),
            Table.configure({
                resizable: true,
            }),
            TableRow,
            TableCell,
            TableHeader,
            Color,
            TextStyle,
            Underline,
            Youtube.configure({
                inline: false,
                HTMLAttributes: {
                    class: 'w-full h-96',
                },
            }),
            CodeBlockLowlight.configure({
                lowlight,
            }),
            Placeholder.configure({
                placeholder: 'Write something amazing...',
            }),
            CharacterCount.configure({
                limit: 100000,
            }),
        ],
        content: initialContent,
        editable,
        onUpdate: ({ editor }) => {
            const content = editor.getHTML();
            onUpdate?.(content);

            const text = editor.getText();
            const words = text.trim().split(/\s+/).filter(word => word.length > 0);
            setWordCount(words.length);
            setCharCount(text.length);
        },
    });

    const handleSave = async () => {
        if (!editor) return;

        setSaveStatus('saving');
        try {
            const htmlContent = editor.getHTML();
            let success = false;

            if (onSave) {
                success = await onSave(htmlContent);
            } else {
                // Default save implementation
                const response = await axios.post('/api/posts', {
                    id: postId,
                    content: htmlContent
                }, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                });

                success = response.status === 200;
            }

            setSaveStatus(success ? 'success' : 'error');
            setTimeout(() => setSaveStatus('idle'), 3000);
        } catch (error) {
            console.error('Save failed:', error);
            setSaveStatus('error');
            setTimeout(() => setSaveStatus('idle'), 3000);
        }
    };

    const addImage = useCallback(() => {
        fileInputRef.current?.click();
    }, []);

    const handleImageUpload = useCallback(async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files?.length || !editor) return;

        setIsLoading(true);
        try {
            const file = e.target.files[0];
            const formData = new FormData();
            formData.append('image', file);

            const response = await axios.post('/api/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });

            if (response.data.url) {
                editor.chain().focus().setImage({ src: response.data.url }).run();
            }
        } catch (error) {
            console.error('Image upload failed:', error);
        } finally {
            setIsLoading(false);
            if (e.target) e.target.value = '';
        }
    }, [editor]);

    const setLink = useCallback(() => {
        if (!editor) return;

        const previousUrl = editor.getAttributes('link').href;
        setLinkUrl(previousUrl || '');
        setShowLinkMenu(true);
    }, [editor]);

    const handleLink = useCallback(() => {
        if (!editor) return;

        if (linkUrl) {
            editor
                .chain()
                .focus()
                .extendMarkRange('link')
                .setLink({ href: linkUrl })
                .run();
        } else {
            editor.chain().focus().extendMarkRange('link').unsetLink().run();
        }

        setShowLinkMenu(false);
        setLinkUrl('');
    }, [editor, linkUrl]);

    const addYoutubeVideo = useCallback(() => {
        if (youtubeUrl && editor) {
            editor.commands.setYoutubeVideo({
                src: youtubeUrl,
                width: 640,
                height: 480,
            });
            setYoutubeUrl('');
        }
    }, [editor, youtubeUrl]);

    const insertTable = useCallback(() => {
        editor?.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run();
    }, [editor]);

    const addColumn = useCallback(() => {
        editor?.chain().focus().addColumnAfter().run();
    }, [editor]);

    const addRow = useCallback(() => {
        editor?.chain().focus().addRowAfter().run();
    }, [editor]);

    const deleteTable = useCallback(() => {
        editor?.chain().focus().deleteTable().run();
    }, [editor]);

    const toggleHeading = useCallback((level: number) => {
        editor?.chain().focus().toggleHeading({ level }).run();
    }, [editor]);

    if (!editor) {
        return <div className="p-4 border rounded-lg bg-gray-50">Initializing editor...</div>;
    }

    return (
        <div className="relative border rounded-lg border-gray-300 bg-white">
            <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageUpload}
                className="hidden"
                accept="image/*"
            />

            {/* Main Toolbar */}
            <div className="flex flex-wrap items-center gap-1 p-2 border-b bg-gray-50 sticky top-0 z-10">
                <button
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    className={`p-2 rounded ${editor.isActive('bold') ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
                    title="Bold"
                >
                    <FaBold />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleItalic().run()}
                    className={`p-2 rounded ${editor.isActive('italic') ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
                    title="Italic"
                >
                    <FaItalic />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleUnderline().run()}
                    className={`p-2 rounded ${editor.isActive('underline') ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
                    title="Underline"
                >
                    <FaUnderline />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleStrike().run()}
                    className={`p-2 rounded ${editor.isActive('strike') ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
                    title="Strikethrough"
                >
                    <FaStrikethrough />
                </button>

                <div className="w-px h-6 bg-gray-300 mx-1"></div>

                <div className="relative group">
                    <button className="p-2 rounded hover:bg-gray-100" title="Heading">
                        <FaHeading />
                    </button>
                    <div className="absolute left-0 mt-1 w-48 bg-white shadow-lg rounded-md p-2 hidden group-hover:block z-20">
                        <button
                            onClick={() => toggleHeading(1)}
                            className={`block w-full text-left px-2 py-1 rounded ${editor.isActive('heading', { level: 1 }) ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
                        >
                            Heading 1
                        </button>
                        <button
                            onClick={() => toggleHeading(2)}
                            className={`block w-full text-left px-2 py-1 rounded ${editor.isActive('heading', { level: 2 }) ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
                        >
                            Heading 2
                        </button>
                        <button
                            onClick={() => toggleHeading(3)}
                            className={`block w-full text-left px-2 py-1 rounded ${editor.isActive('heading', { level: 3 }) ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
                        >
                            Heading 3
                        </button>
                        <button
                            onClick={() => editor.chain().focus().setParagraph().run()}
                            className={`block w-full text-left px-2 py-1 rounded ${editor.isActive('paragraph') ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
                        >
                            Paragraph
                        </button>
                    </div>
                </div>

                <button
                    onClick={() => editor.chain().focus().toggleBulletList().run()}
                    className={`p-2 rounded ${editor.isActive('bulletList') ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
                    title="Bullet List"
                >
                    <FaListUl />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleOrderedList().run()}
                    className={`p-2 rounded ${editor.isActive('orderedList') ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
                    title="Numbered List"
                >
                    <FaListOl />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleBlockquote().run()}
                    className={`p-2 rounded ${editor.isActive('blockquote') ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
                    title="Blockquote"
                >
                    <FaQuoteLeft />
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                    className={`p-2 rounded ${editor.isActive('codeBlock') ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
                    title="Code Block"
                >
                    <FaCode />
                </button>

                <div className="w-px h-6 bg-gray-300 mx-1"></div>

                <button
                    onClick={() => editor.chain().focus().setTextAlign('left').run()}
                    className={`p-2 rounded ${editor.isActive({ textAlign: 'left' }) ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
                    title="Align Left"
                >
                    <FaAlignLeft />
                </button>
                <button
                    onClick={() => editor.chain().focus().setTextAlign('center').run()}
                    className={`p-2 rounded ${editor.isActive({ textAlign: 'center' }) ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
                    title="Align Center"
                >
                    <FaAlignCenter />
                </button>
                <button
                    onClick={() => editor.chain().focus().setTextAlign('right').run()}
                    className={`p-2 rounded ${editor.isActive({ textAlign: 'right' }) ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
                    title="Align Right"
                >
                    <FaAlignRight />
                </button>

                <div className="w-px h-6 bg-gray-300 mx-1"></div>

                <button
                    onClick={setLink}
                    className={`p-2 rounded ${editor.isActive('link') ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
                    title="Link"
                >
                    <FaLink />
                </button>
                <button
                    onClick={() => editor.chain().focus().unsetLink().run()}
                    className="p-2 rounded hover:bg-gray-100"
                    disabled={!editor.isActive('link')}
                    title="Remove Link"
                >
                    <FaUnlink />
                </button>

                <button
                    onClick={addImage}
                    className="p-2 rounded hover:bg-gray-100"
                    title="Insert Image"
                >
                    <FaImage />
                </button>

                <div className="relative group">
                    <button className="p-2 rounded hover:bg-gray-100" title="Insert Table">
                        <FaTable />
                    </button>
                    <div className="absolute left-0 mt-1 w-48 bg-white shadow-lg rounded-md p-2 hidden group-hover:block z-20">
                        <button
                            onClick={insertTable}
                            className="block w-full text-left px-2 py-1 rounded hover:bg-gray-100"
                        >
                            Insert Table
                        </button>
                        <button
                            onClick={addColumn}
                            className="block w-full text-left px-2 py-1 rounded hover:bg-gray-100"
                            disabled={!editor.can().addColumnAfter()}
                        >
                            Add Column
                        </button>
                        <button
                            onClick={addRow}
                            className="block w-full text-left px-2 py-1 rounded hover:bg-gray-100"
                            disabled={!editor.can().addRowAfter()}
                        >
                            Add Row
                        </button>
                        <button
                            onClick={deleteTable}
                            className="block w-full text-left px-2 py-1 rounded hover:bg-gray-100"
                            disabled={!editor.can().deleteTable()}
                        >
                            Delete Table
                        </button>
                    </div>
                </div>

                <div className="relative group">
                    <button className="p-2 rounded hover:bg-gray-100" title="Insert Media">
                        <FaFileUpload />
                    </button>
                    <div className="absolute left-0 mt-1 w-64 bg-white shadow-lg rounded-md p-2 hidden group-hover:block z-20">
                        <div className="mb-2">
                            <label className="block text-sm font-medium mb-1">YouTube URL</label>
                            <div className="flex">
                                <input
                                    type="text"
                                    value={youtubeUrl}
                                    onChange={(e) => setYoutubeUrl(e.target.value)}
                                    placeholder="https://youtube.com/watch?v=..."
                                    className="flex-1 border rounded-l px-2 py-1 text-sm"
                                />
                                <button
                                    onClick={addYoutubeVideo}
                                    className="bg-blue-500 text-white px-2 py-1 rounded-r text-sm"
                                >
                                    Insert
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-px h-6 bg-gray-300 mx-1"></div>

                <button
                    onClick={() => editor.chain().focus().undo().run()}
                    disabled={!editor.can().undo()}
                    className="p-2 rounded hover:bg-gray-100 disabled:opacity-50"
                    title="Undo"
                >
                    <FaUndo />
                </button>
                <button
                    onClick={() => editor.chain().focus().redo().run()}
                    disabled={!editor.can().redo()}
                    className="p-2 rounded hover:bg-gray-100 disabled:opacity-50"
                    title="Redo"
                >
                    <FaRedo />
                </button>

                <div className="flex-1"></div>

                <button
                    onClick={handleSave}
                    disabled={saveStatus === 'saving'}
                    className={`flex items-center gap-1 px-3 py-1 rounded ${saveStatus === 'saving' ? 'bg-blue-400' :
                            saveStatus === 'success' ? 'bg-green-500' :
                                saveStatus === 'error' ? 'bg-red-500' : 'bg-blue-500'
                        } text-white`}
                    title="Save"
                >
                    {saveStatus === 'saving' ? (
                        <FaSpinner className="animate-spin" />
                    ) : (
                        <FaSave />
                    )}
                    <span>
                        {saveStatus === 'saving' ? 'Saving...' :
                            saveStatus === 'success' ? 'Saved!' :
                                saveStatus === 'error' ? 'Error' : 'Save'}
                    </span>
                </button>
            </div>

            {editor && (
                <BubbleMenu
                    editor={editor}
                    tippyOptions={{ duration: 100 }}
                    className="flex bg-white shadow-lg rounded-md p-1 border border-gray-200"
                >
                    <button
                        onClick={() => editor.chain().focus().toggleBold().run()}
                        className={`p-1 rounded ${editor.isActive('bold') ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
                    >
                        <FaBold className="text-sm" />
                    </button>
                    <button
                        onClick={() => editor.chain().focus().toggleItalic().run()}
                        className={`p-1 rounded ${editor.isActive('italic') ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
                    >
                        <FaItalic className="text-sm" />
                    </button>
                    <button
                        onClick={() => editor.chain().focus().toggleUnderline().run()}
                        className={`p-1 rounded ${editor.isActive('underline') ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
                    >
                        <FaUnderline className="text-sm" />
                    </button>
                    <button
                        onClick={setLink}
                        className={`p-1 rounded ${editor.isActive('link') ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
                    >
                        <FaLink className="text-sm" />
                    </button>
                </BubbleMenu>
            )}

            {editor && (
                <FloatingMenu
                    editor={editor}
                    tippyOptions={{ duration: 100 }}
                    className="flex bg-white shadow-lg rounded-md p-1 border border-gray-200"
                >
                    <button
                        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                        className={`p-1 rounded ${editor.isActive('heading', { level: 1 }) ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
                    >
                        H1
                    </button>
                    <button
                        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                        className={`p-1 rounded ${editor.isActive('heading', { level: 2 }) ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
                    >
                        H2
                    </button>
                    <button
                        onClick={() => editor.chain().focus().toggleBulletList().run()}
                        className={`p-1 rounded ${editor.isActive('bulletList') ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
                    >
                        <FaListUl className="text-sm" />
                    </button>
                    <button
                        onClick={() => editor.chain().focus().toggleBlockquote().run()}
                        className={`p-1 rounded ${editor.isActive('blockquote') ? 'bg-gray-200' : 'hover:bg-gray-100'}`}
                    >
                        <FaQuoteLeft className="text-sm" />
                    </button>
                </FloatingMenu>
            )}

            {showLinkMenu && (
                <div className="absolute bg-white shadow-lg rounded-md p-2 border border-gray-200 z-20">
                    <input
                        type="text"
                        value={linkUrl}
                        onChange={(e) => setLinkUrl(e.target.value)}
                        placeholder="Enter URL"
                        className="border rounded px-2 py-1 mb-2 w-full"
                        autoFocus
                        onKeyDown={(e) => e.key === 'Enter' && handleLink()}
                    />
                    <div className="flex justify-end gap-2">
                        <button
                            onClick={() => setShowLinkMenu(false)}
                            className="px-2 py-1 text-sm rounded hover:bg-gray-100"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleLink}
                            className="px-2 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600"
                        >
                            Apply
                        </button>
                    </div>
                </div>
            )}

            <div className="p-4 min-h-[500px]">
                <EditorContent editor={editor} className="prose max-w-none focus:outline-none" />
            </div>

            <div className="flex justify-between items-center p-2 border-t bg-gray-50 text-sm text-gray-500">
                <div>
                    {wordCount} words • {charCount} characters
                </div>
                <div>
                    {editor.storage.characterCount.characters()}/{editor.storage.characterCount.limit()} characters
                </div>
            </div>

            {isLoading && (
                <div className="absolute inset-0 bg-black bg-opacity-10 flex items-center justify-center z-30">
                    <div className="bg-white p-4 rounded shadow-lg flex items-center gap-2">
                        <FaSpinner className="animate-spin" />
                        Uploading image...
                    </div>
                </div>
            )}
        </div>
    );
};

export default RichTextEditor;