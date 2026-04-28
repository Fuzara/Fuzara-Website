"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { ThemeConfig, themeConfig } from "@/lib/themeConfig";
import { PillarState } from "@/types/theme";
import { AnimatePresence, motion } from "framer-motion";

interface GlobalStateContextType {
  activePillar: PillarState;
  setActivePillar: (pillar: PillarState) => void;
  activeTheme: ThemeConfig;
  globalLogs: string[];
  addGlobalLog: (log: string) => void;
}

const GlobalStateContext = createContext<GlobalStateContextType | undefined>(undefined);

export const GlobalStateProvider = ({ children }: { children: React.ReactNode }) => {
  const [activePillar, setActivePillar] = useState<PillarState>(PillarState.CORE_HUB);
  const [isMounted, setIsMounted] = useState(false);
  const [globalLogs, setGlobalLogs] = useState<string[]>([
    "[SYS]: Core initialization complete.",
  ]);

  const addGlobalLog = (log: string) => {
    // Keep only the last 50 logs to prevent massive arrays
    setGlobalLogs((prev) => [...prev, log].slice(-50));
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null; // Avoid hydration mismatch

  const activeTheme = themeConfig[activePillar];

  return (
    <GlobalStateContext.Provider value={{ activePillar, setActivePillar, activeTheme, globalLogs, addGlobalLog }}>
      {/* 
        This div applies the global background and font changes based on the context.
        We apply AnimatePresence to smoothly transition the background color switch 
      */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activePillar}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className={`min-h-screen w-full transition-colors duration-700 ${activeTheme.background} ${activeTheme.textPrimary}`}
          style={{ 
            fontFamily: activeTheme.font,
            // @ts-ignore - CSS variables in React style object
            "--theme-accent": activeTheme.accentHex,
            "--theme-bg": activeTheme.bgHex,
          }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => {
  const context = useContext(GlobalStateContext);
  if (context === undefined) {
    throw new Error("useGlobalState must be used within a GlobalStateProvider");
  }
  return context;
};
