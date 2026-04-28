import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Jost, Roboto } from "next/font/google";
import { GlobalStateProvider } from "@/components/GlobalStateProvider";
import { PillarSwitcher } from "@/components/PillarSwitcher";
import { BackgroundEngine } from "@/components/BackgroundEngine";
import { NoiseOverlay } from "@/components/NoiseOverlay";
import { ActivityLogProvider } from "@/components/ActivityLogProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fuzara Technologies Ecosystem",
  description: "The Multi-Pillar Web Ecosystem",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} ${jost.variable} ${roboto.variable} antialiased`}
      >
        <GlobalStateProvider>
          <ActivityLogProvider>
            {/* Global Architecture Elements */}
            <NoiseOverlay />
            <BackgroundEngine />
            
            <main className="relative z-10">{children}</main>
            
            {/* Tactical HUD Global Navigation */}
            <PillarSwitcher />
          </ActivityLogProvider>
        </GlobalStateProvider>
      </body>
    </html>
  );
}
