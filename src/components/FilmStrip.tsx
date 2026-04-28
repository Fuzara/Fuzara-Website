"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

export const FilmStrip = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-60%"]);

  return (
    <section ref={targetRef} className="relative h-[200vh] w-full bg-transparent">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-8 px-4">
          {[
            { title: "The Art of Motion", desc: "A cinematic study in silence." },
            { title: "Neon Horizons", desc: "Exploring the cybernetic dream." },
            { title: "Echoes of Time", desc: "Vintage lenses on modern subjects." },
            { title: "Lens Flare", desc: "Capturing the raw energy of light." },
          ].map((card, index) => (
            <div
              key={index}
              className="group relative h-[60vh] w-[70vw] md:w-[40vw] overflow-hidden bg-neutral-900 border border-white/10"
            >
              <div className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-105">
                <div className="absolute inset-0 bg-neutral-800 flex items-center justify-center">
                    <span className="text-white/20 font-sans tracking-widest text-xs uppercase">High Bitrate Video Placeholder</span>
                </div>
              </div>
              <div className="absolute inset-0 z-10 grid place-content-center bg-gradient-to-t from-black/80 to-transparent p-8">
                <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-2xl md:text-5xl font-bold uppercase text-white backdrop-blur-sm self-end font-sans tracking-tight justify-self-start mt-auto relative top-full -translate-y-[calc(100%+2rem)] transition-all group-hover:-translate-y-[calc(100%+4rem)]">
                  {card.title}
                  <span className="block mt-4 text-lg font-light tracking-wide font-sans normal-case opacity-80">{card.desc}</span>
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
