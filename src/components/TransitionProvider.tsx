"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useRouter } from "next/navigation";

interface TransitionContextType {
  navigate: (href: string) => void;
}

const TransitionContext = createContext<TransitionContextType | undefined>(undefined);

export function useTransition() {
  const context = useContext(TransitionContext);
  if (!context) {
    throw new Error("useTransition must be used within a TransitionProvider");
  }
  return context;
}

export function TransitionProvider({ children }: { children: ReactNode }) {
  const [isWiping, setIsWiping] = useState(false);
  const [color, setColor] = useState("bg-black");
  const router = useRouter();

  const navigate = (href: string) => {
    // Randomize color
    setColor(Math.random() > 0.5 ? "bg-white" : "bg-black");
    setIsWiping(true);

    // Wait for the "wipe in" animation to finish before navigating
    setTimeout(() => {
      router.push(href);
      
      // Wait for the new page to mount and paint, then wipe out
      setTimeout(() => {
        setIsWiping(false);
      }, 100);
    }, 600); // match the duration of the wipe-in animation
  };

  return (
    <TransitionContext.Provider value={{ navigate }}>
      {children}
      
      {/* The Wipe Layer */}
      <AnimatePresence>
        {isWiping && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className={`fixed inset-0 z-[9999] w-full h-screen ${color}`}
          />
        )}
      </AnimatePresence>
    </TransitionContext.Provider>
  );
}
