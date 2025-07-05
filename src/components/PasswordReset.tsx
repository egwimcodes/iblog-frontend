'use client';
import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/Button";

type ResetPasswordModalProps = {
    isOpen: boolean;
    onClose: () => void;
    showOldPasswordField?: boolean; // Optional prop to show old password field
};

export function ResetPasswordModal({
    isOpen,
    onClose,
    showOldPasswordField = false
}: ResetPasswordModalProps) {
    const [currentStep, setCurrentStep] = useState<"request" | "reset">("request");
    const [email, setEmail] = useState("");
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState<{ text: string; type: "success" | "error" } | null>(null);

    const handleRequestSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setMessage(null);

        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            setMessage({ text: "Password reset link sent to your email!", type: "success" });
            setCurrentStep("reset");
        } catch {
            setMessage({ text: "Failed to send reset link. Please try again.", type: "error" });
        } finally {
            setIsLoading(false);
        }
    };

    const handleResetSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setMessage(null);

        // Validate passwords match
        if (newPassword !== confirmPassword) {
            setMessage({ text: "Passwords don't match!", type: "error" });
            setIsLoading(false);
            return;
        }

        // Add your password validation rules here if needed
        if (newPassword.length < 8) {
            setMessage({ text: "Password must be at least 8 characters", type: "error" });
            setIsLoading(false);
            return;
        }

        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            setMessage({ text: "Password updated successfully!", type: "success" });
            setTimeout(onClose, 1500); // Close modal after success
        } catch {
            setMessage({ text: "Failed to update password. Please try again.", type: "error" });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={onClose}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white dark:bg-background-dark p-6 text-left align-middle shadow-xl transition-all border border-background-light dark:border-background-dark">
                                <div className="flex justify-between items-center mb-4">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 bg-clip-text text-transparent"
                                    >
                                        {currentStep === "request" ? "Reset Password" : "Set New Password"}
                                    </Dialog.Title>
                                    <button
                                        onClick={onClose}
                                        className="rounded-full p-1 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-500 dark:text-gray-400"
                                    >
                                        <X className="h-5 w-5" />
                                    </button>
                                </div>

                                {message && (
                                    <div
                                        className={`mb-4 p-3 rounded-md ${message.type === "success"
                                                ? "bg-green-500/10 text-green-600 dark:text-green-400"
                                                : "bg-red-500/10 text-red-600 dark:text-red-400"
                                            }`}
                                    >
                                        {message.text}
                                    </div>
                                )}

                                {currentStep === "request" ? (
                                    <form onSubmit={handleRequestSubmit} className="space-y-4">
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">
                                                Email Address
                                            </label>
                                            <input
                                                id="email"
                                                type="email"
                                                required
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-background-dark text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                                placeholder="you@example.com"
                                            />
                                            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                                                We'll send you a link to reset your password
                                            </p>
                                        </div>

                                        <Button
                                            type="submit"
                                            variant="primary"
                                            className="w-full mt-6"
                                            disabled={isLoading}
                                        >
                                            {isLoading ? (
                                                <span className="flex items-center justify-center">
                                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                    </svg>
                                                    Sending...
                                                </span>
                                            ) : (
                                                "Send Reset Link"
                                            )}
                                        </Button>
                                    </form>
                                ) : (
                                    <form onSubmit={handleResetSubmit} className="space-y-4">
                                        {showOldPasswordField && (
                                            <div>
                                                <label htmlFor="oldPassword" className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">
                                                    Current Password
                                                </label>
                                                <input
                                                    id="oldPassword"
                                                    type="password"
                                                    required={showOldPasswordField}
                                                    value={oldPassword}
                                                    onChange={(e) => setOldPassword(e.target.value)}
                                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-background-dark text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                                    placeholder="••••••••"
                                                />
                                            </div>
                                        )}

                                        <div>
                                            <label htmlFor="newPassword" className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">
                                                New Password
                                            </label>
                                            <input
                                                id="newPassword"
                                                type="password"
                                                required
                                                value={newPassword}
                                                onChange={(e) => setNewPassword(e.target.value)}
                                                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-background-dark text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                                placeholder="••••••••"
                                            />
                                            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                                                Must be at least 8 characters
                                            </p>
                                        </div>

                                        <div>
                                            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">
                                                Confirm New Password
                                            </label>
                                            <input
                                                id="confirmPassword"
                                                type="password"
                                                required
                                                value={confirmPassword}
                                                onChange={(e) => setConfirmPassword(e.target.value)}
                                                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-background-dark text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                                placeholder="••••••••"
                                            />
                                        </div>

                                        <Button
                                            type="submit"
                                            variant="primary"
                                            className="w-full mt-6"
                                            disabled={isLoading}
                                        >
                                            {isLoading ? (
                                                <span className="flex items-center justify-center">
                                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                    </svg>
                                                    Updating...
                                                </span>
                                            ) : (
                                                "Update Password"
                                            )}
                                        </Button>
                                    </form>
                                )}
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
}