"use client";

import React from "react";
import { Canvas } from "@react-three/fiber";
import { useGlobalState } from "./GlobalStateProvider";
import { PillarState } from "@/types/theme";
import { motion, AnimatePresence } from "framer-motion";
import { CashCraftPreview } from "./CashCraftPreview";
import { FilmStrip } from "./FilmStrip";
import { TelemetryHUD } from "./TelemetryHUD";
import { ForensicTerminal } from "./ForensicTerminal";
import { FounderDossier } from "./FounderDossier";

// Placeholder 3D Components for each pillar (Kept for Core Hub & Drone Masters Hero)
const CoreHub3D = () => {
  return (
    <mesh rotation={[0.5, 0.5, 0]}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#00FFC2" wireframe />
    </mesh>
  );
};

const DroneMasters3D = () => {
  return (
    <mesh rotation={[0.4, 0.2, 0]}>
      <cylinderGeometry args={[1.5, 1.5, 4, 32]} />
      <meshStandardMaterial color="#FF6B00" roughness={0.3} metalness={0.8} />
    </mesh>
  );
};

export const HeroSection = () => {
  const { activePillar, activeTheme } = useGlobalState();

  const renderContent = () => {
    switch (activePillar) {
      case PillarState.CORE_HUB:
        return (
          <motion.div 
            key="core"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="flex flex-col items-center min-h-screen z-10 w-full relative pt-[30vh] pb-48"
          >
            <div className="fixed inset-0 -z-10 bg-transparent">
              <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <CoreHub3D />
              </Canvas>
            </div>
            
            <div className="flex flex-col items-center justify-center mb-48 text-center px-4">
              <motion.h1 
                initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
                className="text-6xl md:text-8xl font-bold tracking-tight text-white mb-6 uppercase"
              >
                System <span className={activeTheme.accent}>Online</span>
              </motion.h1>
              <p className={`${activeTheme.accent}/80 font-mono tracking-widest text-sm md:text-base`}>ENCRYPTED // TACTICAL OVERVIEW</p>
            </div>

            <FounderDossier />
            <ForensicTerminal />
          </motion.div>
        );

      case PillarState.AMENIC_FILMS:
        return (
          <motion.div key="amenic" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <FilmStrip />
          </motion.div>
        );

      case PillarState.FUZARA_DEV:
        return (
          <motion.div 
            key="dev" 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="min-h-screen py-32 flex flex-col items-center z-10 w-full"
          >
            <div className="text-center mb-16 space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white">
                Engineering <span className={activeTheme.accent}>Precision.</span>
              </h1>
              <p className="text-lg text-neutral-400 max-w-xl mx-auto">
                The gold standard in SaaS architecture. Experience the CashCraft bento ecosystem.
              </p>
            </div>
             <CashCraftPreview />
          </motion.div>
        );

      case PillarState.DRONE_MASTERS:
        return (
          <motion.div 
            key="drone"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="h-screen w-full relative flex z-10"
          >
            <TelemetryHUD />
            {/* The canvas sits on the right side of the split screen */}
            <div className="absolute right-0 top-0 bottom-0 w-[60%] -z-10">
               <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
                  <ambientLight intensity={0.8} />
                  <pointLight position={[10, 10, 10]} intensity={2} />
                  <DroneMasters3D />
                </Canvas>
            </div>
            
            <div className="w-[40%] flex flex-col justify-center p-12 z-10 relative">
               <h1 className="text-6xl font-bold uppercase tracking-tighter mb-6">Air <br /> Superiority</h1>
               <p className="text-white/60 mb-8 w-64 uppercase tracking-widest text-sm leading-relaxed">
                 Next generation aerial diagnostics and enterprise fleet integration.
               </p>
               <button className="self-start uppercase px-8 py-3 bg-[#FF6B00] font-bold hover:bg-white hover:text-black transition-colors duration-300">
                 Deploy System
               </button>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-start overflow-x-hidden">
      <AnimatePresence mode="wait">
        {renderContent()}
      </AnimatePresence>
    </section>
  );
};
