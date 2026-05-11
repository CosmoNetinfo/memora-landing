import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'L\'App', path: '/app' },
    { name: 'Diventa Tester', path: '/tester' },
    { name: 'La Ricerca', path: '/ricerca' },
    { name: 'Investitori', path: '/investitori' },
    { name: 'Contatti', path: '/contatti' },
  ];

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-3">
              <img src="/logo.svg" alt="Memora Logo" className="h-10 w-10" />
              <span className="font-serif font-bold text-2xl text-memora-primary-dark">Memora</span>
            </Link>
          </div>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-memora-primary ${
                  location.pathname === link.path
                    ? 'text-memora-primary border-b-2 border-memora-primary'
                    : 'text-gray-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://alzheimerapp-chi.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full bg-memora-primary text-white text-sm font-medium hover:bg-memora-primary-dark transition-colors shadow-sm"
            >
              Prova l'App (Live Beta)
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-memora-primary transition-colors focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden absolute w-full bg-white border-b border-gray-100 shadow-lg transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible'
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`block px-3 py-4 text-base font-medium rounded-xl transition-colors ${
                location.pathname === link.path
                  ? 'bg-memora-bg text-memora-primary'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 px-3">
            <a
              href="https://alzheimerapp-chi.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center px-5 py-3 rounded-xl bg-memora-primary text-white text-base font-medium hover:bg-memora-primary-dark transition-colors"
            >
              Prova l'App (Live Beta)
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
