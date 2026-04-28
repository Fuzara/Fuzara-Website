import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function DronesPage() {
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
        <div className="text-sm font-mono text-white/50 mb-4 tracking-widest uppercase">Pillar 02</div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">Enterprise Drone Services.</h1>
        <p className="text-xl md:text-2xl text-white/70 font-light max-w-3xl leading-relaxed">
          Advanced aerial mapping, photogrammetry, and surveying, delivering professional-grade spatial data for modern enterprises.
        </p>
      </section>

      {/* Hardware Spotlight */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <div className="glass-card rounded-3xl p-8 md:p-12 border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px] pointer-events-none" />
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">DJI Matrice 4 Enterprise</h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl leading-relaxed">
            Our specialized hardware is built for unmatched precision. Equipped with advanced large-sensor capabilities, it captures professional-grade data in the most demanding environments.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-white/5 rounded-2xl p-6 border border-white/5">
              <h3 className="font-semibold text-lg mb-3">Night Operations</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Unmatched low-light performance allows for seamless data capture during night operations, ensuring continuous project progress regardless of lighting conditions.
              </p>
            </div>
            <div className="bg-white/5 rounded-2xl p-6 border border-white/5">
              <h3 className="font-semibold text-lg mb-3">Filter-Free Precision</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Capture high-dynamic-range spatial data natively. The large-sensor architecture removes the need for ND filters, simplifying deployment and increasing accuracy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Placeholder */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h3 className="text-2xl font-semibold mb-8">Photogrammetry Samples</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div key={item} className="aspect-square glass-card rounded-2xl flex items-center justify-center border-dashed border-2 border-white/20">
               <p className="text-white/40 font-mono text-sm tracking-widest uppercase">Map Render 0{item}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
