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
  const [columns, setColumns] = useState<string[]>([]);
  const router = useRouter();

  const navigate = (href: string) => {
    // Pick ONE color for the entire wipe to make all columns uniform, 
    // alternating frequently between black and white
    const selectedColor = Math.random() > 0.5 ? "bg-black" : "bg-[#Fcfbf9]";
    
    // Create an array of 5 columns, all sharing the same color
    const newColumns = Array(5).fill(selectedColor);
    
    setColumns(newColumns);
    setIsWiping(true);

    // Duration is 0.6s. Stagger is 0.08s * 4 = 0.32s. Total = 0.92s.
    // We wait 950ms before pushing the route to ensure screen is fully covered.
    setTimeout(() => {
      router.push(href);
      
      // Wait for new page to paint
      setTimeout(() => {
        setIsWiping(false);
      }, 100);
    }, 950);
  };

  return (
    <TransitionContext.Provider value={{ navigate }}>
      {children}
      
      {/* The Wipe Layer */}
      <AnimatePresence>
        {isWiping && (
          <div className="fixed inset-0 z-[9999] w-full h-screen flex pointer-events-none">
            {columns.map((colColor, i) => (
              <motion.div
                key={i}
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                exit={{ y: "-100%" }}
                transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1], delay: i * 0.08 }}
                className={`flex-1 h-full ${colColor} pointer-events-auto`}
              />
            ))}
          </div>
        )}
      </AnimatePresence>
    </TransitionContext.Provider>
  );
}
