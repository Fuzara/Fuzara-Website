import { PillarState } from "@/types/theme";

export interface ThemeConfig {
  name: string;
  font: string; // The primary CSS font-family
  background: string; // Tailwind class
  textPrimary: string; // Tailwind class
  accent: string; // Tailwind class (text)
  accentHex: string; // Raw hex for CSS variables
  bgHex: string; // Raw hex for CSS variables
  uiStyle: string; // Tailored classes for specific UI elements
}

export const themeConfig: Record<PillarState, ThemeConfig> = {
  [PillarState.CORE_HUB]: {
    name: "Core Hub",
    font: "var(--font-jetbrains-mono), monospace",
    background: "bg-[#0B132B]", // Midnight Navy
    bgHex: "#0B132B",
    textPrimary: "text-[#B2B2B2]", // Titanium Silver
    accent: "text-[#00FFC2]", // Vibrant Teal
    accentHex: "#00FFC2",
    uiStyle: "border border-[#00FFC2]/30 shadow-[0_0_15px_rgba(0,255,194,0.2)]", // Tactical teal glow
  },
  [PillarState.AMENIC_FILMS]: {
    name: "Amenic Films",
    font: "var(--font-jost), sans-serif",
    background: "bg-[#080808]", // Deep Shadows
    bgHex: "#080808",
    textPrimary: "text-[#B2B2B2]", // Titanium Silver
    accent: "text-[#003D3D]", // Cinematic Teal
    accentHex: "#003D3D",
    uiStyle: "backdrop-blur-md bg-white/5 border border-[#003D3D]/20", // Thematic transparency
  },
  [PillarState.FUZARA_DEV]: {
    name: "Fuzara Dev",
    font: "var(--font-inter), sans-serif",
    background: "bg-[#000000]", // Vantage Black
    bgHex: "#000000",
    textPrimary: "text-white",
    accent: "text-[#39FF14]", // Neon Green
    accentHex: "#39FF14",
    uiStyle: "border border-[#39FF14]/20 shadow-[0_0_20px_rgba(57,255,20,0.1)] rounded-sm", // Cyberpunk precision
  },
  [PillarState.DRONE_MASTERS]: {
    name: "Drone Masters",
    font: "var(--font-roboto), sans-serif",
    background: "bg-[#2D2D2D]", // Charcoal Grey
    bgHex: "#2D2D2D",
    textPrimary: "text-white",
    accent: "text-[#FF6B00]", // Industrial High-Vis Orange
    accentHex: "#FF6B00",
    uiStyle: "shadow-2xl border border-[#FF6B00]/40 bg-[#1A1A1A]", // Rugged industrial feel
  },
};
