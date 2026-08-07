"use client";

import { useRef } from "react";
import { TransitionLink as Link } from "@/components/TransitionLink";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const titleLine1Ref = useRef<HTMLDivElement>(null);
  const titleLine2Ref = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // 1. Initial Cinematic Reveal Timeline
    const tl = gsap.timeline({
      defaults: { ease: "expo.out", duration: 1.6 }
    });

    // Image slowly scales down and fades in
    tl.fromTo(
      imageRef.current,
      { scale: 1.15, filter: "blur(10px)" },
      { scale: 1.05, filter: "blur(0px)", duration: 2.5 }
    );

    // Staggered text reveal (words)
    const line1Words = titleLine1Ref.current?.querySelectorAll(".word-inner");
    const line2Words = titleLine2Ref.current?.querySelectorAll(".word-inner");

    tl.fromTo(
      [line1Words, line2Words],
      { yPercent: 120, rotateZ: 4 },
      { yPercent: 0, rotateZ: 0, stagger: 0.04 },
      "-=1.8"
    );

    // Subtitle fade & slight slide
    tl.fromTo(
      subtitleRef.current,
      { opacity: 0, y: 30, filter: "blur(4px)" },
      { opacity: 1, y: 0, filter: "blur(0px)", duration: 1.2 },
      "-=1.4"
    );

    // Buttons
    tl.fromTo(
      ctaRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1.2 },
      "-=1.2"
    );

    // 2. Scroll Parallax Effect
    gsap.to(imageRef.current, {
      yPercent: 15,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1.2,
      }
    });

  }, { scope: containerRef });

  // Helper to wrap words for cinematic reveal
  const wrapWords = (text: string) => {
    return text.split(" ").map((word, i) => (
      <span key={i} className="inline-block overflow-hidden pb-2 -mb-2 align-top">
        <span className="word-inner inline-block origin-top-left will-change-transform pr-[0.3em]">
          {word}
        </span>
      </span>
    ));
  };

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-[100dvh] flex flex-col items-center justify-center pt-32 pb-24 overflow-hidden"
    >
      {/* Parallax Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-[#Fcfbf9]">
        <Image 
          ref={imageRef}
          src="/assets/hero-v2.jpg" 
          alt="The Storyteller Studio - Bangalore" 
          fill 
          sizes="100vw"
          className="object-cover origin-center opacity-80"
          priority
        />
        {/* Cinematic Gradient Overlay (clear in center/top, fading to solid at bottom) */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#Fcfbf9]/40 via-[#Fcfbf9]/60 to-[#Fcfbf9] backdrop-blur-[1px]" />
      </div>

      <div className="max-w-7xl w-full mx-auto px-6 md:px-12 flex flex-col items-center text-center z-10 relative">
        
        {/* Eyebrow */}
        <div className="overflow-hidden mb-8">
          <span className="block text-sm md:text-base font-medium tracking-[0.2em] uppercase text-black/50" style={{ opacity: 0 }} ref={(el) => {
            // A subtle fade in for the eyebrow could be added, but we'll let it be animated by standard CSS or GSAP later. Let's just animate it with the subtitle.
            if (subtitleRef.current && el) {
               subtitleRef.current.appendChild(el) // just a hacky way to say we group it, actually let's just animate it properly below
            }
          }}>
            {/* The Storyteller Studio */}
          </span>
        </div>

        <h1 className="flex flex-col items-center justify-center text-[11vw] md:text-[8vw] lg:text-[7vw] font-display text-black mb-6 text-balance max-w-6xl tracking-[-0.04em] leading-[0.9]">
          <div ref={titleLine1Ref} className="flex flex-wrap justify-center overflow-hidden">
            {wrapWords("Your Audio")}
          </div>
          <div ref={titleLine2Ref} className="flex flex-wrap justify-center overflow-hidden italic text-black/80 pr-[0.1em]">
            {wrapWords("Buddy.")}
          </div>
        </h1>

        <p 
          ref={subtitleRef}
          className="text-xl md:text-3xl text-black/60 max-w-5xl text-center mb-12 font-sans font-light leading-snug"
        >
          <span className="block mb-2">Good Audio design makes the visuals leak emotions.</span>
          <span className="block text-balance">Sound design available and affordable<br className="hidden sm:block"/> for all your project needs.</span>
        </p>

        <div 
          ref={ctaRef}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
          <Link
            href="/services"
            className="group flex items-center justify-center rounded-full bg-black pl-8 pr-2 py-2 text-white transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-black/90 hover:scale-[0.98] active:scale-95 shadow-xl shadow-black/10"
          >
            <span className="text-sm font-medium tracking-[0.15em] uppercase mr-6">
              Hire our Services
            </span>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 transition-transform duration-500 group-hover:bg-white/30">
              <svg
                width="16"
                height="16"
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
          
          <Link
            href="/portfolio"
            className="group flex items-center justify-center rounded-full border border-black/10 bg-black/5 backdrop-blur-md text-black px-10 py-4 transition-all duration-500 hover:bg-black/10 hover:border-black/20"
          >
            <span className="text-sm font-medium tracking-[0.15em] uppercase">
              Our Portfolio
            </span>
          </Link>
        </div>
      </div>
      
    </section>
  );
}
