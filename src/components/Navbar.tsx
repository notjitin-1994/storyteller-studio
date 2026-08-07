"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { List, X } from "@phosphor-icons/react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { 
    name: "Services", 
    href: "/services",
    dropdownColumns: [
      {
        title: "Audio Services",
        items: [
          { name: "Dubbing & Vocals", href: "/services/dubbing" },
          { name: "Mixing & Mastering", href: "/services/mixing-mastering" },
          { name: "BGM Scoring", href: "/services/bgm-scoring" },
          { name: "Sound Design", href: "/services/sound-design" },
          { name: "Rec Spaces", href: "/services/rec-spaces" },
          { name: "Foley Sounds", href: "/services/foley-sounds" },
        ]
      },
      {
        title: "Photography & Videography",
        items: [
          { name: "Product Photography & Videography", href: "/services/product-media" },
          { name: "Model Photography & Videography", href: "/services/model-media" },
        ]
      }
    ]
  },
  { name: "Blogs", href: "/blogs" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [expandedCols, setExpandedCols] = useState<Record<string, boolean>>({});

  const toggleCol = (title: string) => {
    setExpandedCols(prev => ({ ...prev, [title]: !prev[title] }));
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-6 left-0 right-0 z-50 transition-all duration-700 px-6 md:px-12",
        )}
      >
        <div className="relative z-20 flex w-full items-center justify-between pl-4 pr-3 py-3 md:px-6 md:py-4 rounded-full bg-white/80 backdrop-blur-2xl outline outline-[0.5px] outline-black/15 shadow-[0_8px_30px_rgba(0,0,0,0.04)] gap-4 md:gap-12">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-8 h-8 rounded-full overflow-hidden shrink-0 group-hover:scale-105 transition-transform duration-500">
              <Image src="/logo.png" alt="The Storyteller Studio" fill sizes="40px" priority className="object-contain" />
            </div>
            <span className="font-sans font-semibold tracking-tight text-black whitespace-nowrap">
              The Storyteller Studio
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <div key={link.name} className="relative group/nav py-2">
                <Link
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors duration-300 relative z-10",
                    pathname === link.href ? "text-black" : "text-black/50 hover:text-black"
                  )}
                >
                  {link.name}
                </Link>

                {/* Invisible hover bridge to maintain hover state across the gap */}
                {link.dropdownColumns && (
                  <div className="absolute top-full left-0 w-full h-6 bg-transparent z-20" />
                )}

                {/* Desktop Dropdown */}
                {link.dropdownColumns && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-[22px] opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] translate-y-2 group-hover/nav:translate-y-0 z-30">
                    <div className="w-[450px] bg-white/80 backdrop-blur-2xl outline outline-[0.5px] outline-black/15 rounded-2xl shadow-xl flex p-4 gap-6">
                      {link.dropdownColumns.map((col) => (
                        <div key={col.title} className="flex-1 flex flex-col gap-1">
                          <h4 className="text-xs font-semibold text-black/40 uppercase tracking-wider mb-2 px-3">{col.title}</h4>
                          {col.items.map((subLink) => (
                            <Link
                              key={subLink.name}
                              href={subLink.href}
                              className="px-3 py-2 text-sm font-medium text-black/60 hover:text-black hover:bg-black/5 rounded-xl transition-colors duration-200"
                            >
                              {subLink.name}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            <Link
              href="?booking=true"
              scroll={false}
              className="group flex items-center rounded-full bg-black pl-5 pr-1.5 py-1.5 text-white transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:scale-[0.98] active:scale-95"
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
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 shrink-0 rounded-full bg-black/5 border border-black/5"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} className="text-black" /> : <List size={20} className="text-black" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-3xl overflow-y-auto flex flex-col pt-32 pb-12 md:hidden"
          >
            <nav className="flex flex-col items-start gap-8 w-full px-10">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                  className="w-full flex flex-col items-start gap-4"
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="font-display text-4xl text-black"
                  >
                    {link.name}
                  </Link>

                  {/* Mobile Dropdown Sublinks */}
                  {link.dropdownColumns && (
                    <div className="flex flex-col items-start gap-6 mt-4 mb-4 w-full pl-4 border-l border-black/10">
                      {link.dropdownColumns.map((col) => {
                        const isExpanded = expandedCols[col.title] || false;
                        return (
                          <div key={col.title} className="flex flex-col items-start w-full">
                            <button
                              onClick={() => toggleCol(col.title)}
                              className="text-lg font-semibold text-black/80 uppercase tracking-widest mb-1 flex items-center justify-between w-full text-left"
                            >
                              <span>{col.title}</span>
                              <span className="text-xl leading-none ml-4">{isExpanded ? '−' : '+'}</span>
                            </button>
                            
                            <AnimatePresence>
                              {isExpanded && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  className="flex flex-col items-start gap-3 w-full overflow-hidden pt-3"
                                >
                                  {col.items.map((subLink) => (
                                    <Link
                                      key={subLink.name}
                                      href={subLink.href}
                                      onClick={() => setIsOpen(false)}
                                      className="font-sans text-xl font-light text-black/60 hover:text-black"
                                    >
                                      {subLink.name}
                                    </Link>
                                  ))}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                className="mt-4"
              >
                <Link
                  href="?booking=true"
                  scroll={false}
                  onClick={() => setIsOpen(false)}
                  className="group flex items-center rounded-full bg-black pl-6 pr-2 py-2 text-white"
                >
                  <span className="text-sm font-semibold tracking-wide uppercase mr-4">
                    Book Now
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-white"
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
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
