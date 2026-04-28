"use client";

import React, { useEffect, useState } from "react";
import { useGlobalState } from "./GlobalStateProvider";
import { motion } from "framer-motion";

export const TelemetryHUD = () => {
  const { activeTheme } = useGlobalState();
  const [altitude, setAltitude] = useState(120);
  const [battery, setBattery] = useState(86);

  useEffect(() => {
    // Simulate live telemetry
    const interval = setInterval(() => {
      setAltitude((prev) => prev + (Math.random() > 0.5 ? 1 : -1));
      if (Math.random() > 0.8) setBattery((prev) => (prev > 10 ? prev - 1 : prev));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden font-roboto text-white font-mono uppercase tracking-widest text-xs p-6 flex flex-col justify-between">
      {/* Top HUD */}
      <div className="flex justify-between items-start">
        <div className="flex flex-col gap-1">
          <span className={`${activeTheme.accent} font-bold flex items-center gap-2`}>
            <span className={`h-2 w-2 rounded-full bg-[#FF6B00] animate-pulse`} />
            REC 00:42:15
          </span>
          <span className="opacity-70 mt-4 text-white/50">MATRICE 4 ENTERPRISE</span>
          <span className="text-white/80">SYSTEM READY</span>
        </div>
        
        <div className="text-right flex flex-col gap-1">
          <div className="flex gap-4 items-center">
            <span className="opacity-70">BATT</span>
            <span className={battery > 20 ? "text-[#39FF14]" : "text-[#FF6B00]"}>{battery}%</span>
          </div>
          <div className="flex gap-4 items-center mt-2">
            <span className="opacity-70">LINK</span>
            <span className="text-[#39FF14]">99%</span>
          </div>
        </div>
      </div>

      {/* Center Targeting (Optional) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-20">
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
          <path d="M100 0V15M100 185V200M0 100H15M185 100H200" stroke="white" strokeWidth="2" />
          <circle cx="100" cy="100" r="40" stroke="white" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="100" cy="100" r="2" fill="#FF6B00" />
        </svg>
      </div>

      {/* Bottom HUD */}
      <div className="flex justify-between items-end">
        <div className="flex flex-col gap-1 w-48 border-l-2 border-[#FF6B00]/40 pl-4 py-2">
          <span className="opacity-70">GPS DATA</span>
          <span>LAT -1.286389</span>
          <span>LON 36.817223</span>
          <span className="opacity-50 text-[10px]">NAIROBI FLIGHT ZONE</span>
        </div>
        
        <div className="flex flex-col items-end gap-1 w-48 border-r-2 border-white/20 pr-4 py-2">
          <span className="opacity-70">ALTITUDE</span>
          <motion.span 
            className="text-2xl font-bold font-sans tabular-nums text-white"
            key={altitude}
            initial={{ opacity: 0.5, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {altitude}m
          </motion.span>
          <span>MSL 1,661M</span>
        </div>
      </div>
    </div>
  );
};
