import type { Metadata } from "next";
import { Poppins, Inter, Poltawski_Nowy } from "next/font/google";
import "../styles/globals.css";
import ThemeToggleButton from "@/components/global/ThemeToggle";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ToastContainer } from "react-toastify";
import { LoadingProvider } from "@/lib/contexts/LoadingContext";
import { NotificationProvider, ThemeProvider, UserProvider } from "@/lib/contexts";

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poltawskiNowy = Poltawski_Nowy({
  variable: "--font-poltawskiNowy",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "IBLOG - Modern Blog Platform",
    template: "%s | IBLOG"
  },
  description: "Discover SEO-friendly articles on technology, web development, and modern blogging solutions. IBLOG helps creators publish optimized content.",
  keywords: ["blog", "SEO", "Next.js blog", "modern blogging", "content creation", "web development"],
  authors: [{ name: "Your Name", url: "https://yourwebsite.com" }],
  creator: "Your Name",
  publisher: "Your Company",
  metadataBase: new URL("https://yourblogdomain.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  openGraph: {
    title: "IBLOG - Modern Blog Platform",
    description: "SEO-friendly blog platform built with Next.js",
    url: "https://yourblogdomain.com",
    siteName: "IBLOG",
    images: [
      {
        url: "https://yourblogdomain.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "IBLOG Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IBLOG - Modern Blog Platform",
    description: "SEO-friendly blog platform built with Next.js",
    images: ["https://yourblogdomain.com/twitter-image.jpg"],
    creator: "@yourtwitterhandle",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable} ${poltawskiNowy.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Viewport meta should be in head (not body) */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, viewport-fit=cover" />

        {/* Structured Data for better rich snippets */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "IBLOG",
            "url": "https://yourblogdomain.com",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://yourblogdomain.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })}
        </script>
      </head>
      <body className="antialiased min-h-dvh bg-background-light dark:bg-background-dark transition-colors duration-500 text-black">
        <LoadingProvider>
          <ThemeProvider>
            <ThemeToggleButton />
            <UserProvider>
              <NotificationProvider>
                <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!}>
                  <ToastContainer />
                  {children}
                </GoogleOAuthProvider>
              </NotificationProvider>
            </UserProvider>
          </ThemeProvider>
        </LoadingProvider>
      </body>
    </html>
  );
}