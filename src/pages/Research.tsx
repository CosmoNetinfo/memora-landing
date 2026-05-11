import { BookOpen, Microscope, Award } from 'lucide-react';
import PageTransition from '../components/layout/PageTransition';

export default function Research() {
  return (
    <PageTransition>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-memora-primary/10 text-memora-primary font-medium text-sm mb-6">
            <Microscope className="w-4 h-4" />
            <span>Supporto alla Ricerca scientifica</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
            L'Alzheimer: una sfida da vincere con la <span className="text-memora-primary">Ricerca</span>
          </h1>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Ispirandoci e supportando realtà come <strong>Airalzh</strong> (Associazione Italiana Ricerca Alzheimer Onlus), Memora è progettata per generare un impatto non solo sul singolo paziente, ma sulla conoscenza collettiva.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Diamo vita ad una grande impresa, insieme. Parte dei dati raccolti, opportunamente resi anonimi con rigorosi criteri informatici e nel rispetto della privacy, costituiscono una base preziosa per la ricerca medico-scientifica sulle demenze.
          </p>
          <a
            href="https://airalzh.it"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-wrap items-center gap-2 text-memora-primary font-bold hover:text-memora-primary-dark transition-colors"
          >
            Scopri di più su Airalzh.it <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
        
        <div className="relative">
          {/* Decorative shapes for an abstract medical/tech look */}
          <div className="aspect-square bg-memora-bg rounded-full absolute -top-8 -right-8 w-64 h-64 -z-10 blur-2xl opacity-70"></div>
          <div className="aspect-square bg-memora-primary-soft/50 rounded-full absolute -bottom-8 -left-8 w-48 h-48 -z-10 blur-xl opacity-70"></div>
          
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <h3 className="text-2xl font-serif font-bold text-memora-primary-dark mb-6">Perché partecipare?</h3>
            <ul className="space-y-6">
              {[
                {
                  icon: <BookOpen className="w-6 h-6 text-memora-primary" />,
                  title: "Stili di vita contro l'Alzheimer",
                  desc: "La raccolta di dati sui ritmi quotidiani permette ai ricercatori di capire il ruolo dello stile di vita nell'evoluzione della malattia."
                },
                {
                  icon: <Award className="w-6 h-6 text-memora-primary" />,
                  title: "Il tuo contributo è essenziale",
                  desc: "Migliaia di piccole esperienze quotidiane compongono il quadro clinico che un giorno porterà a cure risolutive."
                }
              ].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">{item.icon}</div>
                  <div>
                    <strong className="block text-gray-900 font-bold mb-1">{item.title}</strong>
                    <span className="text-gray-600 text-sm leading-relaxed">{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
