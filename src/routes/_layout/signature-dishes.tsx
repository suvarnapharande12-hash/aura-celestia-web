import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/signature-dishes")({
  component: SignatureDishesPage,
});

function SignatureDishesPage() {
  const dishes = [
    {
      name: "Matka Dum Biryani (Chicken)",
      description: "Slow-cooked marinated chicken layered with fragrant premium basmati rice, sealed and cooked in a traditional clay pot for maximum flavour",
      img: "https://images.unsplash.com/photo-1563379091339-03b21bc4a4f8?auto=format&fit=crop&q=80&w=1000"
    },
    {
      name: "Chicken Malai Tikka",
      description: "Rich, creamy and thoroughly marinated chicken tikka, grilled to perfection in a tandoor — silky, succulent and irresistible",
      img: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80&w=1000"
    },
    {
      name: "Hyderabadi Biryani Momo",
      description: "A bold fusion creation — steamed mutton-stuffed momos nestled over a bed of authentic Hyderabadi biryani rice",
      img: "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&q=80&w=1000"
    },
    {
      name: "Tikka Biryani Paneer",
      description: "Smoky tandoori paneer cubes layered with aromatic saffron rice — the crown jewel of our vegetarian menu",
      img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&q=80&w=1000"
    },
    {
      name: "Chicken Chettinad Tacos",
      description: "South Indian Chettinad spiced chicken wrapped in soft tacos — bold, fiery and beautifully presented",
      img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=1000"
    },
    {
      name: "Mutton Seekh Kebab",
      description: "Hand-minced seasoned mutton skewered and chargrilled over open flame — smoky, juicy and packed with flavour",
      img: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?auto=format&fit=crop&q=80&w=1000"
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-[#0a0a0a] min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-gold text-sm tracking-[0.4em] uppercase mb-4">Chef's Recommendations</h2>
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-6">Signature Dishes</h1>
          <div className="w-24 h-px bg-gold mx-auto opacity-50"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {dishes.map((dish, idx) => (
            <div key={idx} className="group">
              <div className="relative aspect-square overflow-hidden mb-6 border border-white/5">
                <img 
                  src={dish.img} 
                  alt={dish.name} 
                  className="w-full h-full object-cover grayscale-[0.2] transition-transform duration-700 group-hover:scale-110 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <h3 className="text-2xl font-serif text-white mb-3 group-hover:text-gold transition-colors">{dish.name}</h3>
              <p className="text-stone-500 text-sm leading-relaxed mb-4">
                {dish.description}
              </p>
              <div className="w-12 h-[2px] bg-gold opacity-30 transition-all duration-500 group-hover:w-full"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
