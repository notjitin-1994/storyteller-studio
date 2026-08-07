import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

const BLOGS = [
  {
    id: "inner-cabin",
    title: "The Inner cabin & stations",
    date: "August 1, 2026",
    author: "Bharat Nair",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2000&auto=format&fit=crop",
    excerpt: "It’s true that a large part of our thoughts and thinking process might be emulated based on our personality and experiences. But when it comes to another angle - a lot of thoughts which we experiences when we move through places, groups of people and experiences - might be because you are into those radio channels. Yes - you see how when you move through different states - different radio channels play across different frequencies...",
  },
  {
    id: "storyteller-starts",
    title: "Storyteller Starts",
    date: "May 28, 2019",
    author: "Bharat Nair",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2000&auto=format&fit=crop",
    excerpt: "I just Opened Ableton just out of curiosity - and tried this trial version. man what a DAW - It does naturally churn out every single ounce of creativity out of the creator. I loved it Instantly - But thats not the great Part. An existing song tempelate with a preloaded song body opened up - and what a delight it was to listen to this song. It was just amazing - off late my life has been full of wonders...",
  },
  {
    id: "small-steps",
    title: "Small Steps Create Big Shifts",
    date: "May 28, 2019",
    author: "Bharat Nair",
    image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=2000&auto=format&fit=crop",
    excerpt: "Sometimes, it builds quietly, step by step, as we show up for ourselves day after day. It grows when we choose to try, even when we’re unsure of the outcome. Every time you take action despite self-doubt, you reinforce the belief that you’re capable. Confidence isn’t about having all the answers — it’s about trusting that you can figure it out along the way. The key to making things happen isn’t waiting for the perfect moment...",
  }
];

export default function BlogsPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 md:px-12 max-w-5xl mx-auto">
      <div className="mb-16">
        <h1 className="text-5xl md:text-7xl font-display text-black tracking-tight mb-6">
          Our Stories
        </h1>
        <p className="text-xl text-black/60 font-light max-w-2xl leading-relaxed">
          Reflections on sound, creativity, and the journey of producing music that resonates with the soul.
        </p>
      </div>

      <div className="flex flex-col gap-12">
        {BLOGS.map((blog) => (
          <article 
            key={blog.id} 
            className="group relative flex flex-col items-start justify-between rounded-3xl p-8 md:p-10 border border-black/5 hover:border-black/10 transition-colors duration-500 shadow-sm hover:shadow-md overflow-hidden min-h-[400px]"
          >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <Image 
                src={blog.image} 
                alt={blog.title} 
                fill 
                sizes="(max-width: 768px) 100vw, 1024px"
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
            
            {/* Gradient Overlay for Legibility */}
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-white via-white/95 to-white/60 transition-opacity duration-500 group-hover:via-white/90" />
            
            <div className="relative z-20 flex items-center gap-4 text-sm font-medium text-black/60 mb-6">
              <time dateTime={blog.date}>{blog.date}</time>
              <span className="w-1 h-1 rounded-full bg-black/20" />
              <span>By {blog.author}</span>
            </div>
            
            <div className="relative z-20 flex-1 w-full mt-12 md:mt-16">
              <h2 className="text-3xl md:text-4xl font-display text-black mb-4 tracking-tight group-hover:text-black/80 transition-colors">
                {blog.title}
              </h2>
              <p className="text-black/70 leading-relaxed font-light mb-8 max-w-3xl">
                {blog.excerpt}
              </p>
            </div>
            
            <Link 
              href={`/blogs/${blog.id}`}
              className="relative z-20 inline-flex items-center justify-center rounded-full bg-black/5 hover:bg-black text-black hover:text-white px-6 py-2.5 text-sm font-medium transition-all duration-300"
            >
              Read More
              <ArrowUpRight className="ml-2 w-4 h-4" weight="bold" />
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
