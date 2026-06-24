import { Link } from 'react-router-dom';
import { PageHero, SectionTitle, BackLink } from '../components/ui';
import { colors, LOGO_CONCEPT } from '../lib/constants';

const palette = [
  { name: 'Prugna Scuro', hex: colors.primaryDark, usage: 'Testi · titoli · profondità' },
  { name: 'Viola Vibrante', hex: colors.primary, usage: 'Identità · azioni · petali' },
  { name: 'Lavanda', hex: colors.lavender, usage: 'Enfasi soft' },
  { name: 'Lilla soft', hex: colors.lillaSoft, usage: 'Accenti decorativi' },
  { name: 'Lilla · bg secondary', hex: colors.bgSecondary, usage: 'Card · aree secondarie' },
  { name: 'Lilla chiarissimo · bg', hex: colors.bg, usage: 'Sfondo principale' },
  { name: 'Rosa · solo header', hex: colors.headerBg, usage: 'Header / hero landing' },
];

const moodColors = [
  { mood: 'Felice', emoji: '😊', hex: colors.moodHappy },
  { mood: 'Neutro', emoji: '😐', hex: colors.moodNeutral },
  { mood: 'Triste', emoji: '😢', hex: colors.moodSad },
];

const typography = [
  { name: 'Lexend 800', role: 'Wordmark MEMORA', sample: 'MEMORA', className: 'font-logo text-3xl text-memora-primary-dark' },
  { name: 'Playfair Display 700', role: 'Titoli display', sample: 'Come ti senti?', className: 'font-serif text-3xl text-memora-primary-dark' },
  { name: 'Plus Jakarta Sans', role: 'UI & body (min 14px)', sample: 'Agenda di Oggi', className: 'font-sans text-xl text-gray-700' },
];

const principles = [
  { title: 'Una schermata, una decisione', desc: 'Basso carico cognitivo su ogni vista. L\'app non va reimparata man mano che la malattia avanza.' },
  { title: 'Il colore rassicura', desc: 'Viola caldi, contrasti morbidi, poche cose per schermata.' },
  { title: 'Accessibilità default', desc: 'Caratteri grandi (+30%), pulsanti ampi, vocal-first, prefers-reduced-motion.' },
  { title: 'Tono di voce', desc: '«Come ti senti?» sì — «Inserire stato emotivo» no. Caldo, inclusivo, mai fretta.' },
];

const radii = [
  { name: 'chip', value: '8px' },
  { name: 'card', value: '20px' },
  { name: 'card lg', value: '24px' },
  { name: 'pill · avatar', value: '50px' },
];

