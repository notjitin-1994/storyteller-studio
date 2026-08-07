import Image from "next/image";
import Link from "next/link";
import { Play } from "@phosphor-icons/react/dist/ssr";

const PORTFOLIO_ITEMS = [
  {
    id: "3Qo_X2WhmIc",
    title: "Hurryr Insta Deliveries",
    client: "Hurryr",
    description: "Sound design and audio post-production for Hurryr's Insta Deliveries ad campaign in Hyderabad.",
    youtubeUrl: "https://www.youtube.com/watch?v=3Qo_X2WhmIc",
    thumbnail: "https://img.youtube.com/vi/3Qo_X2WhmIc/maxresdefault.jpg",
  },
  {
    id: "ZCK3T0mnzRs",
    title: "Hurryr Anniversary Ad",
    client: "Hurryr",
    description: "Complete audio mixing, foley, and sound design for the client anniversary campaign.",
    youtubeUrl: "https://www.youtube.com/watch?v=ZCK3T0mnzRs",
    thumbnail: "https://img.youtube.com/vi/ZCK3T0mnzRs/maxresdefault.jpg",
  }
];

export const metadata = {
  title: "Portfolio | The Storyteller Studio",
  description: "Explore our sound design, mixing, and audio production portfolio.",
};

export default function PortfolioPage() {
  return (
    <main className="min-h-[100dvh] bg-[#Fcfbf9] pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <header className="mb-20 max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-display text-black mb-6 tracking-tight">Our Work</h1>
          <p className="text-xl md:text-2xl text-black/60 font-sans font-light leading-relaxed text-balance">
            A curated selection of our sound design, mixing, and audio production projects for visionary brands and storytellers.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {PORTFOLIO_ITEMS.map((item) => (
            <Link 
              key={item.id} 
              href={item.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group block relative"
            >
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden mb-6 bg-black/5 border border-black/5">
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
                />
                
                {/* Overlay & YouTube Play Button */}
                <div className="absolute inset-0 flex items-center justify-center group-hover:bg-black/10 transition-colors duration-500">
                  <div className="w-[68px] h-[48px] bg-[#FF0000] rounded-[14px] flex items-center justify-center shadow-[0_4px_14px_rgba(255,0,0,0.3)] transform transition-transform duration-300 ease-out group-hover:scale-110">
                    <Play weight="fill" className="text-white w-8 h-8 drop-shadow-sm" />
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-semibold tracking-widest uppercase text-black/50">
                    {item.client}
                  </span>
                  <span className="w-8 h-[1px] bg-black/20" />
                </div>
                <h3 className="text-2xl md:text-3xl font-display text-black mb-3 group-hover:text-black/80 transition-colors">
                  {item.title}
                </h3>
                <p className="text-black/60 font-sans font-light leading-relaxed max-w-lg">
                  {item.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
