import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/bar-and-drinks")({
  component: BarPage,
});

function BarPage() {
  const cocktails = [
    { name: "Lady Blush", description: "Elegant vodka-based blend with a whisper of sweetness" },
    { name: "Blue Ocean", description: "Tropical vodka with intense blueberry notes" },
    { name: "Classic LIIT", description: "The legendary mix of five spirits" },
    { name: "Flavoured LIITs", description: "Ask your bartender for the seasonal twist" },
  ];

  const mocktails = [
    { name: "Melon Blast", description: "Fruity melon blend perfect for rooftop sunsets" },
    { name: "Poh Pai Shots", description: "Fun, vibrant and Instagrammable" },
  ];

  return (
    <div className="pt-32 pb-24 bg-[#0a0a0a] min-h-screen">
      {/* Bar Hero */}
      <div className="relative h-[60vh] flex items-center justify-center overflow-hidden mb-24 mx-6">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-50 scale-105"
            alt="Bar atmosphere"
          />
          <div className="absolute inset-0 bg-linear-to-b from-black via-transparent to-black"></div>
        </div>
        <div className="relative z-10 text-center">
          <h2 className="text-gold text-sm tracking-[0.4em] uppercase mb-4">Master Mixology</h2>
          <h1 className="text-6xl md:text-8xl font-serif text-white">The Craft Bar</h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          {/* Cocktails */}
          <div>
            <div className="flex items-center gap-6 mb-12">
              <h3 className="text-3xl font-serif text-gold">Signature Cocktails</h3>
              <div className="flex-1 h-px bg-gold/20"></div>
            </div>
            <div className="space-y-12">
              {cocktails.map((item, idx) => (
                <div key={idx} className="group">
                  <h4 className="text-white text-xl font-medium mb-2 group-hover:text-gold transition-colors">{item.name}</h4>
                  <p className="text-stone-500 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Mocktails */}
          <div>
            <div className="flex items-center gap-6 mb-12">
              <h3 className="text-3xl font-serif text-gold">Refreshing Mocktails</h3>
              <div className="flex-1 h-px bg-gold/20"></div>
            </div>
            <div className="space-y-12">
              {mocktails.map((item, idx) => (
                <div key={idx} className="group">
                  <h4 className="text-white text-xl font-medium mb-2 group-hover:text-gold transition-colors">{item.name}</h4>
                  <p className="text-stone-500 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Offers */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-serif text-white">Bar Exclusive Offers</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "1+1 on Pitchers", subtitle: "Cocktail Pitchers — All Day" },
              { title: "2+1 on IMFL", subtitle: "Buy 2 Get 1 Free on Select Labels" },
              { title: "Bottles at MRP", subtitle: "Premium Experience at Great Value" },
            ].map((offer, idx) => (
              <div key={idx} className="p-8 border border-gold/30 bg-gold/5 text-center group hover:bg-gold/10 transition-colors">
                <div className="inline-block p-4 rounded-full border border-gold/50 mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h4 className="text-2xl font-serif text-white mb-2">{offer.title}</h4>
                <p className="text-gold text-xs uppercase tracking-widest font-medium">{offer.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
