import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import CTASection from "@/components/CTASection";

export default function SoftwarePage() {
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
        <div className="text-sm font-mono text-white/50 mb-4 tracking-widest uppercase">Pillar 01</div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">Software Engineering.</h1>
        <p className="text-xl md:text-2xl text-white/70 font-light max-w-3xl leading-relaxed">
          We build robust, custom software solutions for web and mobile platforms using modern architectures like React Native and Next.js.
        </p>
      </section>

      {/* CashCraft Spotlight */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="glass-card rounded-3xl p-8 md:p-12 border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">CashCraft</h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl leading-relaxed">
            A revolutionary digital finance application that solves financial fragmentation. It unifies multiple bank cards and mobile wallets into a single, comprehensive dashboard.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white/5 rounded-2xl p-6 border border-white/5">
              <h3 className="font-semibold text-lg mb-3">Automated Intelligence</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Eliminates manual data entry by utilizing an automated SMS intelligence engine to read, process, and accurately categorize transaction messages in real-time.
              </p>
            </div>
            <div className="bg-white/5 rounded-2xl p-6 border border-white/5">
              <h3 className="font-semibold text-lg mb-3">Unified Dashboard</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Connect all your accounts in one secure place. Gain unparalleled visibility into your spending habits and financial health without switching apps.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Media Placeholder */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="w-full aspect-video glass-card rounded-3xl flex items-center justify-center border-dashed border-2 border-white/20">
          <p className="text-white/40 font-mono text-sm tracking-widest uppercase">Video Player Placeholder</p>
        </div>
      </section>
      <CTASection 
        title="Ready to Build Your Vision?"
        subtitle="Our software engineering team is ready to help you architect and deploy scalable, high-performance solutions tailored to your unique requirements."
        pillarColor="#0066FF"
      />
    </div>
  );
}
