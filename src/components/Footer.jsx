export default function Footer() {
  return (
    <footer id="contact" className="bg-white border-t border-slate-200">
      <div className="container mx-auto px-6 md:px-12 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h4 className="font-semibold mb-3">minima</h4>
            <p className="text-slate-600 text-sm">A modern, minimalist ecommerce experience with smooth animations and considered details.</p>
          </div>
          <div>
            <h5 className="font-medium mb-2">Shop</h5>
            <ul className="space-y-1 text-slate-600 text-sm">
              <li><a href="#products" className="hover:text-slate-900">All Products</a></li>
              <li><a href="#" className="hover:text-slate-900">New Arrivals</a></li>
              <li><a href="#" className="hover:text-slate-900">Best Sellers</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-medium mb-2">Company</h5>
            <ul className="space-y-1 text-slate-600 text-sm">
              <li><a href="#about" className="hover:text-slate-900">About</a></li>
              <li><a href="#contact" className="hover:text-slate-900">Contact</a></li>
              <li><a href="#" className="hover:text-slate-900">Careers</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-medium mb-2">Newsletter</h5>
            <form className="flex gap-2">
              <input className="flex-1 px-3 py-2 rounded-lg border border-slate-300" placeholder="Email address" />
              <button className="px-4 py-2 rounded-lg bg-slate-900 text-white">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="mt-10 text-xs text-slate-500">© {new Date().getFullYear()} minima. All rights reserved.</div>
      </div>
    </footer>
  );
}
