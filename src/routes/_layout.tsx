import { createFileRoute, Link, Outlet } from "@tanstack/react-router";
import { useState, useEffect } from "react";

export const Route = createFileRoute("/_layout")({
  component: LayoutComponent,
});

function LayoutComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/menu", label: "Menu" },
    { to: "/signature-dishes", label: "Dishes" },
    { to: "/bar-and-drinks", label: "Bar" },
    { to: "/celebrations", label: "Events" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <div className="relative min-h-screen">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:py-6 transition-all duration-500 ${
          scrolled || isMenuOpen ? "bg-black/95 backdrop-blur-md shadow-2xl" : "bg-linear-to-b from-black/90 via-black/40 to-transparent"
        } md:px-12`}
      >
        <Link to="/" className="flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
          <span className="text-xl md:text-2xl font-bold tracking-tighter text-white font-serif uppercase">
            Aura <span className="text-gold">Celestia</span>
          </span>
        </Link>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-[11px] font-semibold tracking-[0.2em] uppercase">
          {navLinks.map((link) => (
            <Link 
              key={link.to}
              to={link.to} 
              className="hover:text-gold transition-colors [&.active]:text-gold"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link to="/reserve" className="btn-gold text-[10px] tracking-widest uppercase hidden md:block">
          Reserve Now
        </Link>
        
        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-gold p-2 z-50 relative"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-black transition-all duration-500 ease-in-out md:hidden flex flex-col items-center justify-center ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center gap-8 px-6 text-center">
          {navLinks.map((link) => (
            <Link 
              key={link.to}
              to={link.to} 
              className="text-2xl font-serif text-white hover:text-gold transition-colors tracking-widest uppercase"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link 
            to="/reserve" 
            className="btn-gold w-full mt-4 text-center tracking-widest uppercase"
            onClick={() => setIsMenuOpen(false)}
          >
            Reserve Now
          </Link>
        </div>
      </div>

      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-black pt-20 pb-10 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 text-center md:text-left">
            <div className="col-span-1 md:col-span-1">
              <h2 className="text-2xl font-bold tracking-tighter text-white font-serif uppercase mb-6">
                Aura <span className="text-gold">Celestia</span>
              </h2>
              <p className="text-stone-500 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
                Rooftop Bar, Kitchen & Celebration — Nanded City, Pune. Where every night is a memory in the making.
              </p>
              <div className="mt-6 flex justify-center md:justify-start items-center gap-2">
                <span className="text-gold text-lg">⭐ 4.3/5</span>
                <span className="text-stone-600 text-xs">959+ Happy Guests</span>
              </div>
            </div>

            <div>
              <h4 className="text-white font-serif text-lg mb-6">Quick Links</h4>
              <ul className="space-y-4 text-xs text-stone-500 uppercase tracking-[0.2em]">
                <li><Link to="/menu" className="hover:text-gold transition-colors">Menu</Link></li>
                <li><Link to="/celebrations" className="hover:text-gold transition-colors">Celebrations</Link></li>
                <li><Link to="/reserve" className="hover:text-gold transition-colors">Reservations</Link></li>
                <li><Link to="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-serif text-lg mb-6">Contact Us</h4>
              <p className="text-stone-500 text-sm mb-4 leading-relaxed">
                S7, RB Ingle Plaza, 3rd Floor, <br />
                Sinhgad Road, Nanded City, Pune
              </p>
              <p className="text-gold text-sm font-medium">9111919797 | 9111919696</p>
              <p className="text-stone-500 text-sm mt-2">@auracelestiapune</p>
            </div>

            <div>
              <h4 className="text-white font-serif text-lg mb-6">Hours</h4>
              <p className="text-stone-500 text-sm mb-2">Monday – Sunday</p>
              <p className="text-white text-lg font-serif">12:00 PM – 12:00 AM</p>
              <p className="text-stone-600 text-xs mt-4 italic">Open for Lunch, Dinner & Late Night Vibes</p>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-stone-700 text-[10px] uppercase tracking-widest">
              &copy; {new Date().getFullYear()} Aura Celestia. All Rights Reserved.
            </p>
            <div className="flex gap-6 text-stone-700 text-[10px] uppercase tracking-widest">
              <span className="hover:text-gold cursor-pointer transition-colors">Privacy Policy</span>
              <span className="hover:text-gold cursor-pointer transition-colors">Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Reservation Button (Desktop) */}
      <div className="fixed bottom-10 right-10 z-[60] hidden md:block">
        <Link to="/reserve" className="bg-gold text-black px-8 py-4 rounded-full font-bold shadow-[0_0_30px_rgba(212,175,55,0.4)] flex items-center gap-3 transition-transform hover:scale-110 active:scale-95">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
          Reserve Table
        </Link>
      </div>

       {/* Floating Reservation Button (Mobile) */}
      <Link to="/reserve" className="fixed bottom-8 right-8 z-[60] bg-gold text-black px-6 py-4 rounded-full font-bold shadow-[0_0_20px_rgba(212,175,55,0.4)] md:hidden">
        RSVP
      </Link>
    </div>
  );
}
