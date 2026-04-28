"use client";

import React from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useGlobalState } from "./GlobalStateProvider";
import { PillarState } from "@/types/theme";

// ---
// Pillar Background Specific Effects
// ---

const CoreHubGrid = () => {
  return (
    <div className="absolute inset-0 bg-[#0B132B] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]">
      <div className="absolute top-0 right-0 left-0 h-96 bg-gradient-to-b from-[#00FFC2]/10 to-transparent pointer-events-none" />
      <motion.div 
        animate={{ y: [0, -20, 0], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#00FFC2]/20 blur-[100px]"
      />
    </div>
  );
};

const AmenicMutedParallax = () => {
  return (
    <div className="absolute inset-0 bg-[#080808]">
       {/* High grain is added via global NoiseOverlay component */}
       <div className="absolute inset-0 bg-gradient-to-br from-[#003D3D]/10 to-transparent" />
    </div>
  );
};

const FuzaraLinearGradient = () => {
  // Mouse following gradient using framer-motion values to prevent React re-renders
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 100, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 bg-[#000000] overflow-hidden">
        <motion.div
           className="pointer-events-none absolute -inset-px opacity-40 transition duration-300 z-0"
           style={{
             background: `radial-gradient(600px circle at calc(${smoothX}px) calc(${smoothY}px), rgba(57,255,20,0.1), transparent 40%)`
           }}
        />
    </div>
  );
};

const DroneControstSplit = () => {
  return (
    <div className="absolute inset-0 flex bg-[#2D2D2D]">
      {/* 40% Split dark specs side, 60% transparent taking the 3D canvas side */}
      <div className="w-[40%] bg-[#1A1A1A] border-r border-[#FF6B00]/20" />
      <div className="w-[60%] bg-gradient-to-r from-[#1A1A1A] to-transparent pointer-events-none z-10" />
    </div>
  );
};

// ---
// Engine Manager
// ---

export const BackgroundEngine = () => {
  const { activePillar } = useGlobalState();

  return (
    <div className="fixed inset-0 pointer-events-none -z-10">
      {activePillar === PillarState.CORE_HUB && <CoreHubGrid />}
      {activePillar === PillarState.AMENIC_FILMS && <AmenicMutedParallax />}
      {activePillar === PillarState.FUZARA_DEV && <FuzaraLinearGradient />}
      {activePillar === PillarState.DRONE_MASTERS && <DroneControstSplit />}
    </div>
  );
};
