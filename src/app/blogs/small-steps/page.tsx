import Image from "next/image";
import { TransitionLink as Link } from "@/components/TransitionLink";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react/dist/ssr";

export const metadata = {
  title: "Small Steps Create Big Shifts | The Storyteller Studio",
  description: "Confidence doesn’t always arrive with a bold entrance.",
};

export default function SmallStepsBlog() {
  return (
    <main className="min-h-screen bg-[#Fcfbf9] pt-32 pb-32">
      {/* Back button */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8 mb-12">
        <Link 
          href="/blogs"
          className="inline-flex items-center text-sm font-medium text-black/40 hover:text-black transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to all stories
        </Link>
      </div>

      {/* Header Section */}
      <header className="max-w-6xl mx-auto px-6 lg:px-8 mb-16 flex flex-col items-start text-left">
        <div className="flex items-center gap-4 text-sm font-medium text-black/40 mb-8 uppercase tracking-widest">
          <time dateTime="2019-05-28">May 28, 2019</time>
          <span className="w-1 h-1 rounded-full bg-black/20" />
          <span>Bharat Nair</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-display text-black tracking-tight leading-[1.1] mb-8 max-w-3xl">
          Small Steps Create Big Shifts
        </h1>
        
        <p className="text-xl md:text-2xl text-black/50 font-light max-w-2xl leading-relaxed italic font-display">
          Confidence doesn’t always arrive with a bold entrance. It builds quietly, step by step, as we show up for ourselves day after day.
        </p>
      </header>

      {/* Cinematic Hero Image */}
      <div className="w-full max-w-6xl mx-auto px-6 lg:px-8 mb-20">
        <div className="relative w-full aspect-[21/9] md:aspect-[2.5/1] overflow-hidden rounded-[2rem] shadow-2xl flex items-center justify-center">
          <Image 
            src="https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=2500&auto=format&fit=crop"
            alt="Small Steps Create Big Shifts"
            fill
            priority
            className="object-cover"
          />
          {/* Heavy gradient overlay to darken the background for the text */}
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/80" />
          
          {/* Typographic Overlay */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center px-6">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display text-white tracking-tight leading-[1.1] drop-shadow-2xl">
              Small Steps Create <br className="hidden md:block" />
              <span className="italic text-white/90">Big Shifts</span>
            </h2>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-6xl mx-auto px-6 lg:px-8 prose-stone">
        <p className="text-black/80 font-light leading-relaxed mb-8 text-xl first-letter:text-7xl first-letter:font-display first-letter:text-black first-letter:mr-3 first-letter:float-left first-letter:leading-[0.8] first-letter:mt-2">
          Confidence doesn’t always arrive with a bold entrance. Sometimes, it builds quietly, step by step, as we show up for ourselves day after day. It grows when we choose to try, even when we’re unsure of the outcome.
        </p>
        
        <p className="text-black/80 font-light leading-relaxed mb-12 text-xl">
          Every time you take action despite self-doubt, you reinforce the belief that you’re capable. Confidence isn’t about having all the answers — it’s about trusting that you can figure it out along the way.
        </p>

        {/* Pull Quote */}
        <blockquote className="relative my-16 px-8 py-6 border-l-[0.5px] border-black/20 bg-black/[0.02] rounded-r-3xl">
          <p className="text-3xl md:text-4xl font-display text-black/90 leading-snug tracking-tight italic">
            "The key to making things happen isn’t waiting for the perfect moment; it’s starting with what you have, where you are."
          </p>
        </blockquote>

        <p className="text-black/80 font-light leading-relaxed mb-8 text-xl">
          Big goals can feel overwhelming when viewed all at once, but momentum builds through small, consistent action. Whether you’re working toward a personal milestone or a professional dream, progress comes from showing up — not perfectly, but persistently. Action creates clarity, and over time, those steps forward add up to something real.
        </p>
        
        <p className="text-black/80 font-light leading-relaxed mb-8 text-xl">
          You don’t need to be fearless to reach your goals, you just need to be willing. Willing to try, willing to learn, and willing to believe that you’re capable of more than you know.
        </p>

        <p className="text-black/80 font-light leading-relaxed mb-20 text-xl">
          The road may not always be smooth, but growth rarely is. What matters most is that you keep going, keep learning, and keep believing in the version of yourself you’re becoming.
        </p>
      </article>

      {/* Divider */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="h-[0.5px] w-full bg-black/10 mb-16" />
      </div>

      {/* Next Article Navigation */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <span className="text-sm font-semibold tracking-widest uppercase text-black/40 mb-6 block">
          Continue Reading
        </span>
        <Link 
          href="/blogs/inner-cabin"
          className="group block relative overflow-hidden rounded-[2rem] bg-white border border-black/5 hover:border-black/10 transition-colors shadow-sm hover:shadow-xl duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-2/5 aspect-[4/3] relative overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop"
                alt="The Inner cabin & stations"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
            <div className="w-full md:w-3/5 p-8 md:p-12 flex flex-col justify-center items-start">
              <h3 className="text-3xl md:text-5xl font-display text-black mb-4 tracking-tight group-hover:text-black/70 transition-colors leading-[1.1]">
                The Inner cabin & stations
              </h3>
              <p className="text-black/50 font-light line-clamp-2 mb-8 leading-relaxed text-lg max-w-md">
                It’s true that a large part of our thoughts and thinking process might be emulated based on our personality and experiences.
              </p>
              
              <div className="flex items-center text-sm font-medium text-black uppercase tracking-widest group-hover:pl-2 transition-all duration-300">
                Read Article
                <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
              </div>
            </div>
          </div>
        </Link>
      </div>
    </main>
  );
}
