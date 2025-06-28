'use client';
import OutlineBtn from "@/components/OutlineBtn";
import Image from "next/image";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

export default function Settings() {
    const [selected, setSelected] = useState('Account');
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        email: 'annabelly@gmail.com',
        name: 'Ana Belly',
        avatar: '/images/user-avatar.jpg'
    });

    const topics = ['Account', 'Notification', 'Security'];

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Add your save logic here
        setIsEditModalOpen(false);
    };

    return (
        <div className="w-full md:w-[50dvw] mx-auto px-4 py-6 relative">
            <h1 className="text-3xl text-neutral-900 dark:text-white font-inter font-bold hover:text-purple-600 transition-colors duration-300 cursor-pointer mb-4">Settings</h1>

            {/* Tab Navigation */}
            <div className="flex mb-6">
                <div className="flex space-x-6 overflow-x-auto pb-2 no-scrollbar">
                    {topics.map((topic) => (
                        <button
                            key={topic}
                            onClick={() => setSelected(topic)}
                            className={`relative px-1 py-2 text-sm font-medium transition-colors ${selected === topic
                                ? 'text-black dark:text-white'
                                : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                                }`}
                        >
                            {topic}
                            {selected === topic && (
                                <span className="absolute left-0 bottom-0 h-0.5 w-full bg-gradient-to-r from-pink-500 to-purple-600 rounded-full" />
                            )}
                        </button>
                    ))}
                </div>
            </div>

            {/* Account Settings */}
            {selected === 'Account' && (
                <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-700">
                        <h4 className="font-medium">Email</h4>
                        <h4 className="text-gray-600 dark:text-gray-300">{formData.email}</h4>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-700">
                        <h4 className="font-medium">Profile</h4>
                        <div className="flex items-center gap-3">
                            <span className="text-gray-600 dark:text-gray-300">{formData.name}</span>
                            <div className="w-8 h-8 rounded-full overflow-hidden">
                                <Image
                                    src={formData.avatar}
                                    alt="User avatar"
                                    width={34}
                                    height={34}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end pt-4">
                        <div className="h-8 w-36">
                            <OutlineBtn
                                label="Edit"
                                onClick={() => setIsEditModalOpen(true)}
                            />
                        </div>
                    </div>
                </div>
            )}

            {/* Edit Modal */}
            {isEditModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 w-full max-w-md relative">
                        <button
                            onClick={() => setIsEditModalOpen(false)}
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100"
                        >
                            <FaTimes className="w-5 h-5" />
                        </button>

                        <h2 className="text-xl font-bold mb-4 dark:text-white">Edit Profile</h2>

                        <form onSubmit={handleSubmit}>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium mb-1 dark:text-gray-300">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-1 dark:text-gray-300">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium mb-1 dark:text-gray-300">Profile Picture</label>
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full overflow-hidden">
                                            <Image
                                                src={formData.avatar}
                                                alt="Current avatar"
                                                width={48}
                                                height={48}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <input
                                                type="file"
                                                id="avatarUpload"
                                                accept="image/*"
                                                onChange={(e) => {
                                                    if (e.target.files && e.target.files[0]) {
                                                        const reader = new FileReader();
                                                        reader.onload = function (event) {
                                                            const target = event.target as FileReader | null;
                                                            if (target?.result) {
                                                                setFormData(prev => ({
                                                                    ...prev,
                                                                    avatar: target.result as string
                                                                }));
                                                            }
                                                        };
                                                        reader.readAsDataURL(e.target.files[0]);
                                                    }
                                                }}
                                                className="hidden"
                                            />
                                            <label
                                                htmlFor="avatarUpload"
                                                className="relative inline-flex items-center px-4 py-1 text-sm font-medium text-white bg-gray-400 dark:bg-gray-500 cursor-pointer rounded-md transition duration-300 group"
                                            >

                                                <span className="relative flex items-center gap-2 px-3 py-1 rounded-md">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="w-4 h-4"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke="currentColor"
                                                        strokeWidth={2}
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M12 12V4m0 0l-4 4m4-4l4 4"
                                                        />
                                                    </svg>
                                                    Choose File
                                                </span>
                                            </label>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 flex justify-end space-x-3">
                                <button
                                    type="button"
                                    onClick={() => setIsEditModalOpen(false)}
                                    className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-600 rounded-md hover:bg-gray-200 dark:hover:bg-gray-500"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-pink-500 rounded-md hover:from-purple-700 hover:to-pink-600"
                                >
                                    Save Changes
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
