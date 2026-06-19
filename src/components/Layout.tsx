import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { AIRALZH_URL } from '../lib/constants';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <a href="#main-content" className="skip-link">
        Vai al contenuto
      </a>
      <div className="bg-memora-primary/5 text-center py-2 text-sm text-memora-primary-dark border-b border-memora-primary/10">
        In collaborazione con{' '}
        <a href={AIRALZH_URL} target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline">
          Airalzh Onlus
        </a>{' '}
        — Associazione Italiana Ricerca Alzheimer
      </div>
      <Header />
      <main id="main-content" className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
