import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/menu")({
  component: MenuPage,
});

function MenuPage() {
  const categories = [
    {
      name: "Starters",
      items: [
        { name: "Chicken Malai Tikka", price: "₹425" },
        { name: "Tikka Lal Mirch", price: "₹395" },
        { name: "Mutton Seekh Kebab", price: "₹475" },
        { name: "Lucknowi Seekh Kebab", price: "₹495" },
        { name: "Zucchini Fries", price: "₹295" },
        { name: "Chicken Chettinad Tacos", price: "₹345" },
        { name: "Prawn Starter", price: "₹525" },
      ]
    },
    {
      name: "Mains",
      items: [
        { name: "Matka Dum Biryani (Chicken)", price: "₹445" },
        { name: "Tikka Biryani Paneer", price: "₹395" },
        { name: "Hyderabadi Biryani Momo", price: "₹375" },
        { name: "Paneer Tikka Masala", price: "₹345" },
      ]
    },
    {
      name: "Breads",
      items: [
        { name: "Butter Naan", price: "₹65" },
        { name: "Butter Roti", price: "₹45" },
      ]
    },
    {
      name: "Desserts",
      items: [
        { name: "Signature Ice Cream", price: "₹195" },
      ]
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-[#0a0a0a] min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-gold text-sm tracking-[0.4em] uppercase mb-4">Culinary</h2>
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-6">Our Menu</h1>
          <div className="w-24 h-px bg-gold mx-auto opacity-50"></div>
        </div>

        <div className="space-y-24">
          {categories.map((category, idx) => (
            <div key={idx} className="relative">
              <div className="flex items-center gap-6 mb-12">
                <h3 className="text-3xl font-serif text-gold whitespace-nowrap">{category.name}</h3>
                <div className="flex-1 h-px bg-linear-to-r from-gold/30 to-transparent"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
                {category.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="group cursor-default">
                    <div className="flex justify-between items-baseline mb-2">
                      <h4 className="text-white text-lg font-medium group-hover:text-gold transition-colors">{item.name}</h4>
                      <span className="text-gold font-serif text-sm">{item.price}</span>
                    </div>
                    <div className="w-full h-px bg-white/5 group-hover:bg-gold/20 transition-colors"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32 text-center p-12 border border-gold/20 bg-gold/5">
           <h4 className="text-white font-serif text-2xl mb-4">Planning a Celebration?</h4>
           <p className="text-stone-400 mb-8 max-w-lg mx-auto">We offer customized menus for private events, birthdays, and anniversaries. Let us make your special day unforgettable.</p>
           <button className="btn-gold uppercase tracking-widest text-xs">Inquire Now</button>
        </div>
      </div>
    </div>
  );
}
