"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TerminalSquareIcon, XIcon, MinusIcon, Maximize2Icon } from "lucide-react";
import { useGlobalState } from "./GlobalStateProvider";

export const ForensicTerminal = () => {
  const { globalLogs } = useGlobalState();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [displayedLogs, setDisplayedLogs] = useState<string[]>([]);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [flash, setFlash] = useState(false);

  // Scroll ref
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [displayedLogs, displayedText]);

  // Typewriter effect prioritizing new incoming logs 
  const logQueue = useRef<string[]>([]);

  useEffect(() => {
    // Determine what new logs arrived and push to queue
    const diff = globalLogs.length - displayedLogs.length - (isTyping ? 1 : 0) - logQueue.current.length;
    if (diff > 0) {
       const newLogs = globalLogs.slice(-diff);
       logQueue.current.push(...newLogs);
       
       // If a new event/forbidden log comes in, trigger the visual flash
       if (newLogs.some(l => l.includes("[EVENT]") || l.includes("FORBIDDEN"))) {
         setFlash(true);
         setTimeout(() => setFlash(false), 200);
       }
    }
  }, [globalLogs]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const processQueue = () => {
      if (logQueue.current.length > 0 && !isTyping) {
        setIsTyping(true);
        const currentString = logQueue.current.shift() || "";
        let charIndex = 0;

        const typeChar = () => {
          if (charIndex < currentString.length) {
            setDisplayedText(currentString.slice(0, charIndex + 1));
            charIndex++;
            timeout = setTimeout(typeChar, 10 + Math.random() * 20); // Very fast typing
          } else {
            setIsTyping(false);
            setDisplayedLogs(prev => [...prev, currentString]);
            setDisplayedText("");
            // Immediately process next if queue is backed up
            if (logQueue.current.length > 0) {
                timeout = setTimeout(processQueue, 50);
            }
          }
        };
        typeChar();
      }
    };

    processQueue();

    return () => clearTimeout(timeout);
  }, [isTyping, globalLogs]);

  return (
    <motion.div 
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      className="fixed bottom-6 left-6 z-40 font-mono text-[12px] tracking-wide"
      style={{ width: isCollapsed ? 'auto' : '450px' }}
    >
      <div 
        className={`backdrop-blur-[10px] border rounded-lg overflow-hidden flex flex-col relative transition-colors duration-200 ${
          flash ? "bg-red-500/20 border-red-500 shadow-[0_0_30px_rgba(239,68,68,0.5)]" : "bg-[#0A0A0A]/90 border-[#10b981]/30 shadow-[0_0_20px_rgba(16,185,129,0.15)]"
        }`}
      >
        
        {/* SVG Scanning Corners */}
        <div className={`absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 m-1 transition-colors ${flash ? "border-red-500" : "border-[#10b981]"}`} />
        <div className={`absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 m-1 transition-colors ${flash ? "border-red-500" : "border-[#10b981]"}`} />
        <div className={`absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 m-1 transition-colors ${flash ? "border-red-500" : "border-[#10b981]"}`} />
        <div className={`absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 m-1 transition-colors ${flash ? "border-red-500" : "border-[#10b981]"}`} />

        {/* Header */}
        <div className={`px-3 py-2 flex justify-between items-center border-b relative z-10 transition-colors ${flash ? "bg-red-500/20 border-red-500/50 text-red-500" : "bg-[#10b981]/10 border-[#10b981]/20 text-[#10b981]"}`}>
          <div className="flex items-center gap-2">
            <TerminalSquareIcon size={14} />
            <span className="font-bold uppercase tracking-widest text-[10px]">Aero-Shield OS v9.2</span>
          </div>
          <div className="flex gap-3">
            <button onClick={() => setIsCollapsed(!isCollapsed)} className="hover:opacity-100 opacity-60 transition-opacity">
              {isCollapsed ? <Maximize2Icon size={12} /> : <MinusIcon size={12} />}
            </button>
            <button className="hover:text-red-500 opacity-60 transition-colors">
              <XIcon size={12} />
            </button>
          </div>
        </div>

        {/* Terminal Body */}
        <AnimatePresence>
          {!isCollapsed && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "220px", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className={`p-4 overflow-y-auto flex flex-col gap-1 z-10 custom-scrollbar transition-colors ${flash ? "text-red-400" : "text-[#10b981]"}`}
            >
              <div className={`flex justify-between items-center mb-2 pb-2 border-b transition-colors ${flash ? "border-red-500/20" : "border-[#10b981]/10"}`}>
                <span className="text-[10px] opacity-60">SECURE TERMINAL ACTIVE</span>
                
                {/* Live Pulse Waveform */}
                <div className="flex items-center gap-[2px] h-3">
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={flash ? "w-1 bg-red-500" : "w-1 bg-[#10b981]"}
                      animate={{
                        height: isTyping ? ["4px", "12px", "4px"] : "4px"
                      }}
                      transition={{
                        duration: 0.5,
                        repeat: Infinity,
                        delay: i * 0.1
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Keep only the last 20 visible on UI to avoid DOM bloat */}
              {displayedLogs.slice(-20).map((log, index) => (
                <div key={index} className="leading-relaxed opacity-80 break-words">
                  <span className="opacity-50 mr-2">{'>'}</span> {log}
                </div>
              ))}
              
              <div className="leading-relaxed flex">
                <span className="opacity-50 mr-2">{'>'}</span> 
                <span className="opacity-80 break-words">{displayedText}</span>
                <motion.span 
                  animate={{ opacity: [1, 0, 1] }} 
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className={`w-2 h-3 inline-block ml-1 align-middle ${flash ? "bg-red-500" : "bg-[#10b981]"}`}
                />
              </div>
              <div ref={bottomRef} className="h-1" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(16, 185, 129, 0.05);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(16, 185, 129, 0.2);
          border-radius: 4px;
        }
      `}} />
    </motion.div>
  );
};
