import { TrendingUp, Landmark, HeartHandshake, ArrowRight } from 'lucide-react';
import PageTransition from '../components/layout/PageTransition';

export default function Investors() {
  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
          Investitori e Finanziamenti
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
          Scale-up dell'assistenza digitale. Sosteniamo un ecosistema in forte crescita, unendo rendimento etico e forte impatto socio-sanitario.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-20">
        <div className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
          <div className="w-16 h-16 bg-memora-bg rounded-2xl flex items-center justify-center mb-6">
            <TrendingUp className="w-8 h-8 text-memora-primary" />
          </div>
          <span className="inline-block px-3 py-1 bg-memora-primary/10 text-memora-primary text-xs font-bold uppercase tracking-wider rounded-full mb-4 w-fit">Investitori Privati</span>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Healthtech & Impact</h2>
          <p className="text-gray-600 leading-relaxed mb-6">Cerchiamo partner focalizzati sull'innovazione tecnologica nel settore sanitario (HealthTech) per accelerare lo sviluppo di Memora. I nostri partner ideali condividono la missione di generare un reale impatto sociale.</p>
          <ul className="space-y-3 mt-auto">
            <li className="flex items-start gap-2 text-sm text-gray-600"><ArrowRight className="w-4 h-4 text-memora-primary mt-0.5 flex-shrink-0" /> Angel investor nel settore healthtech</li>
            <li className="flex items-start gap-2 text-sm text-gray-600"><ArrowRight className="w-4 h-4 text-memora-primary mt-0.5 flex-shrink-0" /> Family office con focus impatto sociale</li>
            <li className="flex items-start gap-2 text-sm text-gray-600"><ArrowRight className="w-4 h-4 text-memora-primary mt-0.5 flex-shrink-0" /> Fondi early-stage salute digitale</li>
            <li className="flex items-start gap-2 text-sm text-gray-600"><ArrowRight className="w-4 h-4 text-memora-primary mt-0.5 flex-shrink-0" /> Acceleratori (PoliHub, Cariplo Factory, H-Farm)</li>
          </ul>
        </div>

        <div className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
          <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mb-6">
            <Landmark className="w-8 h-8 text-green-600" />
          </div>
          <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-bold uppercase tracking-wider rounded-full mb-4 w-fit">Bandi & Finanziamenti</span>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pubblico & Istituzionale</h2>
          <p className="text-gray-600 leading-relaxed mb-6">Dialoghiamo con istituzioni sanitarie, ASL, Regioni ed enti di ricerca per integrare Memora nei percorsi di cura standard offrendo una soluzione digitale che riduca i costi a lungo termine.</p>
          <ul className="space-y-3 mt-auto">
            <li className="flex items-start gap-2 text-sm text-gray-600"><ArrowRight className="w-4 h-4 text-memora-primary mt-0.5 flex-shrink-0" /> PNRR — Missione 6 Salute digitale</li>
            <li className="flex items-start gap-2 text-sm text-gray-600"><ArrowRight className="w-4 h-4 text-memora-primary mt-0.5 flex-shrink-0" /> MIMIT — Fondo Nazionale Innovazione</li>
            <li className="flex items-start gap-2 text-sm text-gray-600"><ArrowRight className="w-4 h-4 text-memora-primary mt-0.5 flex-shrink-0" /> Horizon Europe — Cluster Salute</li>
            <li className="flex items-start gap-2 text-sm text-gray-600"><ArrowRight className="w-4 h-4 text-memora-primary mt-0.5 flex-shrink-0" /> Fondazioni bancarie (Cariplo, CSP, CRT)</li>
            <li className="flex items-start gap-2 text-sm text-gray-600"><ArrowRight className="w-4 h-4 text-memora-primary mt-0.5 flex-shrink-0" /> Bandi regionali innovazione sanitaria</li>
          </ul>
        </div>
      </div>

      <div className="bg-memora-primary-dark rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
           <div className="absolute -top-24 -left-24 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl"></div>
           <div className="absolute top-1/2 -right-32 w-80 h-80 bg-memora-accent opacity-10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-2xl mx-auto">
          <HeartHandshake className="w-12 h-12 text-memora-primary-soft mx-auto mb-6" />
          <h2 className="text-3xl font-serif font-bold mb-4">Unisciti alla nostra missione</h2>
          <p className="text-memora-primary-soft text-lg mb-8">
            Scopri i nostri piani di espansione e richiedi il Pitch Deck riservato agli investitori.
          </p>
          <a
            href="mailto:admindany@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-memora-primary-dark font-medium rounded-full hover:bg-memora-bg transition-colors shadow-lg"
          >
            Contatta il team Founder <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </PageTransition>
  );
}
