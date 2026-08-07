"use client";

import Link from "next/link";
import { motion } from "motion/react";

export default function WorkTogether() {
  return (
    <section className="relative w-full py-8 flex items-center justify-center overflow-hidden bg-[#Fcfbf9]">
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-display  tracking-tight text-[#0a0a0a] mb-6"
        >
          Let’s Work <span className="text-black/40">Together</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-black/60 max-w-2xl text-pretty mb-8 font-sans font-light leading-relaxed"
        >
          Creative Sound Design services that cover the entire envelope of sound design - Foley sounds, SFX(Sound Effects), Ambience layers, Dialogue Capturing, Vocal studio, BGM score and Other services.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Link
            href="?booking=true"
            scroll={false}
            className="group w-fit mx-auto flex items-center justify-center rounded-full bg-black pl-5 pr-1.5 py-1.5 text-white transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:scale-[0.98] active:scale-95 shadow-lg"
          >
            <span className="text-sm font-semibold tracking-wide uppercase mr-4">
              Book Now
            </span>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:scale-105">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-white transition-transform duration-500 group-hover:rotate-45"
              >
                <path
                  d="M1 11L11 1M11 1H3.5M11 1V8.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
