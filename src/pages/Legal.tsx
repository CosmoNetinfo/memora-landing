import { DocumentTitle } from '../components/DocumentTitle';
import { PageHero, BackLink } from '../components/ui';

const legalContent: Record<string, { title: string; body: string[] }> = {
  privacy: {
    title: 'Privacy Policy',
    body: [
      'Memora tratta dati personali e, ove applicabile, dati relativi alla salute nel rispetto del Regolamento UE 2016/679 (GDPR).',
      'Titolare del trattamento: Michele Mosca e Daniele Spalletti, con il contributo di Airalzh ETS.',
      'I dati raccolti tramite l\'app (profilo, umore, post, attività) sono conservati su infrastruttura Supabase con accesso controllato per ruolo.',
      'Per esercitare i diritti (accesso, rettifica, cancellazione) scrivi a info@airalzh.it.',
      'Questa pagina è un placeholder. L\'informativa completa sarà integrata con Iubenda o documento legale dedicato.',
    ],
  },
  cookie: {
    title: 'Cookie Policy',
    body: [
      'Questo sito utilizza cookie tecnici necessari al funzionamento.',
      'Non utilizziamo cookie di profilazione senza consenso esplicito.',
      'La policy completa dei cookie sarà integrata con Iubenda.',
    ],
  },
  sicurezza: {
    title: 'Sicurezza',
    body: [
      'Memora adotta misure tecniche e organizzative per proteggere i dati sanitari:',
      '• Autenticazione Supabase con sessioni sicure',
      '• Row Level Security (RLS) a livello database',
      '• HTTPS obbligatorio in produzione',
      '• Accesso ai dati limitato per ruolo (paziente, caregiver, operatore sanitario)',
      '• Infrastruttura cloud isolata',
    ],
  },
  'termini-beta': {
    title: 'Termini Beta',
    body: [
      'Memora è attualmente in fase beta gratuita. L\'uso del servizio implica accettazione dei seguenti termini:',
      '• Il servizio è fornito "as is" senza garanzie di continuità',
      '• Non sostituisce diagnosi, cure o pareri medici professionali',
      '• I feedback degli utenti possono essere utilizzati per migliorare il prodotto',
      '• Ci riserviamo di modificare o interrompere funzionalità durante la beta',
      '• Per domande: info@airalzh.it',
    ],
  },
};

export default function LegalPage({ type }: { type: keyof typeof legalContent }) {
  const content = legalContent[type];
  return (
    <>
      <DocumentTitle title={`${content.title} — Memora`} />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <BackLink fallback="/contatti" label="Documenti legali" />
        <PageHero title={content.title} />
        <div className="max-w-none space-y-4">
          {content.body.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="text-gray-600 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </>
  );
}
