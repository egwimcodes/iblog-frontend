import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Poppins, Inter, Poltawski_Nowy } from "next/font/google";
import "../styles/globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: "100",
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
  title: "IBLOG",
  description: "SEO friendly Modern Blog",
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
      <body className="antialiased min-h-dvh bg-background-light dark:bg-background-dark transition-colors duration-300">
        {/* ✅ Move ThemeProvider INSIDE body */}
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
