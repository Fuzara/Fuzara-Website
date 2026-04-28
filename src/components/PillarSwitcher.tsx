"use client";

import React from "react";
import { useGlobalState } from "./GlobalStateProvider";
import { PillarState } from "@/types/theme";
import { themeConfig } from "@/lib/themeConfig";
import { motion } from "framer-motion";

export const PillarSwitcher = () => {
  const { activePillar, setActivePillar, activeTheme } = useGlobalState();

  const handleSwitch = (pillar: PillarState) => {
    // Optional: Add a web audio API "click" sound here for haptic feedback
    if (typeof window !== "undefined" && window.navigator && window.navigator.vibrate) {
      window.navigator.vibrate(50); // Minor haptic tap
    }
    setActivePillar(pillar);
  };

  return (
    <motion.div 
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex flex-wrap justify-center gap-2 p-2 rounded-2xl ${activeTheme.uiStyle}`}
      style={{
        backdropFilter: "blur(12px)",
        backgroundColor: "rgba(0, 0, 0, 0.4)"
      }}
    >
      {Object.values(PillarState).map((pillar) => {
        const isActive = activePillar === pillar;
        const pillarTheme = themeConfig[pillar];
        return (
          <motion.button
            key={pillar}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleSwitch(pillar)}
            className={`px-4 py-2 text-xs md:text-sm md:px-6 md:py-3 rounded-xl font-medium tracking-wide uppercase transition-all duration-300 ${
              isActive 
                ? `${pillarTheme.background} ${pillarTheme.accent} opacity-100 shadow-md border ${
                  pillar === PillarState.CORE_HUB ? "border-[#00FFC2]/50" : "border-white/20"
                }`
                : "hover:bg-white/10 opacity-60 text-current"
            }`}
          >
            {pillar.replace("_", " ")}
          </motion.button>
        );
      })}
    </motion.div>
  );
};
