import type { Metadata } from "next";
import { Poltawski_Nowy, Poppins, Inter } from "next/font/google";
import "./globals.css";

const poltawskiNowy = Poltawski_Nowy({
  weight: "700",
  subsets: ["latin"]
});

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "iBlog",
  description: "iBlog a blogging platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-poppins dark:bg-dark-background dark:text-dark-foreground ${inter.className} ${poltawskiNowy.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
