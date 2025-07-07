import { BackgroundBeams } from "@/components/ui/background-beams";
import { LandingNavbar } from "@/components/landing-components/LandingNavBar";
import Footer from "@/components/Footer";


export default function LandingLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <div className="relative min-h-screen w-full bg-background text-foreground overflow-hidden ">
                <LandingNavbar />
                <main className="mb-10">
                    {children}
                </main>
                <Footer />
                <BackgroundBeams />
            </div>

        </>
    );
}