import Image from "next/image";
import { TransitionLink as Link } from "@/components/TransitionLink";

const SERVICES_DATA: Record<string, any> = {
  "dubbing": {
    modalId: "dubbing",
    title: "Dubbing & Vocals",
    subtitle: "Pristine dialogue capturing",
    description: "Our vocal booths are designed for the most delicate and intimate vocal performances. Perfect for ADR, dubbing, singing, and voiceovers. We use industry-standard microphones in an acoustically treated space to ensure absolutely zero noise floor.",
    image: "/assets/service-dubbing.jpg"
  },
  "mixing-mastering": {
    modalId: "mixing",
    title: "Mixing and Mastering",
    subtitle: "Blend sound perfectly",
    description: "The final polish that makes your project stand out. Our engineers meticulously balance your tracks, utilizing state-of-the-art analog and digital processing to achieve width, depth, and punch that translates beautifully across all devices.",
    image: "/assets/service-mixing.jpg"
  },
  "bgm-scoring": {
    modalId: "bgm",
    title: "BGM Scoring",
    subtitle: "Music that speaks",
    description: "Visuals tell the story, but music conveys the emotion. We score custom background music for films, ads, and web series, working closely with directors to build a sonic landscape that perfectly complements the narrative.",
    image: "/assets/service-bgm.jpg"
  },
  "sound-design": {
    modalId: "sound-design",
    title: "Sound Design",
    subtitle: "The unseen world",
    description: "We create immersive audio environments using meticulously layered Sound Effects (SFX) and ambiences. Sound design breathes life into a static frame, giving weight and realism to the visual action.",
    image: "/assets/service-sound.jpg"
  },
  "rec-spaces": {
    modalId: "rec-spaces",
    title: "Rec Spaces",
    subtitle: "Premium podcasting",
    description: "Looking for an elegant, acoustically treated room to record your podcast or interview? Our recording spaces are not just sonically perfect; they are visually stunning for video podcasts.",
    image: "/assets/service-rec.jpg"
  },
  "foley-sounds": {
    modalId: "foley",
    title: "Foley Sounds",
    subtitle: "Custom sonic textures",
    description: "Footsteps on gravel, the rustle of clothing, the clinking of glasses. We perform and record custom Foley to give your film hyper-realistic, humanized sound textures that cannot be found in stock libraries.",
    image: "/assets/studio_wall.jpg"
  },
  "product-media": {
    modalId: "product-media",
    title: "Product Photography & Videography",
    subtitle: "Showcase in the best light",
    description: "Premium visual production for products. We capture your brand's essence with high-end lighting, styling, and cinematic video tailored for e-commerce, advertising, and social media campaigns.",
    image: "/assets/service-dubbing.jpg"
  },
  "model-media": {
    modalId: "model-media",
    title: "Model Photography & Videography",
    subtitle: "Fashion & Lifestyle",
    description: "Striking visual narratives featuring models. We orchestrate professional shoots encompassing art direction, lighting, and cinematic grading to elevate fashion, lifestyle, and brand editorials.",
    image: "/assets/service-mixing.jpg"
  },
};

export function generateStaticParams() {
  return Object.keys(SERVICES_DATA).map((slug) => ({ slug }));
}

export default async function ServicePage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const service = SERVICES_DATA[params.slug];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24 bg-[#Fcfbf9]">
        <div className="text-center">
          <h1 className="text-4xl font-display  text-black">Service not found</h1>
          <Link href="/" className="text-blue-500 mt-4 inline-block hover:underline">Go back home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen md:bg-[#Fcfbf9] pt-[140px] pb-24 overflow-hidden flex flex-col">
      
      {/* Mobile Background Image */}
      <div className="absolute inset-0 w-full h-full md:hidden z-0">
        <Image 
          src={service.image} 
          alt={service.title} 
          fill 
          sizes="100vw"
          className="object-cover"
          priority
        />
        {/* Dark Overlay for text legibility on mobile */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-16 items-start flex-1">
        
        {/* Left Side: Text Content */}
        <div className="w-full md:w-1/2 flex flex-col pt-8 text-white md:text-black">
          <Link href="/" className="text-sm font-semibold tracking-widest uppercase text-white/70 hover:text-white md:text-black/50 md:hover:text-black transition-colors mb-12 flex items-center gap-2">
            ← Back to Home
          </Link>

          <span className="inline-block px-4 py-1.5 rounded-full border border-white/20 md:border-black/10 bg-white/10 md:bg-black/5 text-xs font-medium tracking-widest uppercase text-white/90 md:text-black/60 shadow-sm w-fit mb-6">
            {service.subtitle}
          </span>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display leading-[1] tracking-tight mb-8 text-white md:text-[#0a0a0a]">
            {service.title}
          </h1>

          <p className="text-white/80 md:text-black/70 text-xl font-light leading-relaxed max-w-lg mb-12">
            {service.description}
          </p>

          <Link
            href={`?booking=true&service=${service.modalId}`}
            scroll={false}
            className="group w-fit flex items-center justify-center rounded-full bg-white md:bg-black pl-5 pr-1.5 py-1.5 text-black md:text-white transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:scale-[0.98] active:scale-95 shadow-lg"
          >
            <span className="text-sm font-semibold tracking-wide uppercase mr-4">
              Book this Service
            </span>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black/10 md:bg-white/10 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:scale-105">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-black md:text-white transition-transform duration-500 group-hover:rotate-45"
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
        </div>

        {/* Right Side: Massive Image (Hidden on Mobile) */}
        <div className="hidden md:block w-full md:w-1/2">
          <div className="relative w-full aspect-[4/5] md:aspect-square lg:aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-sm border border-black/5 bg-white">
            <Image 
              src={service.image} 
              alt={service.title} 
              fill 
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-1000 hover:scale-105"
              priority
            />
          </div>
        </div>

      </div>
    </div>
  );
}
