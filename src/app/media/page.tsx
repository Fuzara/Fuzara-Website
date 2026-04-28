import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function MediaPage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-card border-none rounded-none border-b border-white/5 px-6 py-4">
        <Link href="/" className="inline-flex items-center text-sm font-medium text-white/70 hover:text-white transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 max-w-5xl mx-auto">
        <div className="text-sm font-mono text-white/50 mb-4 tracking-widest uppercase">Pillar 03</div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">Digital Media.</h1>
        <p className="text-xl md:text-2xl text-white/70 font-light max-w-3xl leading-relaxed">
          High-end cinematography and production by Amenic Films. We craft compelling visual narratives for brands and enterprises.
        </p>
      </section>

      {/* Amenic Spotlight */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="glass-card rounded-3xl p-8 md:p-12 border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Amenic Films Division</h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl leading-relaxed">
            Our capacity for professional-grade corporate filmmaking and dynamic live event media production is unparalleled. We handle the entire pipeline from pre-production to final delivery.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white/5 rounded-2xl p-6 border border-white/5">
              <h3 className="font-semibold text-lg mb-3">Live Event Production</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Dynamic, multi-camera live event coverage with real-time switching and broadcast-quality streaming capabilities.
              </p>
            </div>
            <div className="bg-white/5 rounded-2xl p-6 border border-white/5">
              <h3 className="font-semibold text-lg mb-3">Advanced Post-Production</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                State-of-the-art post-production workflows including advanced batch color grading, sound design, and robust archival editing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reel Reel Placeholder */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="w-full aspect-[21/9] glass-card rounded-3xl flex items-center justify-center border-dashed border-2 border-white/20">
          <p className="text-white/40 font-mono text-sm tracking-widest uppercase">Cinematic Reel Placeholder</p>
        </div>
      </section>
    </div>
  );
}