export default function DesignSystem() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <BackLink fallback="/contatti" label="Contatti" />
      <PageHero
        title="Il linguaggio visivo"
        accent="di Memora."
        subtitle="Palette Airalzh, tipografia, icona e principi — documentazione ufficiale del progetto."
      />

      <section className="mb-20 text-center max-w-2xl mx-auto">
        <img src="/logo.svg" alt="Fiore della memoria" className="h-28 w-28 mx-auto mb-6 rounded-3xl card-shadow" />
        <h2 className="text-2xl font-serif font-bold text-memora-primary-dark mb-3">Il fiore della memoria</h2>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">{LOGO_CONCEPT}</p>
        <div className="flex justify-center gap-2">
          {colors.petalOpacities.map((op, i) => (
            <div
              key={i}
              className="w-8 h-8 rounded-full"
              style={{ backgroundColor: colors.primary, opacity: op }}
              title={`Petalo ${i + 1}: ${Math.round(op * 100)}%`}
            />
          ))}
        </div>
        <p className="text-xs text-gray-600 mt-3">Gradazione opacità petali: 100% → 30% in senso orario. Nucleo lilla: sempre pieno.</p>
      </section>

      <section className="mb-20">
        <SectionTitle eyebrow="Fondamenta" title="Principi di design" center={false} />
        <div className="grid md:grid-cols-2 gap-6">
          {principles.map((p) => (
            <div key={p.title} className="bg-white p-6 rounded-2xl border border-gray-100 card-shadow">
              <h3 className="font-bold text-memora-primary-dark mb-2">{p.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-20">
        <SectionTitle eyebrow="Colori" title="Palette ufficiale" subtitle="Viola Airalzh adottato pienamente. Il rosa (#FFF0F2) resta solo nell'header." />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {palette.map((c) => (
            <div key={c.name} className="bg-white rounded-2xl border border-gray-100 overflow-hidden card-shadow">
              <div className="h-20" style={{ backgroundColor: c.hex }} />
              <div className="p-4">
                <h3 className="font-bold text-sm text-memora-primary-dark">{c.name}</h3>
                <p className="text-xs font-mono text-memora-primary mt-1">{c.hex}</p>
                <p className="text-xs text-gray-600 mt-2">{c.usage}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-20">
        <SectionTitle eyebrow="Semantico" title="Colori mood — unici codici cromatici" />
        <div className="grid md:grid-cols-3 gap-6">
          {moodColors.map((m) => (
            <div key={m.mood} className="bg-white p-6 rounded-2xl border border-gray-100 card-shadow flex items-center gap-4">
              <div className="w-14 h-14 rounded-full flex items-center justify-center text-2xl border-4" style={{ borderColor: m.hex, backgroundColor: `${m.hex}22` }}>
                {m.emoji}
              </div>
              <div>
                <h3 className="font-bold text-memora-primary-dark">{m.mood}</h3>
                <p className="text-xs font-mono text-gray-600">{m.hex}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-20">
        <SectionTitle eyebrow="Tipografia" title="Tre caratteri, tre compiti" />
        <div className="space-y-6">
          {typography.map((f) => (
            <div key={f.name} className="bg-white p-6 rounded-2xl border border-gray-100 card-shadow">
              <div className="flex flex-wrap justify-between gap-2 mb-3">
                <h3 className="font-bold text-memora-primary-dark">{f.name}</h3>
                <span className="text-xs text-gray-600 bg-memora-bg px-3 py-1 rounded-full">{f.role}</span>
              </div>
              <p className={f.className}>{f.sample}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-20">
        <SectionTitle eyebrow="Layout" title="Raggi & spaziatura" />
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl border border-gray-100 p-6 card-shadow">
            <h3 className="font-bold text-memora-primary-dark mb-4">Raggi angoli</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              {radii.map((r) => (
                <li key={r.name}><span className="font-mono text-memora-primary">{r.value}</span> — {r.name}</li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 p-6 card-shadow">
            <h3 className="font-bold text-memora-primary-dark mb-4">Spaziatura</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Ritmo verticale a base 4: padding contenuto 24–28px, distanza tra sezioni 24px, tra card 16px.
              Area di tocco minima 44×44 px. Contrasto WCAG AA.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-20">
        <SectionTitle eyebrow="Componenti" title="Pattern UI" />
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-[20px] bg-memora-bg border border-memora-lilla-soft/40 card-shadow">
            <p className="text-xs text-gray-600 mb-3">Bottone primario</p>
            <button type="button" className="w-full py-3 rounded-full bg-memora-primary text-white font-medium">Gestisci Attività</button>
          </div>
          <div className="p-6 rounded-[20px] bg-white border border-gray-100 card-shadow">
            <p className="text-xs text-gray-600 mb-3">Mood selector</p>
            <div className="flex justify-center gap-3">
              {moodColors.map((m, i) => (
                <button key={m.mood} type="button" className={`w-12 h-12 rounded-full text-xl flex items-center justify-center border-2 ${i === 0 ? 'border-memora-mood-happy bg-green-50' : 'border-gray-200'}`}>
                  {m.emoji}
                </button>
              ))}
            </div>
          </div>
          <div className="p-6 rounded-[20px] bg-memora-primary text-white card-shadow">
            <p className="text-xs text-white/80 mb-2">Agenda task</p>
            <div className="flex items-center gap-2 text-sm">
              <div className="w-5 h-5 rounded-full border-2 border-white/60" />
              <span>Bere un bicchiere d'acqua</span>
              <span className="ml-auto opacity-70">08:00</span>
            </div>
          </div>
        </div>
      </section>

      <section className="text-center bg-memora-primary-dark text-white rounded-3xl p-12">
        <img src="/logo.svg" alt="Memora" className="w-16 h-16 mx-auto mb-4 rounded-2xl" />
        <p className="text-white/90 text-sm max-w-lg mx-auto mb-6">
          Lockup: icona + MEMORA in Lexend 800. Spazio di rispetto pari al diametro del nucleo.
          Sotto i 48px usare l'icona app piena.
        </p>
        <Link to="/" className="text-memora-lilla-soft hover:text-white font-medium text-sm underline">
          ← Torna alla Home
        </Link>
      </section>
    </div>
  );
}
