"use client";

import { useEffect, useRef } from "react";
import { useGlobalState } from "@/components/GlobalStateProvider";

export const useActivityLog = () => {
  const { addGlobalLog, activePillar } = useGlobalState();
  const idleTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  // Throttle Scroll helper
  const lastScrollY = useRef(0);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Use a ref to hold the latest addGlobalLog to prevent stale closures
  // when the function is used inside the window event listeners.
  const addLogRef = useRef(addGlobalLog);
  useEffect(() => {
    addLogRef.current = addGlobalLog;
  }, [addGlobalLog]);

  // Generate a fake anonymized IP and shortened UA
  const networkData = useRef({
    ip: `192.168.1.${Math.floor(Math.random() * 255)} [REDACTED]`,
    ua: typeof window !== "undefined" ? navigator.userAgent.split(" ").pop() || "UNKNOWN_CLIENT" : "UNKNOWN"
  });

  const resetIdleTimer = () => {
    if (idleTimeoutRef.current) clearTimeout(idleTimeoutRef.current);
    idleTimeoutRef.current = setTimeout(() => {
      addLogRef.current("[STATUS]: Connection_Stagnant - Monitoring Heartbeat...");
    }, 30000); // 30 seconds idle
  };

  useEffect(() => {
    // Initial Handshake Log
    addLogRef.current(`[NETWORK]: IP_ADDRESS: ${networkData.current.ip}`);
    addLogRef.current(`[SYSTEM]: BROWSER_HANDSHAKE: ${networkData.current.ua}`);
    addLogRef.current(`[SECURITY]: USER_SESSION_ENCRYPTED: TRUE`);

    // 1. Click Tracking
    const handleClick = (e: MouseEvent) => {
      resetIdleTimer();
      const target = e.target as HTMLElement;
      
      let description = "UI_ELEMENT";
      if (target.tagName.toLowerCase() === "button") description = `BUTTON_${target.innerText.substring(0, 15).replace(/\s/g, "_")}`;
      else if (target.closest("button")) description = "INTERACTIVE_REGION";
      else if (target.tagName.toLowerCase() === "a") description = "HYPERLINK";
      else if (target.id) description = `NODE_${target.id}`;
      else if (target.className && typeof target.className === 'string') {
        const classes = target.className.split(" ");
        if (classes.length > 0 && classes[0] !== "") description = `NODE_${classes[0]}`;
      }

      addLogRef.current(`[EVENT]: Action Intercepted -> ${description.toUpperCase()}`);
    };

    // 2. Scroll Tracking (Throttled)
    const handleScroll = () => {
      resetIdleTimer();
      if (scrollTimeoutRef.current) return;
      
      scrollTimeoutRef.current = setTimeout(() => {
        const currentY = window.scrollY;
        const diff = Math.abs(currentY - lastScrollY.current);
        
        if (diff > 100) {
          addLogRef.current(`[DATA]: Vertical_Offset_Detected: absolute_y_${Math.round(currentY)}px`);
          lastScrollY.current = currentY;
        }
        scrollTimeoutRef.current = null;
      }, 500); 
    };

    // Attach Listeners
    window.addEventListener("click", handleClick);
    window.addEventListener("scroll", handleScroll);
    resetIdleTimer();

    return () => {
      window.removeEventListener("click", handleClick);
      window.removeEventListener("scroll", handleScroll);
      if (idleTimeoutRef.current) clearTimeout(idleTimeoutRef.current);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, []); 

  // 3. Pillar Change Tracking
  useEffect(() => {
    addLogRef.current(`[PROTOCOL]: Initializing ${activePillar}_ENVIRONMENT`);
  }, [activePillar]);
};
