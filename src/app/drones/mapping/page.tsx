"use client";
import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Map } from 'lucide-react';

function FadeInSection({ children, className, delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-10% 0px -10% 0px", once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
      transition={{ duration: 0.7, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function MappingPage() {
  const features = [
    {
      title: "Centimeter-Level Accuracy",
      description: "Using RTK modules and mechanical shutters, we eliminate rolling shutter distortion, providing absolute precision for complex mapping tasks."
    },
    {
      title: "High-Efficiency 3D Modeling",
      description: "Capture thousands of high-resolution images rapidly. Our data pipeline reconstructs these into highly accurate 3D models and point clouds."
    },
    {
      title: "Terrain & Topographical Analysis",
      description: "Generate highly detailed Digital Elevation Models (DEMs) and Digital Surface Models (DSMs) for pre-construction planning and agricultural runoff analysis."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0F172A] font-sans text-white selection:bg-[#00C1A3]/30">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-card border-none rounded-none border-b border-white/5 px-6 py-4 bg-[#0F172A]/80 backdrop-blur-lg">
        <Link href="/drones" className="inline-flex items-center text-sm font-medium text-white/70 hover:text-white transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Drones
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex flex-col justify-center px-6 overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          <div className="absolute inset-0 bg-[#0F172A]/70 mix-blend-multiply z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent z-10" />
          <video
            className="w-full h-full object-cover mix-blend-luminosity opacity-60"
            src="https://www-cdn.djiits.com/reactor/assets/_next/static/videos/ac010858-8d98-41f6-9793-6fdff38f80eb.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
        
        <div className="container mx-auto max-w-4xl relative z-20 text-center">
          <FadeInSection>
            <div className="mx-auto w-max bg-white/5 border border-white/10 p-4 rounded-2xl mb-8 backdrop-blur-md">
              <Map className="w-10 h-10 text-[#00C1A3]" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              Photogrammetry <br />& Mapping
            </h1>
            <p className="text-xl md:text-2xl text-white/70 font-light leading-relaxed">
              Transforming the physical world into highly accurate, actionable digital assets.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <FadeInSection>
            <h2 className="text-3xl font-bold mb-8">Data-Driven Decision Making</h2>
            <div className="prose prose-invert prose-lg max-w-none text-white/70 leading-relaxed mb-16">
              <p>
                In industries where a single miscalculation can lead to immense cost overruns, accuracy is not a luxury—it is a requirement. Fuzara Technologies leverages the DJI Matrice 4 Enterprise's advanced photogrammetry capabilities to deliver spatial data you can trust.
              </p>
              <p>
                Our enterprise mapping solutions utilize the 4/3-inch CMOS 20MP wide camera equipped with a mechanical shutter. This ensures that every image captured during high-speed mapping flights is free from rolling shutter distortion. When combined with our integrated RTK (Real-Time Kinematic) network, we achieve centimeter-level absolute accuracy without the need for time-consuming Ground Control Points (GCPs).
              </p>
              <p>
                The result? Highly detailed orthomosaics, 3D point clouds, and topographical maps delivered in a fraction of the time of traditional surveying methods. Whether you are tracking construction progress, analyzing crop health, or planning urban infrastructure, our data provides the foundational truth for your operations.
              </p>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <h3 className="text-2xl font-bold mb-8">Key Advantages</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 border border-white/10 p-8 rounded-3xl h-full">
                  <CheckCircle2 className="w-8 h-8 text-[#00C1A3] mb-6" />
                  <h4 className="text-xl font-semibold mb-4">{feature.title}</h4>
                  <p className="text-white/60 text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-black/20 border-t border-white/5 text-center">
        <FadeInSection>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
            Ready to Map Your Project?
          </h2>
          <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-[#00C1A3] hover:bg-[#00C1A3]/80 text-[#0F172A] font-semibold rounded-full text-lg transition-all shadow-[0_0_20px_rgba(0,193,163,0.3)]">
            Get a Quote
          </Link>
        </FadeInSection>
      </section>

    </div>
  );
}
