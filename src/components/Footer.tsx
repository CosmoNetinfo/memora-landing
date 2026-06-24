import { Link } from 'react-router-dom';
import { AIRALZH_URL } from '../lib/constants';

export default function Footer() {
  return (
    <footer className="bg-memora-primary-dark text-white mt-auto">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 text-center">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 mb-5">
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <img src="/logo.svg" alt="" className="h-14 w-14 rounded-2xl" aria-hidden="true" />
            <span className="font-logo text-2xl sm:text-3xl text-white tracking-wide">MEMORA</span>
          </Link>
          <a
            href={AIRALZH_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-2xl px-5 py-2.5 hover:opacity-95 transition-opacity shrink-0"
          >
            <img src="/airalzh-logo.png" alt="Airalzh ETS" className="h-14 w-auto" />
          </a>
        </div>

        <p className="text-white/90 text-sm leading-snug mb-1">
          <strong>Michele Mosca</strong> — UI/UX · <strong>Daniele Spalletti</strong> — Developer
        </p>
        <p className="text-white/80 text-sm mb-4">
          Con il contributo di{' '}
          <a href={AIRALZH_URL} target="_blank" rel="noopener noreferrer" className="underline hover:text-white">
            Airalzh ETS
          </a>
        </p>
        <p className="text-white/70 text-xs">© {new Date().getFullYear()} Memora</p>
      </div>
    </footer>
  );
}
