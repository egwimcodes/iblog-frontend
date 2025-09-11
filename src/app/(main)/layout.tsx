import Footer from "@/components/main/Footer";
import { BackgroundBeams } from "@/components/landing/background-beams";


// export const metadata: Metadata = {
//     title: {
//         default: "IBLOG - Modern Blog Platform",
//         template: "%s | IBLOG"
//     },
//     description: "Discover SEO-friendly articles on technology, web development, and modern blogging solutions. IBLOG helps creators publish optimized content.",
//     keywords: ["blog", "SEO", "Next.js blog", "modern blogging", "content creation", "web development"],
//     authors: [{ name: "Your Name", url: "https://yourwebsite.com" }],
//     metadataBase: new URL("https://yourblogdomain.com"),
//     openGraph: {
//         type: "website",
//         locale: "en_US",
//         url: "https://yourblogdomain.com",
//         siteName: "IBLOG",
//         images: [
//             {
//                 url: "/og-image.jpg",
//                 width: 1200,
//                 height: 630,
//                 alt: "IBLOG Open Graph Image",
//             },
//         ],
//     },
//     twitter: {
//         card: "summary_large_image",
//         creator: "@yourtwitterhandle",
//     },
//     robots: {
//         index: true,
//         follow: true,
//         googleBot: {
//             index: true,
//             follow: true,
//             "max-image-preview": "large",
//         },
//     },
//     icons: {
//         icon: "/favicon.ico",
//         shortcut: "/favicon-16x16.png",
//         apple: "/apple-touch-icon.png",
//     },
//     verification: {
//         google: "your-google-verification-code",
//     },
// };

export default function MainLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            {children}

            <div className="relative min-h-screen w-full overflow-hidden ">
                <main className=" mb-10">
                    {children}
                </main>
                <Footer />
                <BackgroundBeams />
            </div>
        </>
    );
}