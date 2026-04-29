"use client";
import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Moon } from 'lucide-react';
import Image from 'next/image';

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

export default function NightOpsPage() {
  const features = [
    {
      title: "Ultra-High ISO Sensitivity",
      description: "Our sensors support a maximum ISO of 819,200, allowing for clear subject identification in environments with zero ambient light."
    },
    {
      title: "Night Scene Mode",
      description: "Proprietary image processing algorithms reduce noise and enhance clarity, producing bright, useable footage after dark."
    },
    {
      title: "Thermal Integration",
      description: "Dual payload capabilities allow us to overlay thermal heat signatures onto low-light optical footage for unparalleled situational awareness."
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
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          <div className="absolute inset-0 bg-[#0F172A]/70 mix-blend-multiply z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent z-10" />
          <img
            className="w-full h-full object-cover mix-blend-luminosity opacity-70"
            src="https://www-cdn.djiits.com/reactor/assets/_next/static/images/b352a89a83a9d0cff4ae43cc15b0757d.png"
            alt="Advanced Night Operations"
          />
        </div>
        
        <div className="container mx-auto max-w-4xl relative z-20 text-center">
          <FadeInSection>
            <div className="mx-auto w-max bg-white/5 border border-white/10 p-4 rounded-2xl mb-8 backdrop-blur-md">
              <Moon className="w-10 h-10 text-[#00C1A3]" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              Advanced <br />Night Operations
            </h1>
            <p className="text-xl md:text-2xl text-white/70 font-light leading-relaxed">
              Uncompromised security, inspection, and data collection—even in total darkness.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <FadeInSection>
            <h2 className="text-3xl font-bold mb-8">Owning the Night</h2>
            <div className="prose prose-invert prose-lg max-w-none text-white/70 leading-relaxed mb-16">
              <p>
                Enterprise operations do not stop when the sun goes down. Whether for critical infrastructure inspection, search and rescue, or high-stakes security overwatch, Fuzara Technologies provides eyes in the sky when visibility is compromised.
              </p>
              <p>
                The DJI Matrice 4 Enterprise features a revolutionary low-light sensor array. With an astoundingly high ISO threshold of up to 819,200 and a dedicated Night Scene Mode, our drones capture full-color, low-noise footage in near-pitch-black conditions. We can identify subjects, read license plates, and inspect dark crevices that would otherwise be invisible to standard optical cameras.
              </p>
              <p>
                When paired with our high-resolution thermal imaging payloads, we offer dual-spectrum awareness. We can detect heat signatures from miles away and immediately verify the target using ultra-low-light optical zoom. This guarantees absolute situational awareness for your security and operational teams, 24/7.
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
            Need 24/7 Aerial Overwatch?
          </h2>
          <Link href="/contact" className="inline-flex items-center px-8 py-4 bg-[#00C1A3] hover:bg-[#00C1A3]/80 text-[#0F172A] font-semibold rounded-full text-lg transition-all shadow-[0_0_20px_rgba(0,193,163,0.3)]">
            Deploy Our Team
          </Link>
        </FadeInSection>
      </section>

    </div>
  );
}
