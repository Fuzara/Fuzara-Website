import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Jost, Roboto } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fuzara Technologies Ecosystem",
  description: "Innovating the Future, Crafting Excellence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} ${jost.variable} ${roboto.variable} antialiased bg-white text-[#0F172A] min-h-screen flex flex-col`}
      >
        <Navbar />

        <main className="relative z-10 flex-grow">{children}</main>

        <footer className="bg-[#0F172A] border-t border-white/10 py-12 z-20 relative">
          <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col items-center md:items-start gap-4">
              <Link href="/">
                <Image 
                  src="/logo-light.png" 
                  alt="Fuzara Technologies Logo" 
                  width={120} 
                  height={34} 
                  className="object-contain h-8 w-auto opacity-80 hover:opacity-100 transition-opacity"
                />
              </Link>
              <p className="text-white/50 text-sm">
                &copy; {new Date().getFullYear()} Fuzara Technologies. All rights reserved.
              </p>
            </div>
            <nav className="flex gap-6 text-sm font-bold text-white/60 uppercase tracking-widest">
              <Link href="/software" className="hover:text-[#00C1A3] transition-colors">Software</Link>
              <Link href="/drones" className="hover:text-[#00C1A3] transition-colors">Drones</Link>
              <Link href="/media" className="hover:text-[#00C1A3] transition-colors">Media</Link>
              <Link href="/contact" className="hover:text-[#00C1A3] transition-colors">Contact</Link>
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}
