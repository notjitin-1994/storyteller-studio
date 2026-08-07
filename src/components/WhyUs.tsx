"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WHY_US_ITEMS = [
  {
    title: "Industry-Standard\nAudio Engineering",
    description: "We don't just hit record. Our seasoned audio engineers bring decades of collective ear-training to ensure pristine dialogue clarity, wide dynamic range, and flawless frequency balance across your entire project.",
    image: "/assets/engineer-v2.jpg",
  },
  {
    title: "Precision Mixing\n& Mastering",
    description: "Translating perfectly from massive cinema speakers to smartphone earbuds. Our rigorous mixing and mastering pipeline guarantees punchy, broadcast-compliant audio that stands out everywhere your content is played.",
    image: "/assets/service-mixing.jpg",
  },
  {
    title: "Immersive\nSound Design",
    description: "Silence is a canvas, and sound is the paint. We meticulously craft bespoke foley, ambient textures, and cinematic soundscapes that breathe life into your visuals and completely immerse your audience.",
    image: "/assets/service-sound.jpg",
  },
  {
    title: "World-Class\nAcoustic Environment",
    description: "Recorded in meticulously treated, zero-noise-floor tracking rooms. Say goodbye to room echo, background hum, and harsh reflections—we deliver crystal-clear stems that require absolutely zero rescue missions.",
    image: "/assets/studio_wall.jpg",
  },
  {
    title: "Seamless\nCollaboration",
    description: "Your vision, seamlessly amplified. We plug directly into your creative pipeline, offering rapid turnarounds, highly organized stem deliveries, and frictionless communication to keep your production moving forward.",
    image: "/assets/service-rec.jpg",
  }
];

export default function WhyUs() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const rightRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Gentle fade for right side items
      rightRefs.current.forEach((el) => {
        if (!el) return;
        gsap.fromTo(
          el,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full bg-[#Fcfbf9] overflow-visible py-4">
      <div className="max-w-[90rem] mx-auto px-6 md:px-12 relative z-10 flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
        
        {/* Left Side (Sticky in Viewport) */}
        <div className="w-full lg:w-1/2 flex flex-col justify-start lg:sticky lg:top-[140px] lg:h-fit self-start pb-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display tracking-tight mb-6 text-[#0a0a0a]">
            Why us
          </h2>
          <div className="space-y-6">
            <h3 className="text-2xl text-black/80 font-display">Why should you hire our services?</h3>
            <p className="text-black/60 text-xl max-w-lg text-pretty font-light leading-relaxed">
              Great visuals capture attention, but it’s the audio that captures the heart. Poor sound design is the fastest way to lose an audience. If you've been creating for a while, you already know—premium audio isn't a luxury, it's the absolute baseline for professional storytelling. We elevate your project with broadcast-quality engineering that makes your audience feel every frame.
            </p>
          </div>
        </div>

        {/* Right Side (Scrolls past the sticky left side) */}
        <div className="w-full lg:w-1/2 flex flex-col gap-16 md:gap-24 pb-24">
          {WHY_US_ITEMS.map((item, index) => (
            <div 
              key={item.title}
              ref={(el) => { rightRefs.current[index] = el; }}
              className="flex flex-col gap-10"
            >
              <div className="w-full h-[400px] md:h-[600px] rounded-[2.5rem] bg-white border border-black/5 p-2 shadow-sm relative overflow-hidden group">
                <div className="relative w-full h-full rounded-[calc(2.5rem-0.5rem)] overflow-hidden">
                  <Image 
                    src={item.image} 
                    alt={item.title.replace('\n', ' ')} 
                    fill 
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
                </div>
              </div>
              <div className="pl-6 border-l-2 border-black/10">
                <h3 className="text-3xl md:text-4xl font-display text-black mb-4 tracking-tight whitespace-pre-line">
                  {item.title}
                </h3>
                <p className="text-black/60 text-lg md:text-xl font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}

          {/* View Portfolio Button */}
          <div className="mt-8 flex justify-start">
            <Link
              href="/portfolio"
              className="group flex items-center justify-center rounded-full border border-black/20 bg-transparent text-black px-8 py-3 transition-all duration-300 hover:bg-black hover:text-white hover:border-black shadow-sm"
            >
              <span className="text-sm font-medium tracking-[0.15em] uppercase">
                View Portfolio
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
