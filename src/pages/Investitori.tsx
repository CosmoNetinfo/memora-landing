import { ArrowRight, TrendingUp, Smartphone, Users, HeartHandshake, Database, GraduationCap } from 'lucide-react';
import { DocumentTitle } from '../components/DocumentTitle';
import { PageHero, PrimaryButton } from '../components/ui';
import { AIRALZH_URL, TEAM, THESIS, stats, airalzhFacts, pageMeta } from '../lib/constants';

export default function Investitori() {
  const market = [
    { value: stats.dementiaWorld, label: 'Persone con demenza nel mondo' },
    { value: stats.dementiaItaly, label: 'In Italia (proiezione triplicata entro 2050)' },
    { value: stats.caregivers, label: 'Caregiver in Italia' },
    { value: 'Live', label: 'Prototipo PWA in beta' },
  ];

  const roadmap = [
    { phase: 'Oggi', desc: 'Supporto quotidiano per famiglie e pazienti — fasi iniziale e moderata' },
    { phase: 'Domani', desc: 'Piattaforma B2B per RSA, ASL e strutture sanitarie' },
    { phase: 'Futuro', desc: 'Dati aggregati anonimizzati per ricerca con Airalzh' },
  ];

  const business = [
    { segment: 'B2C famiglie', model: 'Freemium / abbonamento premium' },
    { segment: 'B2B RSA & ASL', model: 'Licenza per struttura + dashboard multi-paziente' },
    { segment: 'Ricerca', model: 'Partnership dati anonimizzati con enti come Airalzh' },
  ];

  const stack = ['React', 'Vite', 'Supabase Realtime', 'Recharts', 'Capacitor', 'OneSignal'];

  const sponsorAreas = [
    'Visibilità come partner del progetto di tesi NID (Nuovo Istituto Design)',
    'Accesso anticipato al prototipo e ai dati di utilizzo (anonimizzati)',
    'Co-branding su materiali per famiglie e operatori',
    'Priorità nel percorso B2B (RSA, ASL)',
  ];

  return (
    <>
      <DocumentTitle title={pageMeta.investitori.title} description={pageMeta.investitori.description} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <PageHero
          badge="Per sponsor e partner"
          title="Un progetto di tesi,"
          accent="con un mercato reale."
          subtitle={`Memora è la tesi NID (Nuovo Istituto Design) di ${TEAM.design.name} e ${TEAM.dev.name}: una PWA per l'assistenza domiciliare nell'Alzheimer, sviluppata con il contributo di Airalzh ETS.`}
        >
          <PrimaryButton to="/contatti">Scrivici per partnership</PrimaryButton>
        </PageHero>

        <section className="mb-20 max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-memora-primary/10 text-memora-primary font-medium text-sm mb-4">
            <GraduationCap className="w-4 h-4" aria-hidden="true" />
            <span>{THESIS.label}</span>
          </div>
          <p className="text-gray-600 leading-relaxed">
            Il giorno della discussione presenteremo il prototipo funzionante, le scelte di design e i risultati del
            percorso. Per aziende e enti che vogliono sostenere il progetto, questa pagina riassume mercato, prodotto
            e possibilità di collaborazione.
          </p>
        </section>

        <section className="mb-20">
          <h2 className="text-2xl font-serif font-bold text-memora-primary-dark mb-8 text-center">Il mercato</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {market.map((item) => (
              <div key={item.label} className="bg-white p-6 rounded-2xl border border-gray-100 text-center card-shadow">
                <div className="text-3xl font-serif font-bold text-memora-primary mb-2">{item.value}</div>
                <div className="text-sm text-gray-600">{item.label}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-600 mt-4">
            Fonti: OMS · ISS ·{' '}
            <a href={AIRALZH_URL} target="_blank" rel="noopener noreferrer" className="text-memora-primary hover:underline">
              Airalzh ETS
            </a>
          </p>
        </section>

        <section className="mb-20">
          <h2 className="text-2xl font-serif font-bold text-memora-primary-dark mb-8 text-center">Il prodotto oggi</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: <Smartphone className="w-5 h-5" />, text: 'PWA — web, iOS/Android, installabile senza store' },
              { icon: <TrendingUp className="w-5 h-5" />, text: 'Agenda, mood, Memoriae, vocal-first, Clinical Dashboard' },
              { icon: <Users className="w-5 h-5" />, text: '4 ruoli: paziente, caregiver, medico, amministratore' },
              { icon: <HeartHandshake className="w-5 h-5" />, text: 'Target: fasi iniziale e moderata dell\'Alzheimer' },
            ].map((item) => (
              <div
                key={item.text}
                className="flex items-center gap-4 bg-memora-bg p-5 rounded-2xl border border-memora-lilla-soft/30 card-shadow"
              >
                <div className="text-memora-primary">{item.icon}</div>
                <span className="text-gray-700 text-sm">{item.text}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {stack.map((t) => (
              <span key={t} className="px-3 py-1 rounded-full bg-memora-primary/10 text-memora-primary text-xs font-medium">
                {t}
              </span>
            ))}
          </div>
        </section>

        <section className="mb-20 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-serif font-bold text-memora-primary-dark mb-4">Il team</h2>
            <p className="text-gray-600 leading-relaxed">
              <strong>{TEAM.design.name}</strong> — {TEAM.design.role}
              <br />
              <strong>{TEAM.dev.name}</strong> — {TEAM.dev.role}
            </p>
            <p className="text-gray-600 text-sm mt-4">{THESIS.label}</p>
          </div>
          <div>
            <h2 className="text-2xl font-serif font-bold text-memora-primary-dark mb-4">Con il contributo di Airalzh ETS</h2>
            <img src="/airalzh-logo.png" alt="Airalzh ETS" className="h-12 mb-3" />
            <p className="text-gray-600 leading-relaxed text-sm">
              Fondata nel <strong>{airalzhFacts.founded}</strong>. <strong>{airalzhFacts.researchers}</strong> ricercatori
              sostenuti, <strong>{airalzhFacts.centers}</strong> centri nella rete. Promuove la ricerca
              medico-scientifica sull'Alzheimer — Memora estende la missione nell'assistenza digitale quotidiana.
            </p>
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-2xl font-serif font-bold text-memora-primary-dark mb-8 text-center">La visione</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {roadmap.map((item) => (
              <div key={item.phase} className="bg-memora-primary-dark text-white p-6 rounded-2xl">
                <h3 className="font-bold text-memora-lilla-soft mb-2">{item.phase}</h3>
                <p className="text-white/90 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <h2 className="text-2xl font-serif font-bold text-memora-primary-dark mb-8 text-center">Modello di business</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl border border-gray-100 overflow-hidden card-shadow">
              <thead>
                <tr className="bg-memora-bg">
                  <th className="text-left p-4 font-bold text-memora-primary-dark">Segmento</th>
                  <th className="text-left p-4 font-bold text-memora-primary-dark">Modello</th>
                </tr>
              </thead>
              <tbody>
                {business.map((row) => (
                  <tr key={row.segment} className="border-t border-gray-100">
                    <td className="p-4 text-gray-700">{row.segment}</td>
                    <td className="p-4 text-gray-600 text-sm">{row.model}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-20 max-w-2xl mx-auto">
          <h2 className="text-2xl font-serif font-bold text-memora-primary-dark mb-6 text-center">Cosa offriamo ai partner</h2>
          <ul className="space-y-3">
            {sponsorAreas.map((item) => (
              <li key={item} className="flex gap-3 text-gray-600 text-sm">
                <span className="text-memora-primary font-bold">·</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="text-center bg-memora-bg-secondary/50 rounded-3xl p-12 border border-memora-lilla-soft/40">
          <Database className="w-10 h-10 text-memora-primary mx-auto mb-4" aria-hidden="true" />
          <h2 className="text-2xl font-serif font-bold text-memora-primary-dark mb-4">Parliamone</h2>
          <p className="text-gray-600 mb-6">
            Scrivici per deck completo, demo dal vivo o proposta di sponsorizzazione.
          </p>
          <PrimaryButton to="/contatti">
            Contattaci <ArrowRight className="w-5 h-5" />
          </PrimaryButton>
        </section>
      </div>
    </>
  );
}
