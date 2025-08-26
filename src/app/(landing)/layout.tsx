"use client"
import { BackgroundBeams } from "@/components/landing/background-beams";
import { LandingNavbar } from "@/components/landing/LandingNavBar";
import Footer from "@/components/(main)/Footer";
import { useAppSelector } from "@/lib/redux/store/store-hooks";
import BallsLoader from "@/components/global/BallsLoader";


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