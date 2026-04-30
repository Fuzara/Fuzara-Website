"use client";
import React, { useEffect, useRef, useLayoutEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// Technical Grid Component inspired by "Yard Operating System"
const TechnicalGrid = () => (
  <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="tech-grid" width="50" height="50" patternUnits="userSpaceOnUse">
          <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#00C1A3" strokeWidth="0.5" strokeOpacity="0.3" />
          <circle cx="0" cy="0" r="1.5" fill="#0F172A" fillOpacity="0.6" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#tech-grid)" />
      <circle cx="25%" cy="30%" r="2" fill="#0F172A" />
      <circle cx="75%" cy="60%" r="2" fill="#00C1A3" />
      <circle cx="40%" cy="85%" r="2" fill="#0F172A" />
    </svg>
  </div>
);

export default function Home() {
  const mainRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const heroVideoContainerRef = useRef<HTMLDivElement>(null);
  const pillarVideoContainerRef = useRef<HTMLDivElement>(null);

  // Section refs
  const introRef = useRef<HTMLDivElement>(null);
  const pillar1Ref = useRef<HTMLDivElement>(null);
  const pillar2Ref = useRef<HTMLDivElement>(null);
  const pillar3Ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const video = videoRef.current;
      const overlay = overlayRef.current;

      // 1. Hero Subheadline Fade (simple version)
      gsap.from(".hero-subheadline", {
        opacity: 0,
        y: 20,
        duration: 1.5,
        delay: 0.5,
        ease: "power3.out"
      });

      // 2. White to Navy Transition & Video Scrubbing Start
      // Transition starts as soon as we leave Hero
      const transitionTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".pillars-wrapper",
          start: "top bottom", // Starts when pillars container enters viewport
          end: "top top", // Completes when pillars container is at top
          scrub: true,
        }
      });

      transitionTl.to(overlay, {
        backgroundColor: "#0F172A",
        ease: "none"
      });

      // 2.5 Fade transitions for video containers
      // Fade IN Pillar Video
      gsap.to(pillarVideoContainerRef.current, {
        opacity: 1,
        scrollTrigger: {
          trigger: ".pillars-wrapper",
          start: "top bottom",
          end: "top top",
          scrub: true,
        }
      });

      // Fade OUT Pillar Video at the end
      gsap.to(pillarVideoContainerRef.current, {
        opacity: 0,
        scrollTrigger: {
          trigger: pillar3Ref.current,
          start: "bottom top",
          end: "+=100",
          scrub: true,
        }
      });

      // 3. Video Scrubbing Logic
      // Starts simultaneously with the transition (from the start of the pillars wrapper)
      if (video) {
        ScrollTrigger.create({
          trigger: ".pillars-wrapper",
          start: "top bottom",
          end: "bottom bottom",
          scrub: true,
          onUpdate: (self) => {
            if (video.readyState >= 2) {
              const targetTime = self.progress * video.duration;
              requestAnimationFrame(() => {
                video.currentTime = targetTime;
              });
            }
          }
        });
      }

      // 4. "Our Pillars" Intro Pinning
      ScrollTrigger.create({
        trigger: introRef.current,
        start: "top top",
        end: "+=100%",
        pin: true,
        scrub: true,
        anticipatePin: 1,
      });

      // 5. Pinning & Typewriter for each Pillar
      const pillars = [
        { ref: pillar1Ref, text: "Led by a certified Software Engineer. We build robust, custom solutions." },
        { ref: pillar2Ref, text: "KCAA certified Advanced Aerial Mapping and Surveying." },
        { ref: pillar3Ref, text: "High-end cinematography by Amenic Films. We specialize in professional-grade cinematography and live event production." }
      ];

      pillars.forEach((pillar, i) => {
        const section = pillar.ref.current;
        if (!section) return;

        const words = pillar.text.split(" ");
        const wordsContainer = section.querySelector(".words-container");

        if (wordsContainer) {
          wordsContainer.innerHTML = words.map(w => `<span class="word opacity-0 mr-[0.25em] inline-block">${w}</span>`).join("");
        }

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "+=200%",
            pin: true,
            scrub: 0.5,
            anticipatePin: 1,
          }
        });

        tl.to(section.querySelectorAll(".word"), {
          opacity: 1,
          stagger: 0.1,
          ease: "none"
        });
      });

    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={mainRef} className="relative bg-white selection:bg-[#00C1A3] selection:text-white overflow-x-hidden">

      {/* 1. Hero Background Video Container */}
      <div ref={heroVideoContainerRef} className="fixed top-0 left-0 w-full h-screen z-0 overflow-hidden pointer-events-none bg-white">
        <video
          className="object-cover w-full h-full opacity-60 grayscale contrast-125"
          autoPlay
          loop
          muted
          playsInline
          src="/videos/fuzara-hero-bg.mp4"
        />
        {/* White Overlay behind the hero */}
        <div className="absolute inset-0 bg-white/80" />
      </div>

      {/* 2. Pillars Scrubbing Video Container */}
      <div ref={pillarVideoContainerRef} className="fixed top-0 left-0 w-full h-screen z-10 overflow-hidden opacity-0 pointer-events-none bg-black">
        <video
          ref={videoRef}
          className="object-cover w-full h-full mix-blend-screen opacity-90 grayscale contrast-125"
          preload="auto"
          muted
          playsInline
          src="/videos/Hero4.mp4"
        />
        {/* Dynamic Overlay that shifts from White to Navy */}
        <div
          ref={overlayRef}
          className="absolute inset-0 bg-white opacity-80"
          style={{ transition: "background-color 0.1s linear" }}
        />
      </div>

      {/* Hero Section */}
      <section ref={heroRef} className="relative z-20 h-screen flex flex-col items-center justify-center bg-transparent">
        <TechnicalGrid />

        <div className="relative z-10 text-center px-6 max-w-7xl mx-auto">
          <h1 className="text-7xl md:text-[11rem] font-bold tracking-tighter text-[#0F172A] mb-8 leading-[0.85] uppercase">
            Fuzara <br className="hidden md:block" /> Technologies
          </h1>
          <div className="text-lg md:text-3xl font-medium tracking-[0.25em] text-[#0F172A]/60 uppercase h-12 hero-subheadline">
            Innovating the Future, Crafting Excellence.
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-30">
          <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-[#0F172A]">Scroll</span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-[#0F172A] to-transparent" />
        </div>
      </section>

      {/* Pillars Wrapper */}
      <div className="pillars-wrapper relative z-10">

        {/* Our Pillars Intro Section */}
        <section ref={introRef} className="h-screen flex flex-col items-center justify-center text-center px-6 bg-transparent">
          <div className="max-w-5xl relative z-5">
            <h2 className="text-7xl md:text-[10rem] font-bold text-white tracking-tight leading-none uppercase mix-blend-difference">
              Our Pillars
            </h2>
            <div className="w-32 h-1.5 bg-[#00C1A3] mx-auto mt-12 rounded-full shadow-[0_0_30px_rgba(0,193,163,0.6)]" />
          </div>
        </section>

        {/* Pillar 1: Software */}
        <section ref={pillar1Ref} className="h-screen flex flex-col items-center justify-center text-center px-6 bg-transparent">
          <div className="max-w-5xl relative z-10">
            <h2 className="text-6xl md:text-[8rem] font-bold text-white mb-10 tracking-tight leading-none uppercase mix-blend-difference">
              Software <br /> Engineering
            </h2>
            <div className="text-xl md:text-3xl text-white/90 leading-relaxed font-light max-w-4xl mx-auto words-container">
              {/* GSAP injects words here */}
            </div>
            <div className="mt-12 opacity-0 hover:opacity-100 transition-opacity duration-500">
              <Link href="/software" className="inline-flex items-center gap-4 text-[#00C1A3] font-bold text-2xl group">
                Explore CashCraft <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* Pillar 2: Drones */}
        <section ref={pillar2Ref} className="h-screen flex flex-col items-center justify-center text-center px-6 bg-transparent">
          <div className="max-w-5xl relative z-10">
            <h2 className="text-6xl md:text-[8rem] font-bold text-white mb-10 tracking-tight leading-none uppercase mix-blend-difference">
              Fuzara <br /> Drone Masters
            </h2>
            <div className="text-xl md:text-3xl text-white/90 leading-relaxed font-light max-w-4xl mx-auto words-container">
              {/* GSAP injects words here */}
            </div>
            <div className="mt-12 opacity-0 hover:opacity-100 transition-opacity duration-500">
              <Link href="/drones" className="inline-flex items-center gap-4 text-[#00C1A3] font-bold text-2xl group">
                Explore Operations <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* Pillar 3: Media */}
        <section ref={pillar3Ref} className="h-screen flex flex-col items-center justify-center text-center px-6 pb-20 bg-transparent">
          <div className="max-w-5xl relative z-10">
            <h2 className="text-6xl md:text-[8rem] font-bold text-white mb-10 tracking-tight leading-none uppercase mix-blend-difference">
              Digital <br /> Media
            </h2>
            <div className="text-xl md:text-3xl text-white/90 leading-relaxed font-light max-w-4xl mx-auto words-container">
              {/* GSAP injects words here */}
            </div>
            <div className="mt-12 opacity-0 hover:opacity-100 transition-opacity duration-500">
              <Link href="/media" className="inline-flex items-center gap-4 text-[#00C1A3] font-bold text-2xl group">
                Explore Media <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

      </div>

      {/* Final CTA Section */}
      <section className="relative z-30 h-screen flex flex-col items-center justify-center text-center bg-[#0F172A]">
        <div className="p-12 md:p-24 rounded-[4rem] border border-white/5 bg-white/5 backdrop-blur-2xl max-w-6xl mx-auto">
          <h3 className="text-5xl md:text-8xl font-bold text-white mb-10 tracking-tighter uppercase">
            Ready to <br /> Elevate?
          </h3>
          <Link href="/contact" className="bg-[#00C1A3] text-[#0F172A] px-16 py-6 rounded-full font-bold text-2xl hover:scale-105 transition-transform inline-block uppercase tracking-widest shadow-[0_0_50px_rgba(0,193,163,0.3)]">
            Start a Project
          </Link>
        </div>
      </section>

      <style jsx global>{`
        .mix-blend-difference {
          mix-blend-mode: difference;
        }
      `}</style>
    </div>
  );
}
