'use client';
import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Eye, EyeOff, X } from "lucide-react";
import { Button } from "@/components/global/Button";
import GoogleLoginButton from "./GoogleLoginButton";


type AuthModalProps = {
  isOpen: boolean;
  onClose: () => void;
  initialView?: "login" | "register" | "reset" | "interests" | "confirm-email";
};

export function AuthModal({ isOpen, onClose, initialView = "login" }: AuthModalProps) {
  const [currentView, setCurrentView] = useState(initialView);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); // 👈 confirm password
  const [showPassword, setShowPassword] = useState(false); // 👈 toggle visibility
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // 👈 toggle visibility
  const [name, setName] = useState("");
  const [interest, setInterest] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{ text: string; type: "success" | "error" } | null>(null);


  const interests = [
    "Programmer",
    "Gamer",
    "Content Creator",
    "Designer",
    "Entrepreneur",
    "Student",
    "Other"
  ];

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
        setCurrentView("interests");
      } else if (currentView === "interests") {
        setCurrentView("confirm-email");
      } else if (currentView === "confirm-email") {
        setMessage({ text: "Email confirmed! Welcome to our community.", type: "success" });
        setTimeout(onClose, 1500);
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

  const renderForm = () => {
    switch (currentView) {
      case "login":
        return (
          <>
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
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">
                Password
              </label>
              <input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-background-dark text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="••••••••"
              />
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => setCurrentView("reset")}
                className="text-sm text-purple-600 dark:text-purple-400 hover:underline"
              >
                Forgot password?
              </button>
            </div>
          </>
        );

      case "register":
        return (
          <>
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-background-dark text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="John Doe"
              />
            </div>

            {/* Email */}
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
            </div>

            {/* Password with toggle */}
            <div className="relative">
              <label htmlFor="password" className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">
                Password
              </label>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 pr-10 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-background-dark text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-9 text-gray-500 dark:text-gray-400"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {/* Confirm Password with toggle */}
            <div className="relative">
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-2 pr-10 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-background-dark text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-9 text-gray-500 dark:text-gray-400"
              >
                {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </>
        );

      case "interests":
        return (
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-center text-gray-800 dark:text-gray-200">
              Tell us about yourself
            </h4>
            <div>
              <label htmlFor="interest" className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">
                I am a...
              </label>
              <select
                id="interest"
                required
                value={interest}
                onChange={(e) => setInterest(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-background-dark text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="">Select an option</option>
                {interests.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
              This helps us personalize your experience
            </p>
          </div>
        );

      case "confirm-email":
        return (
          <div className="space-y-4 text-center">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 dark:bg-green-900/30">
              <svg
                className="h-6 w-6 text-green-600 dark:text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200">
              Confirm your email address
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              We&apos;ve sent a confirmation link to <span className="font-medium">{email}</span>.
              Please check your inbox and click the link to verify your account.
            </p>
            <div className="pt-2">
              <button
                type="button"
                className="text-sm text-purple-600 dark:text-purple-400 hover:underline"
                onClick={() => {
                  setMessage({ text: "Confirmation email resent!", type: "success" });
                }}
              >
                Resend confirmation email
              </button>
            </div>
          </div>
        );

      case "reset":
        return (
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
          </div>
        );

      default:
        return null;
    }
  };

  const getButtonText = () => {
    switch (currentView) {
      case "login": return "Sign In";
      case "register": return "Sign Up";
      case "interests": return "Continue";
      case "confirm-email": return "Got it!";
      case "reset": return "Send Reset Link";
      default: return "Continue";
    }
  };


  const renderSocialLogin = () => {
    if (currentView === "login" || currentView === "register") {
      return (
        <>
          <div className="my-4 flex items-center">
            <div className="flex-grow border-t border-gray-300 dark:border-gray-700"></div>
            <span className="mx-4 text-gray-500 dark:text-gray-400 text-sm">OR</span>
            <div className="flex-grow border-t border-gray-300 dark:border-gray-700"></div>
          </div>

          <GoogleLoginButton />
          {/* <Button
            variant="outline"
            className="w-full flex items-center justify-center gap-2 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
            onClick={GoogleOneTap}
          >
            <FcGoogle className="h-5 w-5" />
            Continue with Google
          </Button> */}
        </>
      );
    }
    return null;
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
                    {currentView === "login" && "Welcome back"}
                    {currentView === "register" && "Create an account"}
                    {currentView === "interests" && "Almost there!"}
                    {currentView === "confirm-email" && "Check your email"}
                    {currentView === "reset" && "Reset your password"}
                  </Dialog.Title>
                  {currentView !== "confirm-email" && (
                    <button
                      onClick={onClose}
                      className="rounded-full p-1 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-500 dark:text-gray-400"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  )}
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

                <form onSubmit={handleSubmit} className="space-y-4">
                  {renderForm()}

                  {currentView !== "confirm-email" && (
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
                          Processing...
                        </span>
                      ) : (
                        getButtonText()
                      )}
                    </Button>
                  )}
                </form>

                {renderSocialLogin()}

                {currentView === "login" && (
                  <div className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
                    Don&apos;t have an account?{" "}
                    <button
                      type="button"
                      onClick={() => setCurrentView("register")}
                      className="text-purple-600 dark:text-purple-400 hover:underline"
                    >
                      Sign up
                    </button>
                  </div>
                )}

                {currentView === "register" && (
                  <div className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
                    Already have an account?{" "}
                    <button
                      type="button"
                      onClick={() => setCurrentView("login")}
                      className="text-purple-600 dark:text-purple-400 hover:underline"
                    >
                      Sign in
                    </button>
                  </div>
                )}

                {currentView === "reset" && (
                  <div className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
                    Remember your password?{" "}
                    <button
                      type="button"
                      onClick={() => setCurrentView("login")}
                      className="text-purple-600 dark:text-purple-400 hover:underline"
                    >
                      Sign in
                    </button>
                  </div>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}