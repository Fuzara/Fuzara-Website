"use client";
import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Crosshair, Map, Moon, Video, ArrowRight, CheckCircle2, Zap, Shield, Target } from 'lucide-react';
import CTASection from '@/components/CTASection';

const Char = ({ children, progress, range }: { children: React.ReactNode, progress: any, range: [number, number] }) => {
  const color = useTransform(progress, range, ["rgba(255,255,255,0.2)", "#00C1A3"]);
  const textShadow = useTransform(progress, range, ["0px 0px 0px rgba(0,193,163,0)", "0px 0px 20px rgba(0,193,163,0.8)"]);

  return (
    <motion.span style={{ color, textShadow }}>
      {children}
    </motion.span>
  );
};

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
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const line1 = "Precision Spatial Data.";
  const line2 = "Elevated Operations.";
  const totalChars = (line1 + line2).replace(/ /g, "").length;

  const renderScrollText = (text: string, startIndex: number) => {
    const words = text.split(" ");
    let charIndex = startIndex;
    return (
      <div className="flex flex-wrap">
        {words.map((word, i) => {
          const chars = word.split("");
          return (
            <span key={i} className="inline-block mr-[0.25em]">
              {chars.map((char, j) => {
                const start = (charIndex / totalChars) * 0.7;
                const end = start + ((1 / totalChars) * 0.7);
                charIndex++;
                return (
                  <Char key={j} progress={scrollYProgress} range={[start, end]}>
                    {char}
                  </Char>
                );
              })}
            </span>
          );
        })}
      </div>
    );
  };

  const services = [
    {
      icon: <Map className="w-8 h-8 text-[#00C1A3]" />,
      title: "Centimeter-Level Mapping",
      description: "Utilizing the Matrice 4E's mechanical shutter and RTK module to generate high-fidelity 3D models with unmatched spatial accuracy."
    },
    {
      icon: <Target className="w-8 h-8 text-[#00C1A3]" />,
      title: "Precision Surveying",
      description: "Delivering actionable GIS data through integrated Laser Range Finding and high-resolution aerial photogrammetry."
    },
    {
      icon: <Moon className="w-8 h-8 text-[#00C1A3]" />,
      title: "24/7 Tactical Operations",
      description: "Advanced night vision and NIR auxiliary lighting enable safe, high-detail operations in near-total darkness."
    },
    {
      icon: <Zap className="w-8 h-8 text-[#00C1A3]" />,
      title: "Industrial Inspection",
      description: "56x Hybrid Zoom capabilities allow for safe, detailed analysis of critical infrastructure from extended stand-off distances."
    }
  ];

  const specs = [
    {
      title: "Mechanical Shutter & RTK Precision",
      spec: "4/3 CMOS 20MP Sensor + 0.7s Interval Shots",
      benefit: "Centimeter-Level Accuracy for Your Projects. Eliminates rolling shutter distortion, ensuring perfectly accurate mapping data even at high speeds."
    },
    {
      title: "Omnidirectional Night Vision",
      spec: "Low-light Fisheye Sensors + NIR Auxiliary Light",
      benefit: "Uncompromised Operations, Day or Night. 360-degree obstacle sensing and 100m NIR visibility for safe missions in total darkness."
    },
    {
      title: "Ultra-Long Range Tele & LRF",
      spec: "56x Hybrid Zoom + 1800m Laser Range Finder",
      benefit: "Detail-Rich Inspections from a Distance. Obtain precise coordinates and high-res imagery from safe stand-off distances."
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
      <section ref={heroRef} className="relative h-[200vh] bg-[#0F172A]">
        {/* Sticky Container */}
        <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center px-6">

          {/* Background Video */}
          <div className="absolute inset-0 w-full h-full pointer-events-none">
            {/* Navy Overlay */}
            <div className="absolute inset-0 bg-[#0F172A]/60 mix-blend-multiply z-10" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/30 via-transparent to-[#0F172A] z-10" />
            <video
              className="w-full h-full object-cover mix-blend-luminosity opacity-50"
              src="https://www-cdn.djiits.com/reactor/assets/_next/static/videos/82111ccc-84ca-4b38-b138-43fac4556f60.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>

          <div className="container mx-auto max-w-6xl relative z-20">
            <FadeInSection>
              <div className="inline-block px-4 py-2 rounded-full border border-[#00C1A3]/30 bg-[#00C1A3]/10 text-[#00C1A3] text-sm font-semibold tracking-widest uppercase mb-6 shadow-[0_0_15px_rgba(0,193,163,0.1)]">
                Fuzara Drone Masters
              </div>
              <div className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight">
                {renderScrollText(line1, 0)}
                {renderScrollText(line2, line1.replace(/ /g, "").length)}
              </div>
              <p className="text-xl text-white/70 max-w-3xl leading-relaxed mt-10">
                Fuzara Technologies is a premier, KCAA-certified enterprise drone company operating in Kenya. We move beyond simple drone flights to deliver high-precision spatial data, advanced mapping, and breathtaking cinematography.
              </p>
            </FadeInSection>
          </div>
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
      <CTASection 
        title="Ready to Deploy?"
        subtitle="Contact us today to discuss how our enterprise drone solutions, powered by the DJI Matrice 4E, can provide the precision your project demands."
        pillarColor="#00C1A3"
      />

    </div>
  );
}
