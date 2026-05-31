import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/celebrations")({
  component: CelebrationsPage,
});

function CelebrationsPage() {
  return (
    <div className="pt-32 pb-24 bg-[#0a0a0a] min-h-screen">
      {/* Hero */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden mb-24 px-6">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1464366444787-7e6753f5c6b3?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-60"
            alt="Celebration at rooftop"
          />
          <div className="absolute inset-0 bg-linear-to-b from-black via-black/20 to-black"></div>
        </div>
        <div className="relative z-10 text-center max-w-4xl">
          <h2 className="text-gold text-sm tracking-[0.4em] uppercase mb-6">Unforgettable Moments</h2>
          <h1 className="text-5xl md:text-8xl font-serif text-white mb-8 leading-tight">Make Your Moments <br /> <span className="italic text-gradient-gold">Unforgettable</span></h1>
          <p className="text-stone-300 text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto leading-relaxed">
            From intimate date nights to grand corporate dinners, our rooftop provides the perfect backdrop for your celebrations.
          </p>
          <Link to="/reserve" className="btn-gold uppercase tracking-widest text-xs inline-block">
            Plan Your Celebration
          </Link>
        </div>
      </section>

      {/* Event Types */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {[
            { title: "Birthdays", desc: "Blow out the candles with a view that takes your breath away." },
            { title: "Anniversaries", desc: "Celebrate your journey in an atmosphere of pure romance." },
            { title: "Corporate Dinners", desc: "Impress your team or clients with Pune's finest dining experience." },
            { title: "Date Nights", desc: "An intimate setting for two under the open starlit sky." }
          ].map((type, idx) => (
            <div key={idx} className="p-10 border border-white/5 bg-white/[0.02] hover:border-gold/30 transition-all group">
              <h4 className="text-2xl font-serif text-white mb-4 group-hover:text-gold transition-colors">{type.title}</h4>
              <p className="text-stone-500 text-sm leading-relaxed">{type.desc}</p>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center mb-32">
          <div className="order-2 md:order-1">
            <div className="aspect-[4/5] overflow-hidden border border-gold/20">
               <img 
                src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=1000" 
                className="w-full h-full object-cover"
                alt="Event setup"
              />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h3 className="text-4xl font-serif text-white mb-8">What We Offer</h3>
            <ul className="space-y-8">
              {[
                { title: "Private Rooftop Setting", desc: "Exclusive areas reserved just for you and your guests." },
                { title: "Dedicated Staff", desc: "Seamless service with a team focused solely on your event." },
                { title: "Customized Menu", desc: "Curated selections from our kitchen to match your taste." },
                { title: "Live Music Arrangement", desc: "Set the mood with soulful live performances." }
              ].map((feature, idx) => (
                <li key={idx} className="flex gap-6">
                  <div className="w-8 h-px bg-gold mt-3"></div>
                  <div>
                    <h5 className="text-gold font-serif text-xl mb-1">{feature.title}</h5>
                    <p className="text-stone-500 text-sm">{feature.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gold/5 border border-gold/20 py-20 px-6">
           <h3 className="text-4xl font-serif text-white mb-6">Let's Start Planning</h3>
           <p className="text-stone-400 mb-10 max-w-xl mx-auto">Call us directly to discuss your requirements and let our event specialists craft the perfect celebration for you.</p>
           <div className="flex flex-col md:flex-row justify-center gap-8 items-center">
             <div className="text-center">
               <p className="text-[10px] uppercase tracking-widest text-stone-500 mb-2">Call for Inquiries</p>
               <p className="text-gold text-2xl font-bold">9111919797</p>
             </div>
             <div className="w-px h-12 bg-gold/20 hidden md:block"></div>
             <div className="text-center">
               <p className="text-[10px] uppercase tracking-widest text-stone-500 mb-2">Secondary Line</p>
               <p className="text-gold text-2xl font-bold">9111919696</p>
             </div>
           </div>
        </div>
      </div>
    </div>
  );
}
