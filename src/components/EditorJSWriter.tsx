import React, { useEffect, useRef } from "react";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import ImageTool from "@editorjs/image";

interface EditorJSWriterProps {
    data?: any;
    onChange?: (data: any) => void;
    readOnly?: boolean;
}

const EditorJSWriter: React.FC<EditorJSWriterProps> = ({ data, onChange, readOnly }) => {
    const ejInstance = useRef<EditorJS | null>(null);
    const holder = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!holder.current || ejInstance.current) return;

        ejInstance.current = new EditorJS({
            holder: holder.current,
            readOnly: !!readOnly,
            data: data || {},
            autofocus: true,
            placeholder: "Tell your story...",
            tools: {
                header: Header,
                list: List,
                image: {
                    class: ImageTool,
                    config: {
                        endpoints: {
                            byFile: "/api/upload",
                            byUrl: "/api/fetchUrl",
                        },
                    },
                },
            },
            onChange: async () => {
                const outputData = await ejInstance.current?.save();
                onChange?.(outputData);
            },
        });

        return () => {
            if (ejInstance.current && typeof ejInstance.current.destroy === "function") {
                Promise.resolve(ejInstance.current.destroy()).catch(() => { });
                ejInstance.current = null;
            }
        };
    }, [readOnly]);
    
    return (
        <div className="w-full max-w-2xl mx-auto py-8">
            <input
                type="text"
                placeholder="Title"
                className="w-full text-4xl font-bold border-0 outline-none bg-transparent mb-6 placeholder-gray-400 focus:ring-0"
                maxLength={120}
                disabled={readOnly}
            />
            <div
                ref={holder}
                className="input-block min-h-[400px] bg-transparent focus:outline-none "
            />
            
        </div>
    );
};

export default EditorJSWriter;
