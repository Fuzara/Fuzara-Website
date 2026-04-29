"use client";
import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { Crosshair, Map, Moon, Video, ArrowRight, CheckCircle2 } from 'lucide-react';

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

export default function DronesPage() {
  const services = [
    {
      icon: <Map className="w-8 h-8 text-[#00C1A3]" />,
      title: "Photogrammetry & Mapping",
      description: "Generating highly accurate 3D models and terrain maps for construction, agriculture, and urban planning."
    },
    {
      icon: <Crosshair className="w-8 h-8 text-[#00C1A3]" />,
      title: "Precision Surveying",
      description: "Delivering actionable, centimeter-level spatial data to streamline enterprise workflows."
    },
    {
      icon: <Moon className="w-8 h-8 text-[#00C1A3]" />,
      title: "Advanced Night Operations",
      description: "Leveraging ultra-high ISO and Night Scene capabilities for uncompromised security and data collection after dark."
    },
    {
      icon: <Video className="w-8 h-8 text-[#00C1A3]" />,
      title: "Aerial Cinematography",
      description: "Capturing cinematic, high-resolution vistas with our 4/3-inch CMOS sensors for media and marketing."
    }
  ];

  const specs = [
    {
      title: "Mechanical Shutter & RTK Precision",
      spec: "20MP Mechanical Shutter + RTK support",
      benefit: "Centimeter-Level Accuracy for Your Projects. Eliminates rolling shutter distortion, ensuring perfectly accurate mapping data."
    },
    {
      title: "Extreme Low-Light Sensors",
      spec: "ISO up to 819,200 & Night Scene Mode",
      benefit: "Uncompromised Operations, Day or Night. Clear subject identification and data capture even in near-total darkness."
    },
    {
      title: "High-Resolution Hybrid Zoom",
      spec: "48MP Tele Camera with 56x Hybrid Zoom",
      benefit: "Detail-Rich Inspections from a Distance. Inspect critical infrastructure safely without sacrificing image quality."
    }
  ];

  return (
    <div className="min-h-screen bg-[#0F172A] font-sans text-white selection:bg-[#00C1A3]/30">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-card border-none rounded-none border-b border-white/5 px-6 py-4 bg-[#0F172A]/80 backdrop-blur-lg">
        <Link href="/" className="inline-flex items-center text-sm font-medium text-white/70 hover:text-white transition-colors">
          <ArrowRight className="w-4 h-4 mr-2 rotate-180" /> Back to Home
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00C1A3]/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <FadeInSection>
            <div className="inline-block px-4 py-2 rounded-full border border-[#00C1A3]/30 bg-[#00C1A3]/10 text-[#00C1A3] text-sm font-semibold tracking-widest uppercase mb-6 shadow-[0_0_15px_rgba(0,193,163,0.1)]">
              Fuzara Drone Masters
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight">
              Precision Spatial Data. <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#00C1A3]">Elevated Operations.</span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl leading-relaxed mb-10">
              Fuzara Technologies is a premier, KCAA-certified enterprise drone company operating in Kenya. We move beyond simple drone flights to deliver high-precision spatial data, advanced mapping, and breathtaking cinematography.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-6 bg-black/20 border-y border-white/5">
        <div className="container mx-auto max-w-6xl">
          <FadeInSection className="mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Core Capabilities</h2>
            <p className="text-lg text-white/50 max-w-2xl">Tailored aerial solutions designed for enterprise-grade performance and reliability.</p>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <FadeInSection key={index} delay={index * 0.1} className="h-full">
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-colors duration-300 h-full flex flex-col shadow-2xl">
                  <div className="bg-black/30 p-4 rounded-2xl w-max mb-6 border border-white/5">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-white/70 leading-relaxed flex-grow">
                    {service.description}
                  </p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* The Technology Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute right-0 top-1/3 w-[800px] h-[800px] bg-[#00C1A3]/5 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <FadeInSection>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">The Technology</h2>
              <p className="text-xl text-[#00C1A3] font-medium mb-6">Flagship Fleet: DJI Matrice 4 Enterprise</p>
              <p className="text-lg text-white/70 leading-relaxed mb-10">
                Our operations are powered by the industry-leading Matrice 4 Enterprise series. Equipped with massive sensor arrays, thermal imaging, and RTK precision, it allows us to execute complex missions safely and accurately.
              </p>
              
              <div className="space-y-8">
                {specs.map((spec, index) => (
                  <div key={index} className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-[#00C1A3] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-xl font-semibold mb-1">{spec.title}</h4>
                      <p className="text-sm text-[#00C1A3]/80 font-mono mb-2">{spec.spec}</p>
                      <p className="text-white/60 leading-relaxed">{spec.benefit}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeInSection>

            <FadeInSection delay={0.2} className="relative aspect-square lg:aspect-auto lg:h-[600px] rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-transparent flex items-center justify-center group">
               {/* Elegant placeholder for the Drone image */}
               <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579820010410-c10411aaaa88?q=80&w=2997&auto=format&fit=crop')] bg-cover bg-center opacity-40 group-hover:opacity-60 transition-opacity duration-700 mix-blend-luminosity"></div>
               <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent"></div>
               <div className="relative z-10 text-center p-8 backdrop-blur-sm bg-black/20 rounded-2xl border border-white/10 shadow-2xl">
                 <p className="text-sm tracking-widest uppercase text-white/50 mb-2">System Active</p>
                 <p className="text-2xl font-bold text-glow text-[#00C1A3]">M4E Telemetry Online</p>
               </div>
            </FadeInSection>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-gradient-to-t from-black to-transparent text-center relative z-20">
        <FadeInSection>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-8">
            Ready to Deploy?
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto mb-10">
            Contact us today to discuss how our enterprise drone solutions can provide centimeter-level accuracy for your next project.
          </p>
          <Link href="/contact" className="inline-flex items-center px-10 py-5 bg-[#00C1A3] hover:bg-[#00C1A3]/80 text-[#0b1120] font-semibold rounded-full text-lg transition-all duration-300 shadow-[0_0_20px_rgba(0,193,163,0.4)] hover:shadow-[0_0_30px_rgba(0,193,163,0.6)] transform hover:-translate-y-1">
            Contact Our Team <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </FadeInSection>
      </section>

    </div>
  );
}
