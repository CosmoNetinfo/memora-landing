import { Link } from 'react-router-dom';
import {
  ArrowRight,
  GraduationCap,
  CalendarHeart,
  Activity,
  Bell,
  Mic,
  Camera,
  LineChart,
} from 'lucide-react';
import { DocumentTitle } from '../components/DocumentTitle';
import { PrimaryButton, SecondaryButton, SectionTitle, FeatureCard, AppScreenshotGallery } from '../components/ui';
import { APP_URL, AIRALZH_URL, TEAM, THESIS, stats, roles, pageMeta, appScreens } from '../lib/constants';

export default function Home() {
  return (
    <>
      <DocumentTitle title={pageMeta.home.title} description={pageMeta.home.description} />
      <div>
        {/* Hero — tesi + prodotto */}
        <section className="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-28 flex flex-col items-center text-center bg-memora-header">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-memora-lilla-soft/40 rounded-full blur-3xl -z-10" />
          <div className="max-w-4xl mx-auto px-4 space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-memora-primary/10 text-memora-primary font-medium text-sm">
              <GraduationCap className="w-4 h-4" aria-hidden="true" />
              <span>{THESIS.label}</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-memora-primary-dark tracking-tight leading-tight">
              Memora
            </h1>
            <p className="text-xl md:text-2xl text-memora-primary font-medium max-w-2xl mx-auto">
              Una PWA per mettere nello stesso spazio chi convive con l'Alzheimer e chi se ne prende cura.
            </p>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Agenda, umore, chat vocali e monitoraggio clinico — sincronizzati tra paziente, famiglia e medico.
              Progetto di {TEAM.design.name} e {TEAM.dev.name}, con il contributo di <strong>Airalzh ETS</strong>.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <PrimaryButton href={APP_URL} external>
                Apri la demo
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </PrimaryButton>
              <SecondaryButton to="/investitori">Partner e sponsor</SecondaryButton>
            </div>
            <p className="text-sm text-gray-600">Beta gratuita · Web, iOS e Android · Installabile come app</p>
          </div>
        </section>

        {/* Il problema */}
        <section className="py-14 md:py-16 bg-white border-b border-gray-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-block px-4 py-2 rounded-full bg-memora-primary/10 text-memora-primary font-medium text-sm mb-4">
              Il contesto
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-memora-primary-dark mb-6">
              L'Alzheimer riguarda milioni di famiglie
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Circa il <strong>{stats.alzheimerShare}</strong> delle demenze è Alzheimer. In Italia oltre{' '}
              <strong>{stats.dementiaItaly}</strong> persone convivono con una demenza; dietro ogni diagnosi ci sono{' '}
              <strong>{stats.caregivers} caregiver</strong>, spesso senza strumenti condivisi.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              Memora nasce per le fasi iniziale e moderata — quando autonomia e consapevolezza sono ancora presenti
              e un'interfaccia semplice può fare la differenza ogni giorno.
            </p>
          </div>
        </section>

        {/* Demo — protagonista per la discussione */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-memora-bg-secondary/50 rounded-3xl p-8 md:p-12 border border-memora-lilla-soft/40">
            <SectionTitle
              eyebrow="Il prototipo"
              title="L'app in azione"
              subtitle="Sei schermate nell'ordine della bottom bar — da Home a Impostazioni."
            />
            <AppScreenshotGallery screens={appScreens} />
          </div>
        </section>

        {/* Stats */}
        <section className="bg-memora-primary-dark text-white py-12" aria-label="Numeri chiave">
          <dl className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: stats.dementiaWorld, label: 'Persone con demenza (mondo)' },
              { value: stats.caregivers, label: 'Caregiver in Italia' },
              { value: '4', label: 'Ruoli nell\'app' },
              { value: 'PWA', label: 'Nessuno store richiesto' },
            ].map((stat) => (
              <div key={stat.label} className="px-4">
                <dt className="text-4xl md:text-5xl font-serif font-bold text-memora-lilla-soft mb-2">{stat.value}</dt>
                <dd className="text-sm text-white/90">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Ruoli */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="Quattro ruoli, un unico spazio" subtitle="Ogni profilo vede solo ciò che gli serve." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roles.map((role) => (
              <div key={role.title} className="bg-white p-6 rounded-3xl border border-gray-100 card-shadow">
                <h3 className="font-bold text-memora-primary-dark mb-2">{role.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{role.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Per chi */}
        <section className="py-20 bg-white border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle title="Esplora il progetto" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Famiglie e caregiver',
                  desc: 'Agenda condivisa, umore visibile, messaggi vocali — meno telefonate, meno dubbi.',
                  to: '/per-le-famiglie',
                },
                {
                  title: 'Medici e operatori',
                  desc: 'Dashboard clinica, registro attività e note — gli stessi dati che il paziente inserisce.',
                  to: '/per-i-medici',
                },
                {
                  title: 'Sponsor e partner',
                  desc: 'Mercato, roadmap, modello di business e team — materiali per chi vuole sostenere il progetto.',
                  to: '/investitori',
                },
              ].map((card) => (
                <Link
                  key={card.to}
                  to={card.to}
                  className="group bg-memora-bg p-8 rounded-3xl border border-memora-lilla-soft/50 card-shadow motion-safe:hover:-translate-y-1 transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-memora-primary"
                >
                  <h3 className="text-xl font-bold text-memora-primary-dark mb-3 group-hover:text-memora-primary transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{card.desc}</p>
                  <span className="text-memora-primary font-medium text-sm inline-flex items-center gap-1">
                    Approfondisci <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Funzionalità */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Cosa fa Memora"
            subtitle="Progettata per chi dimentica: una schermata, una decisione."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<CalendarHeart className="w-8 h-8 text-memora-primary" />}
              title="Agenda & Registro"
              desc="Task con orario, spuntabili. Il caregiver aggiunge un impegno e il paziente lo vede subito."
            />
            <FeatureCard
              icon={<Activity className="w-8 h-8 text-memora-primary" />}
              title="Umore & Benessere"
              desc="Tre stati emotivi, grafici nel tempo. Il medico vede pattern — alert se 2+ giorni consecutivi tristi."
            />
            <FeatureCard
              icon={<Mic className="w-8 h-8 text-memora-primary" />}
              title="Vocal-first"
              desc="Messaggi audio per chi fatica a digitare. Chat privata e presenza online."
            />
            <FeatureCard
              icon={<Camera className="w-8 h-8 text-memora-primary" />}
              title="Memoriae"
              desc="Feed per momenti in famiglia — foto, pensieri, ruolo e umore accanto a ogni nome."
            />
            <FeatureCard
              icon={<LineChart className="w-8 h-8 text-memora-primary" />}
              title="Clinical Dashboard"
              desc="Per il medico: andamento umore, attività completate, archivio note cliniche."
            />
            <FeatureCard
              icon={<Bell className="w-8 h-8 text-memora-mood-sad" />}
              title="SOS & Assistente"
              desc="Emergenze a un tap. Assistente integrato e guida all'uso per ogni ruolo."
            />
          </div>
        </section>

        {/* Principi */}
        <section className="py-20 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle title="Scelte di design" />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Una schermata, una decisione', desc: 'Poche scelte per schermata, basso carico cognitivo.' },
                { title: 'Il colore rassicura', desc: 'Viola caldi Airalzh, contrasti morbidi.' },
                { title: 'Accessibilità default', desc: 'Caratteri grandi, pulsanti ampi, messaggi vocali.' },
                { title: 'Sincronizzazione live', desc: 'Supabase Realtime — tutti vedono gli stessi dati, senza ricaricare.' },
              ].map((p) => (
                <div key={p.title} className="p-6 rounded-2xl bg-memora-bg border border-memora-lilla-soft/40 card-shadow">
                  <h3 className="font-bold text-memora-primary-dark mb-2 text-sm">{p.title}</h3>
                  <p className="text-gray-600 text-sm">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team + Airalzh */}
        <section className="py-20 max-w-3xl mx-auto px-4 text-center">
          <a
            href={AIRALZH_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white rounded-2xl px-8 py-4 card-shadow mb-6"
          >
            <img src="/airalzh-logo.png" alt="Airalzh Onlus" className="h-16 w-auto mx-auto" />
          </a>
          <h2 className="text-3xl font-serif font-bold text-memora-primary-dark mb-4">Team e partner</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            <strong>{TEAM.design.name}</strong> — {TEAM.design.role}
            <br />
            <strong>{TEAM.dev.name}</strong> — {TEAM.dev.role}
            <br />
            <span className="text-sm">{THESIS.label}</span>
          </p>
          <p className="text-gray-600 text-sm mb-6">
            Con il contributo di <strong>Airalzh ETS</strong> — associazione di riferimento, fondata nel 2014,
            con oltre 60 ricercatori sostenuti in Italia. Airalzh finanzia la ricerca; Memora aiuta le famiglie ogni giorno.
          </p>
          <a href={AIRALZH_URL} target="_blank" rel="noopener noreferrer" className="text-memora-primary font-medium hover:underline">
            airalzh.it →
          </a>
        </section>

        {/* CTA finale */}
        <section className="py-20 bg-memora-primary-dark text-white text-center">
          <div className="max-w-2xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Prova la demo · Parla con noi</h2>
            <p className="text-white/90 mb-8">
              Beta aperta per famiglie e operatori. Per partnership e sponsorizzazioni, scrivici.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <PrimaryButton href={APP_URL} external>
                Apri la demo <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </PrimaryButton>
              <SecondaryButton to="/contatti" onDark>
                Contattaci
              </SecondaryButton>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
