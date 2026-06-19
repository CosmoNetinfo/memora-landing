import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState, useEffect, useId } from 'react';
import { APP_URL, navLinks } from '../lib/constants';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const menuId = useId();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <Link to="/" className="flex items-center gap-3">
            <img src="/logo.svg" alt="Memora" className="h-10 w-10 rounded-2xl" />
            <span className="font-logo text-2xl text-memora-primary-dark">MEMORA</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-6" aria-label="Navigazione principale">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                aria-current={location.pathname === link.path ? 'page' : undefined}
                className={`text-sm font-medium transition-colors hover:text-memora-primary ${
                  location.pathname === link.path
                    ? 'text-memora-primary border-b-2 border-memora-primary pb-0.5'
                    : 'text-gray-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full bg-memora-primary text-white text-sm font-medium hover:bg-memora-primary-dark transition-colors shadow-sm whitespace-nowrap"
            >
              Prova l'App
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden flex items-center text-gray-600 hover:text-memora-primary"
            aria-label={isOpen ? 'Chiudi menu' : 'Apri menu'}
            aria-expanded={isOpen}
            aria-controls={menuId}
          >
            {isOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
          </button>
        </div>
      </div>

      <div
        id={menuId}
        className={`lg:hidden absolute w-full bg-white border-b border-gray-100 shadow-lg transition-all duration-300 motion-reduce:transition-none ${
          isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible'
        }`}
      >
        <nav className="px-4 pt-2 pb-6 space-y-1" aria-label="Navigazione mobile">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              aria-current={location.pathname === link.path ? 'page' : undefined}
              className={`block px-3 py-4 text-base font-medium rounded-xl ${
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
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center px-5 py-3 rounded-xl bg-memora-primary text-white font-medium"
            >
              Prova l'App
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
