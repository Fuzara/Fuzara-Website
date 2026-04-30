"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPastHero, setIsPastHero] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;

      // isScrolled for small scroll (navbar shrink)
      setIsScrolled(scrollY > 50);

      // isPastHero for theme switch (after 100vh)
      setIsPastHero(scrollY > viewportHeight - 100);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isDarkTheme = isPastHero || pathname !== "/";
  const textColor = isDarkTheme ? "text-white" : "text-[#0F172A]";
  const borderColor = isDarkTheme ? "border-white/10" : "border-[#0F172A]/10";
  const bgColor = isScrolled 
    ? (isDarkTheme ? "bg-black/60 backdrop-blur-xl" : "bg-white/60 backdrop-blur-xl") 
    : "bg-transparent";

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out ${bgColor} ${isScrolled ? "py-3 border-b " + borderColor : "py-8"}`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-all duration-500 group">
          <motion.div
            animate={{ 
              scale: isScrolled ? 0.85 : 1.1,
            }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <Image 
              src={isDarkTheme ? "/logo-light.png" : "/logo-dark.png"}
              alt="Fuzara Technologies Logo" 
              width={180} 
              height={52} 
              className="object-contain h-10 w-auto transition-all duration-500"
              priority
            />
          </motion.div>
        </Link>
        <nav className={`hidden md:flex items-center gap-8 text-sm font-bold tracking-widest uppercase font-sans ${textColor}`}>
          <Link href="/software" className="hover:text-[#00C1A3] transition-colors relative group">
            Software
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00C1A3] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/drones" className="hover:text-[#00C1A3] transition-colors relative group">
            Drones
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00C1A3] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/media" className="hover:text-[#00C1A3] transition-colors relative group">
            Media
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00C1A3] transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link href="/contact" className={`border ${isDarkTheme ? "border-[#00C1A3] text-[#00C1A3]" : "border-[#0F172A] text-[#0F172A]"} hover:bg-[#00C1A3] hover:text-[#0F172A] hover:border-[#00C1A3] px-6 py-2.5 rounded-full transition-all duration-500 font-bold shadow-[0_0_15px_rgba(0,193,163,0.1)] hover:shadow-[0_0_25px_rgba(0,193,163,0.5)] transform hover:-translate-y-0.5 active:translate-y-0`}>
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
