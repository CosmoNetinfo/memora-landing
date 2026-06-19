import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Send } from 'lucide-react';
import { DocumentTitle } from '../components/DocumentTitle';
import { PageHero } from '../components/ui';
import { AIRALZH_EMAIL, APP_URL, CONTACT_EMAIL, TEAM, THESIS, legalLinks, pageMeta } from '../lib/constants';

export default function Contatti() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    const nome = data.get('nome') as string;
    const email = data.get('email') as string;
    const ruolo = data.get('ruolo') as string;
    const messaggio = (data.get('messaggio') as string) || '(nessun messaggio)';

    const subject = encodeURIComponent(`[Memora] Contatto da ${nome} — ${ruolo}`);
    const body = encodeURIComponent(
      `Nome: ${nome}\nEmail: ${email}\nRuolo: ${ruolo}\n\nMessaggio:\n${messaggio}`
    );

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 500);
  };

  return (
    <>
      <DocumentTitle title={pageMeta.contatti.title} description={pageMeta.contatti.description} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <PageHero
          title="Scrivici"
          subtitle="Famiglia, medico, sponsor o curioso sulla tesi — rispondiamo entro 48 ore lavorative."
        />

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            {sent ? (
              <div className="bg-memora-bg border border-memora-lilla-soft rounded-2xl p-8 text-center">
                <CheckCircle2 className="w-12 h-12 text-memora-primary mx-auto mb-4" aria-hidden="true" />
                <h3 className="font-bold text-gray-900 mb-2">Grazie!</h3>
                <p className="text-gray-600 text-sm">Il tuo client email si è aperto. Ti risponderemo presto.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl border border-gray-100 card-shadow space-y-5">
                <div>
                  <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">Nome *</label>
                  <input id="nome" name="nome" required autoComplete="name" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-memora-primary focus:ring-2 focus:ring-memora-primary/20 outline-none transition" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                  <input id="email" name="email" type="email" required autoComplete="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-memora-primary focus:ring-2 focus:ring-memora-primary/20 outline-none transition" />
                </div>
                <div>
                  <label htmlFor="ruolo" className="block text-sm font-medium text-gray-700 mb-1">Motivo del contatto *</label>
                  <select id="ruolo" name="ruolo" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-memora-primary focus:ring-2 focus:ring-memora-primary/20 outline-none transition bg-white">
                    <option value="caregiver">Caregiver / Familiare</option>
                    <option value="medico">Medico / Operatore sanitario</option>
                    <option value="sponsor">Sponsor / Partner</option>
                    <option value="tesi">Commissione / Discussione tesi</option>
                    <option value="altro">Altro</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="messaggio" className="block text-sm font-medium text-gray-700 mb-1">Messaggio</label>
                  <textarea id="messaggio" name="messaggio" rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-memora-primary focus:ring-2 focus:ring-memora-primary/20 outline-none transition resize-none" />
                </div>
                <label htmlFor="privacy-consent" className="flex items-start gap-3 text-sm text-gray-600 cursor-pointer">
                  <input
                    id="privacy-consent"
                    type="checkbox"
                    required
                    className="mt-0.5 h-4 w-4 shrink-0 accent-memora-primary"
                  />
                  <span className="leading-snug">
                    Acconsento al trattamento dei dati secondo la{' '}
                    <Link to="/privacy" className="text-memora-primary hover:underline font-medium">
                      Privacy Policy
                    </Link>
                    .
                  </span>
                </label>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-memora-primary text-white font-medium hover:bg-memora-primary-dark transition disabled:opacity-60"
                >
                  <Send className="w-4 h-4" aria-hidden="true" />
                  {loading ? 'Apertura email…' : 'Invia messaggio'}
                </button>
              </form>
            )}
          </div>

          <div className="space-y-8">
            <div className="bg-memora-bg/30 p-6 rounded-2xl border border-memora-lilla-soft/30 card-shadow">
              <h3 className="font-bold text-gray-900 mb-4">Contatti diretti</h3>
              <dl className="space-y-4 text-sm">
                <div>
                  <dt className="text-gray-600">Partner</dt>
                  <dd>
                    <a href={`mailto:${AIRALZH_EMAIL}`} className="text-memora-primary hover:underline font-medium">
                      {AIRALZH_EMAIL}
                    </a>
                    <span className="text-gray-600"> — Airalzh Onlus</span>
                  </dd>
                </div>
                <div>
                  <dt className="text-gray-600">Demo app</dt>
                  <dd>
                    <a href={APP_URL} target="_blank" rel="noopener noreferrer" className="text-memora-primary hover:underline font-medium">
                      alzheimerapp-chi.vercel.app
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-100 card-shadow">
              <h3 className="font-bold text-gray-900 mb-2">Team</h3>
              <p className="text-gray-600 text-sm">
                {TEAM.design.name} — {TEAM.design.role}
                <br />
                {TEAM.dev.name} — {TEAM.dev.role}
              </p>
              <p className="text-gray-600 text-sm mt-2">{THESIS.label}</p>
              <p className="mt-4 text-sm">
                <Link to="/design-system" className="text-memora-primary hover:underline font-medium">
                  Design System →
                </Link>
              </p>
            </div>
          </div>
        </div>

        <nav className="max-w-5xl mx-auto mt-16 pt-8 border-t border-gray-200" aria-label="Documenti legali">
          <p className="text-sm text-gray-600 mb-3">Documenti legali</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {legalLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="text-sm text-memora-primary hover:underline">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
