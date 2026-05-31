import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/reserve")({
  component: ReservePage,
});

function ReservePage() {
  return (
    <div className="pt-32 pb-24 bg-[#0a0a0a] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24">
        {/* Info Side */}
        <div>
          <h2 className="text-gold text-sm tracking-[0.4em] uppercase mb-4">Reservations</h2>
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-8">Secure Your Table</h1>
          <p className="text-stone-400 text-lg mb-12 leading-relaxed">
            Experience the finest rooftop dining in Pune. Whether it's a romantic dinner or a family gathering, we ensure your evening is nothing short of celestial.
          </p>

          <div className="space-y-12">
             <div className="flex gap-6 items-start">
               <div className="p-3 border border-gold/30 text-gold">
                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
               </div>
               <div>
                 <h4 className="text-white font-serif text-xl mb-2">Direct Booking</h4>
                 <p className="text-gold text-lg font-bold">9111919797 | 9111919696</p>
                 <p className="text-stone-500 text-sm mt-1">Available 12:00 PM to 12:00 AM</p>
               </div>
             </div>

             <div className="flex gap-6 items-start">
               <div className="p-3 border border-gold/30 text-gold">
                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
               </div>
               <div>
                 <h4 className="text-white font-serif text-xl mb-2">Operating Hours</h4>
                 <p className="text-stone-300">Monday to Sunday</p>
                 <p className="text-stone-500 text-sm mt-1">12:00 PM — 12:00 AM</p>
               </div>
             </div>

             <div className="p-8 border border-white/5 bg-white/[0.02]">
                <p className="text-stone-500 text-sm italic">
                  "For large group or private event bookings, please call us directly so we can provide a personalized experience for you."
                </p>
             </div>
          </div>
        </div>

        {/* Form Side */}
        <div className="bg-white/[0.02] border border-white/5 p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 blur-3xl rounded-full"></div>
          
          <form className="relative z-10 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-stone-500">Full Name</label>
                <input type="text" className="w-full bg-black/40 border border-white/10 px-4 py-3 text-white focus:border-gold outline-none transition-colors" placeholder="e.g. John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-stone-500">Phone Number</label>
                <input type="tel" className="w-full bg-black/40 border border-white/10 px-4 py-3 text-white focus:border-gold outline-none transition-colors" placeholder="e.g. +91 99999 99999" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-stone-500">Date</label>
                <input type="date" className="w-full bg-black/40 border border-white/10 px-4 py-3 text-white focus:border-gold outline-none transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-stone-500">Time</label>
                <select className="w-full bg-black/40 border border-white/10 px-4 py-3 text-white focus:border-gold outline-none transition-colors">
                  <option>7:00 PM</option>
                  <option>8:00 PM</option>
                  <option>9:00 PM</option>
                  <option>10:00 PM</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-stone-500">Number of Guests</label>
              <input type="number" min="1" max="20" className="w-full bg-black/40 border border-white/10 px-4 py-3 text-white focus:border-gold outline-none transition-colors" placeholder="2" />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-stone-500">Special Requests</label>
              <textarea className="w-full bg-black/40 border border-white/10 px-4 py-3 text-white focus:border-gold outline-none transition-colors h-32" placeholder="Anniversary, Birthday, or any dietary requirements..."></textarea>
            </div>

            <button type="button" className="btn-gold w-full py-4 uppercase tracking-[0.2em] text-xs font-bold">
              Confirm Reservation
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
