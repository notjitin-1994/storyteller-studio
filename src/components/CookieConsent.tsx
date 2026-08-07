"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { Cookie } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      // Small delay so it doesn't pop up instantly on page load
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem("cookie_consent", "all");
    setIsVisible(false);
  };

  const handleEssentialOnly = () => {
    localStorage.setItem("cookie_consent", "essential");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50, transition: { duration: 0.3 } }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-12 md:max-w-md z-[100]"
        >
          <div className="bg-white/95 backdrop-blur-2xl rounded-3xl p-6 shadow-2xl shadow-black/10 border border-black/5 flex flex-col gap-5 relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-40 h-40 bg-black/5 rounded-full blur-3xl" />
            
            <div className="relative z-10 flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center shrink-0">
                <Cookie size={20} className="text-black" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-black mb-1">We use cookies</h3>
                <p className="text-sm text-black/60 font-light leading-relaxed">
                  We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
                </p>
              </div>
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row items-center gap-3 w-full">
              <button
                onClick={handleAcceptAll}
                className="w-full sm:w-auto flex-1 bg-black text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-black/80 transition-colors"
              >
                Accept All
              </button>
              <button
                onClick={handleEssentialOnly}
                className="w-full sm:w-auto flex-1 bg-black/5 text-black px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-black/10 transition-colors"
              >
                Essential Only
              </button>
            </div>
            
            <div className="relative z-10 text-center">
              <Link href="/privacy-policy" className="text-xs text-black/40 hover:text-black transition-colors underline underline-offset-2">
                Read our Privacy Policy
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
