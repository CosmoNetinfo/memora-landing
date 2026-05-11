import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-memora-primary-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img src="/logo.svg" alt="Memora Logo" className="h-8 w-8 brightness-0 invert" />
              <span className="font-serif font-bold text-2xl">Memora</span>
            </Link>
            <p className="text-memora-primary-soft text-sm leading-relaxed">
              Tecnologia al servizio della cura.
              Assistenza Alzheimer Digitale pensata per pazienti, caregiver, medici e ricercatori.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Navigazione</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-memora-primary-soft hover:text-white transition-colors text-sm">Home</Link></li>
              <li><Link to="/app" className="text-memora-primary-soft hover:text-white transition-colors text-sm">L'App</Link></li>
              <li><Link to="/tester" className="text-memora-primary-soft hover:text-white transition-colors text-sm">Diventa Tester</Link></li>
              <li><Link to="/ricerca" className="text-memora-primary-soft hover:text-white transition-colors text-sm">La Ricerca (Airalzh)</Link></li>
              <li><Link to="/investitori" className="text-memora-primary-soft hover:text-white transition-colors text-sm">Investitori</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Legale</h3>
            <ul className="space-y-3">
              <li><Link to="/contatti" className="text-memora-primary-soft hover:text-white transition-colors text-sm">Contatti</Link></li>
              <li><a href="#" className="text-memora-primary-soft hover:text-white transition-colors text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-memora-primary-soft hover:text-white transition-colors text-sm">Termini di Servizio</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Parliamo di Memora</h3>
            <p className="text-memora-primary-soft text-sm leading-relaxed mb-4">
              Costruito con pazienti, per i pazienti. Il tuo feedback cambia l'app.
            </p>
            <a href="mailto:admindany@gmail.com" className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition-colors border border-white/20 w-full sm:w-auto">
              Contattaci
            </a>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-memora-primary-soft">
            &copy; {new Date().getFullYear()} Daniele Spalletti — Sviluppato per <a href="https://www.cosmonet.info" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">cosmonet.info</a>
          </p>
          <p className="text-xs text-memora-primary-soft flex items-center gap-1">
            Design: Michele Mosca · Ispirato a <a href="https://airalzh.it/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Airalzh Onlus</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
