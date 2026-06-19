import { CheckCircle2, ArrowRight, Lightbulb, CalendarHeart, Activity, Camera, Mic, Bell, Smartphone, LineChart } from 'lucide-react';
import { DocumentTitle } from '../components/DocumentTitle';
import { PageHero, PrimaryButton, FeatureCard } from '../components/ui';
import { APP_URL, stats, pageMeta } from '../lib/constants';

export default function Famiglie() {
  const steps = [
    {
      n: '1',
      title: 'Apri l\'app',
      desc: (
        <>
          Vai su{' '}
          <a href={APP_URL} className="text-memora-primary hover:underline">
            alzheimerapp-chi.vercel.app
          </a>{' '}
          — funziona dal browser, senza installare nulla.
        </>
      ),
    },
    { n: '2', title: 'Registrati', desc: 'Crea un account come Familiare o Caregiver. Gratuito in beta.' },
    { n: '3', title: 'Collega la rete', desc: 'Agenda e umore si aggiornano da soli tra paziente, famiglia e medico.' },
  ];

  return (
    <>
      <DocumentTitle title={pageMeta.famiglie.title} description={pageMeta.famiglie.description} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <PageHero
          badge="Per caregiver e familiari"
          title="Vicinanza"
          accent="a distanza."
          subtitle="Monitori agenda e umore da remoto. Ogni impegno che aggiungi compare subito sul telefono del paziente — senza chiamare ogni volta per chiedere."
        >
          <PrimaryButton href={APP_URL} external>
            Apri la demo <ArrowRight className="w-5 h-5" />
          </PrimaryButton>
        </PageHero>

        <div className="max-w-3xl mx-auto mb-20">
          <h2 className="text-2xl font-serif font-bold text-memora-primary-dark mb-6">Il peso del caregiver</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            In Italia circa <strong>{stats.caregivers} caregiver</strong>, spesso coordinati da soli. La fase iniziale
            è la più dura sul piano emotivo: serve una rete condivisa, non un'app usata da una sola persona.
          </p>
          <ul className="space-y-4 text-gray-600">
            {[
              'Chi ha dato la medicina? L\'appuntamento è oggi o domani?',
              'Capire come sta davvero il paziente senza chiederlo ogni ora.',
              'Mantenere viva la socialità con chat, vocali e feed Memoriae.',
              'In emergenza, ogni secondo conta — SOS sempre a portata.',
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <CheckCircle2 className="w-5 h-5 text-memora-primary flex-shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <h2 className="text-2xl font-serif font-bold text-memora-primary-dark mb-8 text-center">Cosa fa Memora per te</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          <FeatureCard
            icon={<CalendarHeart className="w-8 h-8 text-memora-primary" />}
            title="Agenda condivisa"
            desc="Aggiungi un appuntamento o una medicina: il paziente lo vede subito, con orario e spunta."
          />
          <FeatureCard
            icon={<Activity className="w-8 h-8 text-memora-primary" />}
            title="Umore visibile"
            desc="Felice, neutro, triste — lo segni tu o lo segnala il paziente, visibile a tutta la rete."
          />
          <FeatureCard
            icon={<Mic className="w-8 h-8 text-memora-primary" />}
            title="Messaggi vocali"
            desc="Parla e invia: la voce abbatte la barriera della tastiera."
          />
          <FeatureCard
            icon={<Camera className="w-8 h-8 text-memora-primary" />}
            title="Memoriae"
            desc="Feed per foto e momenti con famiglia e comunità."
          />
          <FeatureCard
            icon={<LineChart className="w-8 h-8 text-memora-primary" />}
            title="Analisi"
            desc="Andamento umore e task completati — per capire se le routine funzionano."
          />
          <FeatureCard
            icon={<Bell className="w-8 h-8 text-memora-mood-sad" />}
            title="SOS"
            desc="Emergenze a un tap. Notifiche push attivabili dalle impostazioni."
          />
          <FeatureCard
            icon={<Smartphone className="w-8 h-8 text-memora-primary" />}
            title="Accessibilità"
            desc="Caratteri grandi, pulsanti ampi, installabile come app senza store."
          />
        </div>

        <div className="bg-memora-bg-secondary/50 rounded-3xl p-8 md:p-12 border border-memora-lilla-soft/40 card-shadow">
          <h2 className="text-2xl font-bold text-memora-primary-dark mb-8 flex items-center gap-3">
            <Lightbulb className="w-6 h-6 text-memora-lavender" />
            Come iniziare
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.n} className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-memora-primary text-white flex items-center justify-center flex-shrink-0 font-bold">
                  {step.n}
                </div>
                <div>
                  <h3 className="font-bold text-memora-primary-dark mb-1">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
