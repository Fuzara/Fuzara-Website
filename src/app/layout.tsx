import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Jost, Roboto } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
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
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} ${jost.variable} ${roboto.variable} antialiased bg-black text-white min-h-screen flex flex-col`}
      >
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
          <div className="container mx-auto px-6 h-20 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Image 
                src="/logo-light.png" 
                alt="Fuzara Technologies Logo" 
                width={140} 
                height={40} 
                className="object-contain h-10 w-auto"
                priority
              />
            </Link>
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wider uppercase font-sans">
              <Link href="/software" className="hover:text-teal-400 transition-colors">Software</Link>
              <Link href="/drones" className="hover:text-teal-400 transition-colors">Drones</Link>
              <Link href="/media" className="hover:text-teal-400 transition-colors">Media</Link>
              <Link href="/contact" className="border border-[#00C1A3] text-[#00C1A3] hover:bg-[#00C1A3] hover:text-[#0F172A] px-5 py-2 rounded-full transition-all duration-300 font-semibold shadow-[0_0_10px_rgba(0,193,163,0.1)] hover:shadow-[0_0_20px_rgba(0,193,163,0.4)]">Contact</Link>
            </nav>
          </div>
        </header>

        <main className="relative z-10 flex-grow">{children}</main>

        <footer className="bg-[#0b1120] border-t border-white/10 py-12 z-20 relative">
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
            <nav className="flex gap-6 text-sm font-medium text-white/60 uppercase tracking-wider">
              <Link href="/software" className="hover:text-white transition-colors">Software</Link>
              <Link href="/drones" className="hover:text-white transition-colors">Drones</Link>
              <Link href="/media" className="hover:text-white transition-colors">Media</Link>
              <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}
