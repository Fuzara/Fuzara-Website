import React from "react";

export const NoiseOverlay = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-50 h-full w-full opacity-20">
      <svg
        className="absolute inset-0 h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="noiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.65"
            numOctaves="3"
            stitchTiles="stitch"
          />
        </filter>
        <rect
          width="100%"
          height="100%"
          filter="url(#noiseFilter)"
          opacity="0.4"
        />
      </svg>
    </div>
  );
};
