"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
  className?: string;
  pillarColor?: string;
}

export default function CTASection({
  title = "Ready To Elevate your Brand?",
  subtitle = "Contact us today to discuss how our specialized services can help you achieve your goals with cutting-edge technology.",
  buttonText = "Contact Us",
  buttonLink = "/contact",
  className = "",
  pillarColor = "#00C1A3"
}: CTASectionProps) {
  return (
    <section className={`py-32 px-6 relative overflow-hidden ${className}`} style={{ backgroundColor: "#0b1120" }}>
      {/* Decorative background accent */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] blur-[120px] rounded-full opacity-10 pointer-events-none"
        style={{ backgroundColor: pillarColor }}
      />
      
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 text-white">
            {title}
          </h2>
          <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
          <Link 
            href={buttonLink} 
            className="inline-flex items-center px-10 py-5 rounded-full text-lg font-bold transition-all duration-500 transform hover:-translate-y-1 shadow-lg group"
            style={{ 
              backgroundColor: pillarColor, 
              color: "#0b1120",
              boxShadow: `0 10px 30px -10px ${pillarColor}66`
            }}
          >
            {buttonText} 
            <ArrowRight className="ml-2 w-6 h-6 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
