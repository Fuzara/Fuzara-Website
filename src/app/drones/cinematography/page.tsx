"use client";
import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Video } from 'lucide-react';

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

export default function CinematographyPage() {
  const features = [
    {
      title: "Large Format Sensor",
      description: "The 4/3-inch CMOS sensor captures massive dynamic range and true-to-life colors, providing incredible flexibility in post-production."
    },
    {
      title: "Hybrid Zoom Capabilities",
      description: "Our 56x Hybrid Zoom allows us to capture tight, cinematic close-ups of subjects without compromising safety or flight regulations."
    },
    {
      title: "Stable Flight Dynamics",
      description: "Advanced gimbal stabilization and robust flight mechanics ensure butter-smooth footage, even in high winds and complex environments."
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
            src="https://www-cdn.djiits.com/reactor/assets/_next/static/videos/82111ccc-84ca-4b38-b138-43fac4556f60.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
        
        <div className="container mx-auto max-w-4xl relative z-20 text-center">
          <FadeInSection>
            <div className="mx-auto w-max bg-white/5 border border-white/10 p-4 rounded-2xl mb-8 backdrop-blur-md">
              <Video className="w-10 h-10 text-[#00C1A3]" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              Aerial <br />Cinematography
            </h1>
            <p className="text-xl md:text-2xl text-white/70 font-light leading-relaxed">
              Breathtaking vistas and professional-grade imagery for media and marketing.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <FadeInSection>
            <h2 className="text-3xl font-bold mb-8">Elevating Your Visual Narrative</h2>
            <div className="prose prose-invert prose-lg max-w-none text-white/70 leading-relaxed mb-16">
              <p>
                A compelling story requires a stunning perspective. Fuzara Technologies bridges the gap between enterprise-grade drone hardware and high-end creative production, delivering cinematic aerial footage that commands attention.
              </p>
              <p>
                Our flagship hardware boasts a massive 4/3-inch CMOS sensor. This allows us to capture incredibly detailed, high-resolution video with a wide dynamic range, preserving detail in both deep shadows and bright highlights. Whether shooting a commercial, a documentary, or corporate marketing material, our footage seamlessly integrates into professional post-production workflows.
              </p>
              <p>
                We do not just fly; we compose. Our pilots work closely with directors and cinematographers to execute complex, multi-axis tracking shots. Utilizing hybrid zoom capabilities, we can achieve dramatic, compressed perspectives that were previously impossible without expensive helicopter rigs, doing so safely and efficiently.
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
            Ready to Capture the Impossible?
          </h2>
          <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-[#00C1A3] hover:bg-[#00C1A3]/80 text-[#0F172A] font-semibold rounded-full text-lg transition-all shadow-[0_0_20px_rgba(0,193,163,0.3)]">
            Book Our Crew
          </Link>
        </FadeInSection>
      </section>

    </div>
  );
}
