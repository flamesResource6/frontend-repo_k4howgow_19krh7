import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const API_BASE = import.meta.env.VITE_BACKEND_URL || '';

export default function Products() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`${API_BASE}/api/products`);
        if (!res.ok) throw new Error('Failed to fetch');
        const data = await res.json();
        setItems(data);
      } catch (e) {
        setItems([]);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Featured Products</h2>
            <p className="text-slate-600 mt-2">Minimal, functional, and built to last.</p>
          </div>
          <a href="#" className="text-slate-900 hover:opacity-80">View all</a>
        </div>

        {loading ? (
          <p className="text-slate-600">Loading products…</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {items.map((p, i) => (
              <motion.div
                key={p.id || i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                {p.image && (
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                )}
                <div className="p-4">
                  <h3 className="font-semibold text-slate-900 truncate">{p.title}</h3>
                  {p.description && <p className="text-slate-600 text-sm line-clamp-2 mt-1">{p.description}</p>}
                  <div className="mt-3 flex items-center justify-between">
                    <span className="font-semibold">${p.price?.toFixed ? p.price.toFixed(2) : p.price}</span>
                    <button className="px-3 py-1.5 text-sm rounded-lg bg-slate-900 text-white hover:bg-slate-800">Add to cart</button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
