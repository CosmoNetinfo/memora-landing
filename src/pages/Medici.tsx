import { ArrowRight, Activity, LineChart, FileText, Shield, Stethoscope, ClipboardList } from 'lucide-react';
import { DocumentTitle } from '../components/DocumentTitle';
import { PageHero, PrimaryButton, SecondaryButton, FeatureCard } from '../components/ui';
import { APP_URL, AIRALZH_URL, pageMeta } from '../lib/constants';

export default function Medici() {
  return (
    <>
      <DocumentTitle title={pageMeta.medici.title} description={pageMeta.medici.description} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <PageHero
          badge="Per operatori sanitari"
          title="Lettura clinica,"
          accent="stessi dati."
          subtitle="L'umore segnato dal paziente diventa grafico. Le attività restano in cronologia. Le osservazioni vanno in un archivio di note — in ambiente protetto, con Airalzh come partner scientifico."
        >
          <PrimaryButton href={APP_URL} external>
            Accedi alla demo <ArrowRight className="w-5 h-5" />
          </PrimaryButton>
          <SecondaryButton to="/contatti">Richiedi accesso pilota</SecondaryButton>
        </PageHero>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <FeatureCard
            icon={<Activity className="w-8 h-8 text-memora-primary" />}
            title="Monitoraggio pazienti"
            desc="Mood tracker degli ultimi 7 giorni e quadro d'insieme dei pazienti seguiti."
          />
          <FeatureCard
            icon={<LineChart className="w-8 h-8 text-memora-primary" />}
            title="Clinical Dashboard"
            desc="Grafico umore con alert su pattern negativi (2+ giorni consecutivi tristi)."
          />
          <FeatureCard
            icon={<ClipboardList className="w-8 h-8 text-memora-primary" />}
            title="Registro attività"
            desc="Chi ha fatto cosa e a che ora — cronologia consultabile."
          />
          <FeatureCard
            icon={<FileText className="w-8 h-8 text-memora-primary" />}
            title="Note cliniche"
            desc="Archivio di osservazioni professionali, legate a ciascun paziente."
          />
          <FeatureCard
            icon={<Stethoscope className="w-8 h-8 text-memora-primary" />}
            title="Report umore"
            desc="Andamento emotivo nel tempo per decisioni cliniche informate."
          />
          <FeatureCard
            icon={<Shield className="w-8 h-8 text-memora-primary" />}
            title="Sicurezza RLS"
            desc="Supabase con Row Level Security: accesso solo ai soggetti autorizzati."
          />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20 bg-memora-bg-secondary/50 rounded-3xl p-8 md:p-12 border border-memora-lilla-soft/40 card-shadow">
          <div>
            <h2 className="text-2xl font-serif font-bold text-memora-primary-dark mb-4">Come accedere</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Registrati selezionando <strong>Operatore Sanitario</strong> — accesso immediato e gratuito in beta.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Per <strong>pilot istituzionali</strong> (RSA, ambulatori, ASL): contattaci per onboarding dedicato.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-100 card-shadow">
            <p className="text-sm text-gray-600 italic">
              Memora non sostituisce la valutazione clinica. È uno strumento di supporto al monitoraggio domiciliare
              nelle fasi iniziale e moderata dell'Alzheimer.
            </p>
          </div>
        </div>

        <div className="text-center max-w-2xl mx-auto">
          <img src="/airalzh-logo.png" alt="Airalzh ETS" className="h-14 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-memora-primary-dark mb-3">Partner Airalzh</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            Partner scientifico qualificato nella ricerca sull'Alzheimer.{' '}
            <a href={AIRALZH_URL} target="_blank" rel="noopener noreferrer" className="text-memora-primary hover:underline">
              Airalzh ETS
            </a>{' '}
            promuove la ricerca medico-scientifica su scala nazionale dal 2014.
          </p>
          <SecondaryButton to="/contatti">Richiedi accesso pilota</SecondaryButton>
        </div>
      </div>
    </>
  );
}
