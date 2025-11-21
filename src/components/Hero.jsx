import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 drop-shadow-sm">Modern Minimalist Store</h1>
            <p className="mt-4 text-slate-700 text-lg md:text-xl max-w-xl">
              Clean design, smooth interactions, and thoughtfully curated products. Discover essentials that feel just right.
            </p>
            <div className="mt-8 flex gap-3">
              <a href="#products" className="px-5 py-3 rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition-colors">Shop Now</a>
              <a href="#about" className="px-5 py-3 rounded-xl bg-white/80 backdrop-blur border border-slate-200 text-slate-900 hover:bg-white transition-colors">Learn More</a>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/0 via-white/40 to-white" />
    </section>
  );
}
