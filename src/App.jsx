import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const anchors = document.querySelectorAll('a[href^="#"]');
    const onClick = (e) => {
      const href = e.currentTarget.getAttribute('href');
      if (href && href !== '#') {
        e.preventDefault();
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };
    anchors.forEach(a => a.addEventListener('click', onClick));
    return () => anchors.forEach(a => a.removeEventListener('click', onClick));
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <Products />

      <section id="about" className="py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Thoughtful design, timeless feel</h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            We believe great products should be simple, durable, and delightful to use. Our collection focuses on essentials with
            considered materials and a clean aesthetic. The experience is intentionally minimal — so what matters most stands out.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
