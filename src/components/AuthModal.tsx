"use client";

import { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/Button";

import { FaGithub } from "react-icons/fa";

type AuthModalProps = {
    isOpen: boolean;
    onClose: () => void;
    initialView?: "login" | "register" | "reset";
};

export function AuthModal({ isOpen, onClose, initialView = "login" }: AuthModalProps) {
    const [currentView, setCurrentView] = useState(initialView);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState<{ text: string; type: "success" | "error" } | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setMessage(null);

        try {
            await new Promise(resolve => setTimeout(resolve, 1000));

            if (currentView === "login") {
                setMessage({ text: "Login successful!", type: "success" });
                setTimeout(onClose, 1500);
            } else if (currentView === "register") {
                setMessage({ text: "Registration successful!", type: "success" });
                setCurrentView("login");
            } else {
                setMessage({ text: "Password reset link sent!", type: "success" });
                setCurrentView("login");
            }
        } catch {
            setMessage({ text: "An error occurred. Please try again.", type: "error" });
        } finally {
            setIsLoading(false);
        }
    };

    const handleGitHubSignIn = async () => {
        setIsLoading(true);
        try {
            // Simulate GitHub sign-in process
        } catch {
            setMessage({ text: "GitHub sign in failed.", type: "error" });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Transition appear show={isOpen} as="div">
            <Dialog as="div" className="relative z-50" onClose={onClose}>
                <Transition.Child
                    as="div"
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
                            as="div"
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-background p-6 text-left align-middle shadow-xl transition-all border border-border">
                                <div className="flex justify-between items-center mb-4">
                                    <Dialog.Title as="h3" className="text-2xl font-bold text-foreground">
                                        {currentView === "login" && "Welcome back"}
                                        {currentView === "register" && "Create an account"}
                                        {currentView === "reset" && "Reset your password"}
                                    </Dialog.Title>
                                    <button
                                        onClick={onClose}
                                        className="rounded-full p-1 hover:bg-muted transition-colors"
                                    >
                                        <X className="h-5 w-5" />
                                    </button>
                                </div>

                                {message && (
                                    <div
                                        className={`mb-4 p-3 rounded-md ${message.type === "success"
                                                ? "bg-green-500/10 text-green-500"
                                                : "bg-red-500/10 text-red-500"
                                            }`}
                                    >
                                        {message.text}
                                    </div>
                                )}

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    {currentView === "register" && (
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-1">
                                                Full Name
                                            </label>
                                            <input
                                                id="name"
                                                type="text"
                                                required
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                    )}

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-1">
                                            Email Address
                                        </label>
                                        <input
                                            id="email"
                                            type="email"
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
                                            placeholder="you@example.com"
                                        />
                                    </div>

                                    {currentView !== "reset" && (
                                        <div>
                                            <label htmlFor="password" className="block text-sm font-medium text-muted-foreground mb-1">
                                                Password
                                            </label>
                                            <input
                                                id="password"
                                                type="password"
                                                required
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
                                                placeholder="••••••••"
                                            />
                                        </div>
                                    )}

                                    {currentView === "login" && (
                                        <div className="flex justify-end">
                                            <button
                                                type="button"
                                                onClick={() => setCurrentView("reset")}
                                                className="text-sm text-primary hover:underline"
                                            >
                                                Forgot password?
                                            </button>
                                        </div>
                                    )}

                                    <Button
                                        type="submit"
                                        variant="primary"
                                        className="w-full mt-6"
                                        disabled={isLoading}
                                    >
                                        {isLoading ? "Processing..." :
                                            currentView === "login" ? "Sign In" :
                                                currentView === "register" ? "Sign Up" : "Send Reset Link"}
                                    </Button>
                                </form>

                                <div className="my-4 text-center text-muted-foreground text-sm relative">
                                    <span className="bg-background px-2 relative z-10">OR</span>
                                    <div className="absolute left-0 top-1/2 w-full h-px bg-border z-0" />
                                </div>

                                <Button
                                    variant="outline"
                                    className="w-full flex items-center justify-center gap-2"
                                    onClick={handleGitHubSignIn}
                                    disabled={isLoading}
                                >
                                    <FaGithub className="h-5 w-5" />
                                    Continue with GitHub
                                </Button>

                                <div className="mt-4 text-center text-sm text-muted-foreground">
                                    {currentView === "login" && (
                                        <>
                                            Don't have an account?{' '}
                                            <button onClick={() => setCurrentView("register")} className="text-primary hover:underline">
                                                Sign up
                                            </button>
                                        </>
                                    )}
                                    {currentView === "register" && (
                                        <>
                                            Already have an account?{' '}
                                            <button onClick={() => setCurrentView("login")} className="text-primary hover:underline">
                                                Sign in
                                            </button>
                                        </>
                                    )}
                                    {currentView === "reset" && (
                                        <>
                                            Remember your password?{' '}
                                            <button onClick={() => setCurrentView("login")} className="text-primary hover:underline">
                                                Sign in
                                            </button>
                                        </>
                                    )}
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
}
