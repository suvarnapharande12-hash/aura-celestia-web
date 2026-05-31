import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/contact")({
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="pt-32 pb-24 bg-[#0a0a0a] min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-gold text-sm tracking-[0.4em] uppercase mb-4">Location & Access</h2>
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-6">Contact Us</h1>
          <div className="w-24 h-px bg-gold mx-auto opacity-50"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-24">
           {/* Address */}
           <div className="text-center p-10 border border-white/5 bg-white/[0.02] flex flex-col items-center">
              <div className="p-4 border border-gold/30 text-gold mb-6">
                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <h4 className="text-white font-serif text-2xl mb-4">Visit Us</h4>
              <p className="text-stone-400 text-sm leading-relaxed">
                S7, RB Ingle Plaza, 3rd Floor, <br />
                Sinhgad Road, Nanded City, <br />
                Near Destination Centre, Pune - 411068
              </p>
           </div>

           {/* Phone */}
           <div className="text-center p-10 border border-white/5 bg-white/[0.02] flex flex-col items-center">
              <div className="p-4 border border-gold/30 text-gold mb-6">
                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </div>
              <h4 className="text-white font-serif text-2xl mb-4">Call Us</h4>
              <p className="text-gold text-xl font-bold mb-2">9111919797</p>
              <p className="text-gold text-xl font-bold">9111919696</p>
           </div>

           {/* Connect */}
           <div className="text-center p-10 border border-white/5 bg-white/[0.02] flex flex-col items-center">
              <div className="p-4 border border-gold/30 text-gold mb-6">
                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h4 className="text-white font-serif text-2xl mb-4">Connect</h4>
              <p className="text-stone-400 text-sm mb-4">Follow us for daily updates and vibes</p>
              <p className="text-gold font-medium tracking-widest uppercase text-xs">@auracelestiapune</p>
           </div>
        </div>

        {/* Map */}
        <div className="w-full h-[500px] border border-white/5 grayscale invert opacity-70 hover:grayscale-0 hover:invert-0 hover:opacity-100 transition-all duration-1000">
           <iframe 
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.697444390558!2d73.784534875189!3d18.452028682626947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2958f00000001%3A0xc346d845e28a556!2sAura%20Celestia!5e0!3m2!1sen!2sin!4v1716723456789!5m2!1sen!2sin" 
             width="100%" 
             height="100%" 
             style={{ border: 0 }} 
             allowFullScreen 
             loading="lazy" 
             referrerPolicy="no-referrer-when-downgrade"
           ></iframe>
        </div>
      </div>
    </div>
  );
}
