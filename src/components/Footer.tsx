import Link from "next/link";
import { InstagramLogo, YoutubeLogo, LinkedinLogo } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full border-t border-black/5 bg-[#Fcfbf9] pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
        
        {/* Brand */}
        <div className="col-span-1 md:col-span-2 flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 shadow-sm border border-black/5">
              <Image src="/logo.png" alt="The Storyteller Studio" fill sizes="40px" className="object-contain" />
            </div>
            <span className="font-display  text-xl tracking-tight text-black">
              The Storyteller Studio
            </span>
          </div>
          <p className="text-black/60 text-sm max-w-sm text-balance">
            Creative Sound Design services that cover the entire envelope of sound design. Because good audio design makes visuals leak emotions.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-4">
          <h4 className="font-display text-sm  tracking-wider uppercase text-black/40 mb-2">
            Quick Links
          </h4>
          <Link href="/" className="text-black/70 hover:text-black transition-colors duration-300 text-sm">Home</Link>
          <Link href="/services" className="text-black/70 hover:text-black transition-colors duration-300 text-sm">Services</Link>
          <Link href="/portfolio" className="text-black/70 hover:text-black transition-colors duration-300 text-sm">Portfolio</Link>
          <Link href="/blogs" className="text-black/70 hover:text-black transition-colors duration-300 text-sm">Blogs</Link>
          <Link href="/contact" className="text-black/70 hover:text-black transition-colors duration-300 text-sm">Contact</Link>
        </div>

        {/* Socials */}
        <div className="flex flex-col gap-4">
          <h4 className="font-display text-sm  tracking-wider uppercase text-black/40 mb-2">
            Follow Us
          </h4>
          <a href="#" className="flex items-center gap-3 text-black/70 hover:text-black transition-colors duration-300 text-sm">
            <InstagramLogo size={20} weight="light" />
            Instagram
          </a>
          <a href="#" className="flex items-center gap-3 text-black/70 hover:text-black transition-colors duration-300 text-sm">
            <YoutubeLogo size={20} weight="light" />
            YouTube
          </a>
          <a href="#" className="flex items-center gap-3 text-black/70 hover:text-black transition-colors duration-300 text-sm">
            <LinkedinLogo size={20} weight="light" />
            LinkedIn
          </a>
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-black/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-black/40">
        <p>© 2026 The Storyteller Studio. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-black transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
