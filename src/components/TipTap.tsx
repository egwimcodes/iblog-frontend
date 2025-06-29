'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import CodeBlock from '@tiptap/extension-code-block';
import Blockquote from '@tiptap/extension-blockquote';
import React from 'react';
import { Editor } from '@tiptap/core';

interface Props {
    onChange: (content: string) => void;
}

export default function TiptapEditor({ onChange }: Props) {
    const editor = useEditor({
        extensions: [StarterKit, Image, CodeBlock, Blockquote],
        content: '<p>Start writing your article...</p>',
        editorProps: {
            attributes: {
                class: 'prose prose-lg max-w-full focus:outline-none',
            },
        },
        onUpdate: ({ editor }) => {
            onChange(editor.getHTML());
        },
    });

    if (!editor) return null;

    const addImage = () => {
        const url = prompt('Enter Image URL:');
        if (url) {
            editor.chain().focus().setImage({ src: url }).run();
        }
    };

    return (
        <div className="w-full border rounded-lg shadow-sm bg-white">
            {/* Toolbar */}
            <div className="flex flex-wrap gap-2 border-b p-3 bg-gray-50 rounded-t-lg">
                <EditorButton editor={editor} command="toggleBold" label="Bold" />
                <EditorButton editor={editor} command="toggleItalic" label="Italic" />
                <EditorButton editor={editor} command="toggleCodeBlock" label="Code" />
                <EditorButton editor={editor} command="toggleBlockquote" label="Quote" />
                <EditorButton editor={editor} command="toggleHeading" label="H1" level={1} />
                <EditorButton editor={editor} command="toggleHeading" label="H2" level={2} />
                <button
                    onClick={addImage}
                    className="px-3 py-1 bg-indigo-600 text-white rounded text-sm hover:bg-indigo-700"
                >
                    Add Image
                </button>
            </div>

            {/* Content */}
            <div className="p-4">
                <EditorContent editor={editor} />
            </div>
        </div>
    );
}

type ButtonProps = {
    editor: Editor;
    command: string;
    label: string;
    level?: number;
};

function EditorButton({ editor, command, label, level }: ButtonProps) {
    const isActive = () => {
        if (command === 'toggleHeading' && level) {
            return editor.isActive('heading', { level });
        }
        return editor.isActive(command.replace('toggle', '').toLowerCase());
    };

    const handleClick = () => {
        if (command === 'toggleHeading' && level) {
            editor.chain().focus().toggleHeading({ level }).run();
        } else {
            (editor.chain().focus() as any)[command]().run();
        }
    };

    return (
        <button
            onClick={handleClick}
            className={`px-3 py-1 rounded text-sm ${isActive()
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-200 text-black hover:bg-gray-300'
                }`}
        >
            {label}
        </button>
    );
}
