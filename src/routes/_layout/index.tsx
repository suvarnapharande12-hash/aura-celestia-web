import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/")({
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=2000" 
            alt="Rooftop Dining Vibe" 
            className="w-full h-full object-cover scale-105 animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-black/60 bg-linear-to-b from-black/40 via-transparent to-black"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl">
          <div className="inline-block mb-6 px-4 py-1 border border-gold/50 bg-gold/10 backdrop-blur-sm">
            <span className="text-gold text-xs tracking-[0.3em] uppercase font-semibold">
              Pune's Most Elevated Experience
            </span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-serif mb-8 leading-tight animate-fade-in-up">
            Where Every Night <br /> 
            <span className="italic text-gradient-gold font-light">Becomes a Celebration</span>
          </h1>
          
          <p className="text-stone-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed animate-fade-in-up delay-200">
            Fine food, handcrafted cocktails, live music and unforgettable celebrations, all under the open sky.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 animate-fade-in-up delay-400">
            <Link to="/reserve" className="btn-gold w-full md:w-auto text-center">
              Book Your Table
            </Link>
            <Link to="/menu" className="px-8 py-3 border border-stone-600 text-white hover:bg-white hover:text-black transition-all w-full md:w-auto tracking-widest uppercase text-sm font-medium text-center">
              Explore Menu
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <span className="text-[10px] tracking-[0.4em] uppercase text-white">Scroll</span>
          <div className="w-[1px] h-12 bg-linear-to-b from-gold to-transparent"></div>
        </div>
      </section>

      {/* Intro / Features Highlight */}
      <section className="py-24 bg-[#0a0a0a] px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif mb-8">
              An Atmosphere of <br />
              <span className="text-gold">Pure Sophistication</span>
            </h2>
            <p className="text-stone-400 text-lg mb-8 leading-relaxed">
              Located in the heart of Nanded City, Aura Celestia offers a sensory journey above the clouds. From the moment you step onto our rooftop, you're embraced by an unmatched vibe that blends luxury with the electric energy of Pune's nightlife.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="text-gold font-serif text-xl mb-2">Rooftop Dining</h4>
                <p className="text-sm text-stone-500">Breathtaking views of the city skyline.</p>
              </div>
              <div>
                <h4 className="text-gold font-serif text-xl mb-2">Craft Bar</h4>
                <p className="text-sm text-stone-500">Artisan cocktails by master mixologists.</p>
              </div>
              <div>
                <h4 className="text-gold font-serif text-xl mb-2">Live Music</h4>
                <p className="text-sm text-stone-500">Soulful performances every weekend.</p>
              </div>
              <div>
                <h4 className="text-gold font-serif text-xl mb-2">Celebrations</h4>
                <p className="text-sm text-stone-500">The perfect venue for your special moments.</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden border border-gold/20">
              <img 
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=1000" 
                alt="Restaurant Interior" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 w-64 h-64 border border-gold/30 p-2 hidden md:block">
               <img 
                src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=600" 
                alt="Cocktail" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Highlight Cards Section */}
      <section className="py-24 bg-black px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-gold text-sm tracking-[0.4em] uppercase mb-4">Discover</h2>
            <h3 className="text-4xl md:text-6xl font-serif text-white">The Aura Experience</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { title: "Rooftop Dining", img: "https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?auto=format&fit=crop&q=80&w=600" },
              { title: "Fine Cuisine", img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=600" },
              { title: "Craft Bar", img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=600" },
              { title: "Live Music", img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=600" },
              { title: "Private Events", img: "https://images.unsplash.com/photo-1464366444787-7e6753f5c6b3?auto=format&fit=crop&q=80&w=600" }
            ].map((item, idx) => (
              <div key={idx} className="group relative aspect-[3/4] overflow-hidden border border-white/10">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-80"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-0 right-0 text-center">
                  <h4 className="text-white text-xl font-serif">{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-stone-950 border-y border-gold/10 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-gold fill-gold" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              ))}
            </div>
            <h3 className="text-4xl font-serif text-white mb-2">Guest Impressions</h3>
            <p className="text-gold tracking-[0.2em] text-xs uppercase font-medium">Verified Experiences</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                text: "The rooftop gives a fresh feel and the sit-out is awesome. Service was way ahead of normal — an experience to remember!",
                author: "Ananya S."
              },
              { 
                text: "Every night filled with electric energy, unforgettable moments and an unmatched vibe that keeps you coming back!",
                author: "Rahul M."
              },
              { 
                text: "Excellent food suggestions — the Lucknowi Seekh Kebab and Prawn Starter were spot on. Overall service was very good.",
                author: "Priya K."
              }
            ].map((review, i) => (
              <div key={i} className="p-8 border border-white/5 bg-black/40 backdrop-blur-sm italic text-stone-400 leading-relaxed relative">
                <span className="absolute top-4 left-4 text-4xl text-gold/20 font-serif">"</span>
                <p className="relative z-10 mb-6">{review.text}</p>
                <p className="text-gold text-sm font-serif not-italic">— {review.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
