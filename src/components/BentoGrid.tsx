"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { TransitionLink as Link } from "@/components/TransitionLink";
import { SpeakerHifi, MicrophoneStage, Sliders, MusicNotes, Waves, FilmStrip } from "@phosphor-icons/react/dist/ssr";

const SERVICES = [
  {
    title: "Dubbing & Vocals",
    desc: "Vocal booths designed for pristine dialogue capturing.",
    icon: MicrophoneStage,
    colSpan: "md:col-span-2",
    rowSpan: "md:row-span-2",
    image: "/assets/service-dubbing.jpg",
    slug: "dubbing"
  },
  {
    title: "Mixing and mastering",
    desc: "Blend sound into your projects perfectly.",
    icon: Sliders,
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-1",
    image: "/assets/service-mixing.jpg",
    slug: "mixing-mastering"
  },
  {
    title: "BGM Scoring",
    desc: "Score and compose to make visuals leak emotions.",
    icon: MusicNotes,
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-1",
    image: "/assets/service-bgm.jpg",
    slug: "bgm-scoring"
  },
  {
    title: "Sound design",
    desc: "SFX(Sound Effects) and Ambience layers.",
    icon: Waves,
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-2",
    image: "/assets/service-sound.jpg",
    slug: "sound-design"
  },
  {
    title: "Rec Spaces",
    desc: "Podcast Studio and premium spaces.",
    icon: SpeakerHifi,
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-1",
    image: "/assets/service-rec.jpg",
    slug: "rec-spaces"
  },
  {
    title: "Foley Sounds",
    desc: "Covering the entire envelope of custom foley.",
    icon: FilmStrip,
    colSpan: "md:col-span-2",
    rowSpan: "md:row-span-1",
    image: "/assets/studio_wall.jpg",
    slug: "foley-sounds"
  },
];

export default function BentoGrid() {
  return (
    <section className="py-4 px-6 md:px-12 max-w-[90rem] mx-auto w-full bg-[#Fcfbf9]">
      <div className="mb-8">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display  tracking-tight mb-4 text-[#0a0a0a]">
          Audio Services
        </h2>
        <p className="text-black/60 max-w-3xl text-xl font-light leading-relaxed">
          Creative Sound Design services that cover the entire envelope of sound design - Foley sounds, SFX, Ambience layers, Dialogue Capturing, Vocal studio, BGM score and Other services.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 grid-flow-dense auto-rows-[200px] md:auto-rows-[240px]">
        {SERVICES.map((service, i) => (
          <Link key={service.title} href={`/services/${service.slug}`} className={`${service.colSpan} ${service.rowSpan} block cursor-pointer`}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.32, 0.72, 0, 1] }}
              className={`h-full w-full group relative rounded-[2.5rem] overflow-hidden bg-white shadow-sm border border-black/5`}
            >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <Image 
                src={service.image} 
                alt={service.title} 
                fill 
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
            
            {/* Gradient Overlay for Legibility */}
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#Fcfbf9]/95 via-[#Fcfbf9]/60 to-[#Fcfbf9]/20 transition-opacity duration-500 group-hover:opacity-90" />
            
            {/* Inner Content */}
            <div className="relative z-20 h-full w-full p-8 flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center mb-6 border border-black/5 shadow-sm group-hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]">
                  <service.icon size={28} className="text-black/80" weight="light" />
                </div>
              </div>
              
              <div>
                <h3 className="font-display text-2xl  text-black mb-2 drop-shadow-sm">
                  {service.title}
                </h3>
              </div>
            </div>
          </motion.div>
          </Link>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <Link
          href="/services"
          className="group flex items-center justify-center rounded-full border border-black/20 bg-transparent text-black px-8 py-3 transition-all duration-300 hover:bg-black hover:text-white hover:border-black shadow-sm"
        >
          <span className="text-sm font-medium tracking-[0.15em] uppercase">
            View all services
          </span>
        </Link>
      </div>
    </section>
  );
}
