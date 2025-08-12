"use client"
import { BackgroundBeams } from "@/components/ui/background-beams";
import { LandingNavbar } from "@/components/landing-components/LandingNavBar";
import Footer from "@/components/ui/Footer";
import { useAppSelector } from "@/lib/redux/redux-hooks";
import BallsLoader from "@/components/ui/BallsLoader";


export default function LandingLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const showLoader = useAppSelector((state) => state.ui.showLoader);
    return (<>
        <BallsLoader color="#FA12D3FF" show={showLoader} />

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