import { ShoppingCart, Search, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur bg-white/60 border-b border-slate-200">
      <div className="container mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <a href="#" className="text-xl font-semibold tracking-tight">minima</a>
          <nav className="hidden md:flex items-center gap-6 text-slate-700">
            <a href="#products" className="hover:text-slate-900 transition-colors">Products</a>
            <a href="#about" className="hover:text-slate-900 transition-colors">About</a>
            <a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-200">
            <Search className="w-4 h-4 text-slate-500" />
            <input className="bg-transparent outline-none text-sm placeholder:text-slate-400" placeholder="Search products" />
          </div>
          <button className="relative p-2 rounded-lg hover:bg-slate-100 transition-colors">
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 text-[10px] bg-slate-900 text-white w-5 h-5 rounded-full flex items-center justify-center">2</span>
          </button>
          <button className="md:hidden p-2 rounded-lg hover:bg-slate-100">
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
