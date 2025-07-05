'use client';
import { useState } from "react";
import { FiBell, FiCheckCircle, FiInfo, FiAlertCircle, FiTrash2 } from "react-icons/fi";
import OutlineBtn from "@/components/OutlineBtn";

type Notification = {
    id: number;
    title: string;
    message: string;
    type: "info" | "success" | "alert";
    read: boolean;
    time: string;
};

const initialNotifications: Notification[] = [
    {
        id: 1,
        title: "Welcome!",
        message: "Thanks for joining our platform.",
        type: "success",
        read: false,
        time: "Just now",
    },
    {
        id: 2,
        title: "Update Available",
        message: "A new version of the app is available.",
        type: "info",
        read: false,
        time: "5 min ago",
    },
    {
        id: 3,
        title: "Account Alert",
        message: "Unusual login activity detected.",
        type: "alert",
        read: true,
        time: "1 day ago",
    },
];

const subTabs = ["All", "Unread"];

export default function NotificationPage() {
    const [notifications, setNotifications] = useState(initialNotifications);
    const [selectedTab, setSelectedTab] = useState<"All" | "Unread">("All");

    const markAsRead = (id: number) => {
        setNotifications((prev) =>
            prev.map((n) =>
                n.id === id ? { ...n, read: true } : n
            )
        );
    };

    const deleteNotification = (id: number) => {
        setNotifications((prev) => prev.filter((n) => n.id !== id));
    };

    const getIcon = (type: Notification["type"]) => {
        switch (type) {
            case "success":
                return <FiCheckCircle className="text-green-500" size={24} />;
            case "info":
                return <FiInfo className="text-blue-500" size={24} />;
            case "alert":
                return <FiAlertCircle className="text-red-500" size={24} />;
            default:
                return <FiBell size={24} />;
        }
    };

    const filteredNotifications =
        selectedTab === "All"
            ? notifications
            : notifications.filter((n) => !n.read);

    return (
        <div className="w-full md:w-[50dvw] mx-auto px-4 py-6 relative">
            <h1 className="text-3xl text-neutral-900 dark:text-white font-inter font-bold hover:text-purple-600 transition-colors duration-300 cursor-pointer mb-4 flex items-center gap-2">
                <FiBell /> Notifications
            </h1>

            {/* Sub Tab Navigation */}
            <div className="flex mb-6">
                <div className="flex space-x-6 overflow-x-auto pb-2 no-scrollbar">
                    {subTabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setSelectedTab(tab as "All" | "Unread")}
                            className={`relative px-1 py-2 text-sm font-medium transition-colors ${selectedTab === tab
                                    ? "text-black dark:text-white"
                                    : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                                }`}
                        >
                            {tab}
                            {selectedTab === tab && (
                                <span className="absolute left-0 bottom-0 h-0.5 w-full bg-gradient-to-r from-pink-500 to-purple-600 rounded-full" />
                            )}
                        </button>
                    ))}
                </div>
            </div>

            {/* Notification List */}
            <div className="space-y-4">
                {filteredNotifications.length === 0 && (
                    <div className="text-center text-gray-400 py-12">
                        <FiBell size={48} className="mx-auto mb-2" />
                        No notifications.
                    </div>
                )}
                {filteredNotifications.map((n) => (
                    <div
                        key={n.id}
                        className={`flex items-start gap-4 p-4 rounded-lg shadow transition-all border group
                            ${n.read ? "bg-gray-50 border-gray-200" : "bg-gradient-to-r from-purple-50 via-pink-50 to-purple-100 border-pink-200"}
                        `}
                    >
                        <div className="mt-1">{getIcon(n.type)}</div>
                        <div className="flex-1">
                            <div className="flex items-center justify-between">
                                <h2 className={`font-semibold ${n.read ? "text-gray-500" : "text-pink-600"}`}>{n.title}</h2>
                                <span className="text-xs text-gray-400">{n.time}</span>
                            </div>
                            <p className={`text-sm ${n.read ? "text-gray-400" : "text-gray-700"}`}>{n.message}</p>
                            {!n.read && (
                                <button
                                    onClick={() => markAsRead(n.id)}
                                    className="mt-2 text-xs text-blue-600 hover:underline"
                                >
                                    Mark as read
                                </button>
                            )}
                        </div>
                        <button
                            onClick={() => deleteNotification(n.id)}
                            className="ml-2 text-gray-400 hover:text-red-500 transition-colors"
                            title="Delete notification"
                        >
                            <FiTrash2 size={18} />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}