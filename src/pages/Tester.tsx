import { Beaker, CheckCircle2, UserPlus, ArrowRight, Lightbulb } from 'lucide-react';
import PageTransition from '../components/layout/PageTransition';

export default function Tester() {
  const testers = [
    "Caregiver familiari",
    "Medici di base",
    "Psicologi",
    "Psichiatri",
    "Operatori RSA",
    "Responsabili IT sanitari",
    "Sviluppatori"
  ];

  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-memora-primary/10 text-memora-primary font-medium text-sm mb-6">
            <Beaker className="w-4 h-4" />
            <span>Beta Live — Cerca Tester</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
            Il tuo feedback <span className="text-memora-primary">cambia l'app</span>.
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Siamo in fase beta attiva. Ogni segnalazione migliora concretamente l'esperienza di pazienti, caregiver e medici. L'app è live, gratuita e non richiede installazione sugli Store, accessibile tramite PWA in un secondo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-24 bg-memora-bg/30 p-8 md:p-12 rounded-3xl border border-memora-primary-soft/30">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Lightbulb className="w-6 h-6 text-memora-accent" />
              Chi stiamo cercando
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {testers.map((tester, i) => (
                <li key={i} className="flex gap-2 items-center text-gray-700 bg-white px-4 py-3 rounded-xl shadow-sm border border-gray-100">
                  <CheckCircle2 className="w-4 h-4 text-memora-primary flex-shrink-0" />
                  <span className="font-medium text-sm">{tester}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-memora-primary/5 rounded-bl-[100px] -z-10"></div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Come partecipare</h3>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-memora-primary text-white flex items-center justify-center flex-shrink-0 font-bold">1</div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Vai all'App</h4>
                    <p className="text-sm text-gray-600">Visita <a href="https://alzheimerapp-chi.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-memora-primary font-medium hover:underline">alzheimerapp-chi.vercel.app</a> per provare Live la beta. Nessuna installazione richiesta.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-memora-primary text-white flex items-center justify-center flex-shrink-0 font-bold">2</div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Registrati gratis</h4>
                    <p className="text-sm text-gray-600">Crea un account gratuito in meno di un minuto, scegliendo il tuo ruolo.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-memora-primary text-white flex items-center justify-center flex-shrink-0 font-bold">3</div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Esplora liberamente</h4>
                    <p className="text-sm text-gray-600">Testa l'agenda, mood tracker, chat vocale, profilo e pannello debug.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-memora-accent text-white flex items-center justify-center flex-shrink-0 font-bold">4</div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Invia il tuo feedback!</h4>
                    <p className="text-sm text-gray-600">Usa il pannello debug interno all'app o scrivici direttamente alla mail.</p>
                  </div>
                </li>
              </ul>
              
              <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col gap-4">
                <a
                  href="https://alzheimerapp-chi.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-memora-primary text-white font-medium rounded-xl hover:bg-memora-primary-dark transition-colors shadow-md"
                >
                  🚀 Inizia a testare ora
                </a>
                <a
                  href="mailto:admindany@gmail.com"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-white text-memora-primary border border-memora-primary/20 font-medium rounded-xl hover:bg-memora-bg transition-colors"
                >
                  Invia mail a admindany@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
