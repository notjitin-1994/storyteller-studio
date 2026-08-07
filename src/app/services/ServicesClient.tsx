"use client";

import { useState } from "react";
import Image from "next/image";
import { TransitionLink as Link } from "@/components/TransitionLink";
import { ArrowUpRight, X } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

const SERVICES = [
  {
    title: "Dubbing & Vocals",
    slug: "dubbing",
    category: "Audio Services",
    image: "/assets/service-dubbing.jpg",
    description: "Pristine dialogue capturing in acoustically treated vocal booths."
  },
  {
    title: "Mixing & Mastering",
    slug: "mixing-mastering",
    category: "Audio Services",
    image: "/assets/service-mixing.jpg",
    description: "The final polish that makes your project stand out with width, depth, and punch."
  },
  {
    title: "BGM Scoring",
    slug: "bgm-scoring",
    category: "Audio Services",
    image: "/assets/service-bgm.jpg",
    description: "Custom background music that perfectly complements the narrative."
  },
  {
    title: "Sound Design",
    slug: "sound-design",
    category: "Audio Services",
    image: "/assets/service-sound.jpg",
    description: "Immersive audio environments using layered SFX and ambiences."
  },
  {
    title: "Rec Spaces",
    slug: "rec-spaces",
    category: "Audio Services",
    image: "/assets/service-rec.jpg",
    description: "Elegant, acoustically treated rooms for podcasts and interviews."
  },
  {
    title: "Foley Sounds",
    slug: "foley-sounds",
    category: "Audio Services",
    image: "/assets/studio_wall.jpg",
    description: "Custom performed Foley for hyper-realistic sound textures."
  },
  {
    title: "Product Photography & Videography",
    slug: "product-media",
    category: "Photography & Videography",
    image: "/assets/service-dubbing.jpg",
    description: "Premium visual production tailored for e-commerce and campaigns."
  },
  {
    title: "Model Photography & Videography",
    slug: "model-media",
    category: "Photography & Videography",
    image: "/assets/service-mixing.jpg",
    description: "Striking visual narratives featuring models and art direction."
  },
];

const CATEGORIES = ["Audio Services", "Photography & Videography"];

export default function ServicesClient() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const filteredServices = activeFilter 
    ? SERVICES.filter(s => s.category === activeFilter)
    : SERVICES;

  return (
    <main className="min-h-screen bg-[#Fcfbf9] pt-[140px] pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-16">
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-widest uppercase text-black/50 mb-4">
              Capabilities
            </span>
            <h1 className="text-5xl md:text-7xl font-display leading-[1] tracking-tight text-black max-w-3xl">
              Everything you need to tell your story.
            </h1>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap items-center gap-3">
            {CATEGORIES.map((cat) => {
              const isActive = activeFilter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(isActive ? null : cat)}
                  className={cn(
                    "group flex items-center gap-2 px-5 py-2.5 rounded-full border text-sm font-medium transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]",
                    isActive 
                      ? "bg-black border-black text-white shadow-lg scale-105" 
                      : "bg-white/50 border-black/10 text-black/60 hover:bg-black/5 hover:text-black hover:border-black/20"
                  )}
                >
                  <span>{cat}</span>
                  {isActive && (
                    <div className="flex items-center justify-center bg-white/20 rounded-full p-0.5 ml-1 transition-transform hover:scale-110">
                      <X size={12} weight="bold" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <Link 
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group flex flex-col block overflow-hidden rounded-[2rem] bg-white border border-black/5 shadow-sm hover:shadow-xl transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-2"
            >
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <Image 
                  src={service.image} 
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 h-10 w-10 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center translate-x-4 -translate-y-4 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100">
                  <ArrowUpRight size={20} className="text-black" />
                </div>
                <div className="absolute top-4 left-4 px-3 py-1.5 bg-white/90 backdrop-blur-md rounded-full">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-black/70">
                    {service.category}
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-display text-black mb-3 group-hover:text-black/70 transition-colors">
                  {service.title}
                </h3>
                <p className="text-black/60 font-light leading-relaxed mt-auto">
                  {service.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
