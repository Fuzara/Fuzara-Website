"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

function FadeInSection({ children, className }: { children: React.ReactNode, className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-20% 0px -20% 0px", once: false });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    let animationFrameId: number;
    let targetTime = 0;
    let currentTime = 0;
    const video = videoRef.current;
    
    if (!video) return;

    // Preload & Pause
    video.pause();

    const updateVideo = () => {
      if (video.readyState >= 2 && video.duration) {
        // Calculate scroll percentage
        const scrollPosition = window.scrollY;
        const maxScroll = document.body.scrollHeight - window.innerHeight;
        // Avoid division by zero
        const progress = maxScroll > 0 ? Math.max(0, Math.min(1, scrollPosition / maxScroll)) : 0;
        
        targetTime = progress * (video.duration - 0.1);
        
        // Simple lerp for smoother visual interpolation
        currentTime += (targetTime - currentTime) * 0.1;
        
        // Only set if diff is significant to save performance
        if (Math.abs(video.currentTime - currentTime) > 0.01) {
          video.currentTime = currentTime;
        }
      }
      animationFrameId = requestAnimationFrame(updateVideo);
    };

    animationFrameId = requestAnimationFrame(updateVideo);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className="relative w-full bg-black">
      {/* Sticky Video Background */}
      <div className="fixed top-0 left-0 w-full h-screen z-0 overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          className="object-cover w-full h-full opacity-50 mix-blend-screen"
          preload="auto"
          muted
          playsInline
          src="/videos/fuzara-hero-bg.mp4"
        />
        {/* Subtle gradient overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black" />
      </div>

      {/* Scrollable Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6" style={{ height: "400vh" }}>
        
        {/* Hero Section */}
        <div className="h-screen flex flex-col justify-center items-center text-center">
          <FadeInSection>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-6 text-glow mix-blend-plus-lighter">
              Fuzara Technologies
            </h1>
            <p className="text-xl md:text-2xl text-white/80 font-light tracking-wide max-w-2xl mx-auto glass-card py-4 px-8 rounded-full border-none shadow-none bg-white/5">
              Innovating the Future, Crafting Excellence.
            </p>
          </FadeInSection>
        </div>

        {/* Pillar 1: Software */}
        <div className="h-screen flex items-center justify-start">
          <FadeInSection className="w-full max-w-2xl">
            <Link href="/software" className="block group">
              <div className="glass-card p-10 md:p-14 rounded-3xl transition-all duration-500 hover:border-white/30 hover:bg-white/10">
                <div className="text-sm font-mono text-white/50 mb-4 tracking-widest uppercase">Pillar 01</div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 group-hover:text-glow transition-all">Software Engineering</h2>
                <p className="text-lg text-white/70 mb-8 leading-relaxed">
                  Building robust, custom software solutions. Featuring <span className="text-white font-semibold">CashCraft</span> — a revolutionary digital finance app that unifies bank cards into a single dashboard using an automated SMS intelligence engine.
                </p>
                <div className="flex items-center text-white/90 font-medium group-hover:translate-x-2 transition-transform">
                  Explore Software <ArrowRight className="ml-2 w-5 h-5" />
                </div>
              </div>
            </Link>
          </FadeInSection>
        </div>

        {/* Pillar 2: Drones */}
        <div className="h-screen flex items-center justify-end">
          <FadeInSection className="w-full max-w-2xl">
            <Link href="/drones" className="block group">
              <div className="glass-card p-10 md:p-14 rounded-3xl transition-all duration-500 hover:border-white/30 hover:bg-white/10">
                <div className="text-sm font-mono text-white/50 mb-4 tracking-widest uppercase">Pillar 02</div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 group-hover:text-glow transition-all">Enterprise Drone Services</h2>
                <p className="text-lg text-white/70 mb-8 leading-relaxed">
                  Advanced aerial mapping and surveying. Equipped with the <span className="text-white font-semibold">DJI Matrice 4 Enterprise</span>, offering large-sensor capabilities for unmatched precision in night ops and low-light scenarios.
                </p>
                <div className="flex items-center text-white/90 font-medium group-hover:translate-x-2 transition-transform">
                  Explore Drones <ArrowRight className="ml-2 w-5 h-5" />
                </div>
              </div>
            </Link>
          </FadeInSection>
        </div>

        {/* Pillar 3: Media */}
        <div className="h-screen flex items-center justify-start pb-32">
          <FadeInSection className="w-full max-w-2xl">
            <Link href="/media" className="block group">
              <div className="glass-card p-10 md:p-14 rounded-3xl transition-all duration-500 hover:border-white/30 hover:bg-white/10">
                <div className="text-sm font-mono text-white/50 mb-4 tracking-widest uppercase">Pillar 03</div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 group-hover:text-glow transition-all">Digital Media</h2>
                <p className="text-lg text-white/70 mb-8 leading-relaxed">
                  High-end cinematography by <span className="text-white font-semibold">Amenic Films</span>. We specialize in professional-grade corporate filmmaking, live event production, and complex post-production workflows.
                </p>
                <div className="flex items-center text-white/90 font-medium group-hover:translate-x-2 transition-transform">
                  Explore Media <ArrowRight className="ml-2 w-5 h-5" />
                </div>
              </div>
            </Link>
          </FadeInSection>
        </div>

      </div>
    </div>
  );
}
