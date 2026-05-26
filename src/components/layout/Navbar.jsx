import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_ITEMS = [
  { label: 'Services', to: '/services' },
  { label: 'Solutions', to: '/solutions' },
  { label: 'Sociétés', to: '/nos-societes' },
  { label: 'Compétences', to: '/nos-competences' },
  { label: 'Réalisations', to: '/realisations' },
  { label: 'About', to: '/a-propos' },
  { label: 'Contact', to: '/contact' },
  { label: 'Blog', to: '/blog' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location]);

  const navBg = scrolled || !isHome
    ? 'bg-navy-900/98 backdrop-blur-sm shadow-navy'
    : 'bg-transparent';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
      {/* Top bar */}
      <div className="hidden md:flex items-center justify-between px-8 py-1.5 bg-brand-500 text-white text-xs font-semibold">
        <span>📍 Ottawa · Kinshasa · Lubumbashi · Kolwezi · Brazzaville · Pointe-Noire · Malabo</span>
        <a href="tel:+16137690296" className="flex items-center gap-1 hover:text-navy-100 transition-colors">
          <Phone size={11} /> +1 (613) 769-0296
        </a>
      </div>

      {/* Main nav */}
      <nav className="flex items-center justify-between px-6 md:px-8 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-brand-500 rounded-xl flex items-center justify-center shadow-brand group-hover:scale-105 transition-transform">
            <span className="text-white font-display text-lg font-bold">CC</span>
          </div>
          <div className="hidden sm:block">
            <p className="font-display text-white text-lg font-bold leading-none tracking-wider">CANADCLEANING</p>
            <p className="text-brand-400 text-[10px] font-semibold tracking-widest uppercase">Nettoyage · Construction</p>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-1">
          {NAV_ITEMS.map(item => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${isActive
                  ? 'bg-brand-500 text-white'
                  : 'text-gray-200 hover:text-white hover:bg-white/10'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Login */}
          <Link
            to="/login"
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-gray-200 hover:text-white hover:bg-white/10 transition-all duration-200"
          >
            <User size={15} />
            Espace client
          </Link>

          <Link to="/audit" className="btn-outline text-sm py-2 px-4">
            Audit gratuit
          </Link>
          <Link to="/devis" className="btn-primary text-sm py-2 px-4">
            Demander un devis
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-navy-900 border-t border-white/10 overflow-hidden"
          >
            <div className="px-6 py-4 space-y-1">
              {NAV_ITEMS.map(item => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `block px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${isActive ? 'bg-brand-500 text-white' : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}

              <div className="pt-4 flex flex-col gap-2">
                {/* Login mobile */}
                <Link
                  to="/login"
                  className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-gray-300 hover:text-white hover:bg-white/10 border border-white/10 transition-colors"
                >
                  <User size={15} />
                  Espace client
                </Link>

                <Link to="/audit" className="btn-outline text-sm py-2.5 justify-center">Audit gratuit</Link>
                <Link to="/devis" className="btn-primary text-sm py-2.5 justify-center">Demander un devis</Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}