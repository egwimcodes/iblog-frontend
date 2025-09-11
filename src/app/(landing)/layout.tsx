"use client"
import { BackgroundBeams } from "@/components/landing/background-beams";
import { LandingNavbar } from "@/components/landing/LandingNavBar";
import Footer from "@/components/main/Footer";
import BallsLoader from "@/components/Loading/BallsLoader";


export default function LandingLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (<>
        <BallsLoader color="#FA12D3FF"/>

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