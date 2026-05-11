import { Mail, MessageSquare, Scale, MapPin } from 'lucide-react';
import PageTransition from '../components/layout/PageTransition';

export default function Contact() {
  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
            Parliamo di Memora
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Il tuo feedback cambia l'app. Memora è progettata ed iterata assieme alle associazioni, ai caregiver e ai diretti interessati. La tua voce è essenziale.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <MessageSquare className="w-6 h-6 text-memora-primary" />
              Contattaci
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4">
                <Mail className="w-6 h-6 text-memora-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Supporto Generale & Feedback</h3>
                  <p className="text-gray-600 text-sm mb-2">Hai un'idea per migliorare Memora? Scrivici.</p>
                  <a href="mailto:admindany@gmail.com" className="text-memora-primary font-medium hover:underline">admindany@gmail.com</a>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4">
                <MapPin className="w-6 h-6 text-memora-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Sede Operativa</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Italia<br />
                    Lavoriamo stabilmente da remoto, raggiungendo pazienti in tutto il territorio nazionale.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Scale className="w-6 h-6 text-memora-primary" />
              Informazioni Legali
            </h2>
            <div className="prose prose-sm text-gray-600">
              <p>
                Memora gestisce i dati dei pazienti nel pieno rispetto del GDPR e della normativa sanitaria italiana ed europea (HIPAA-compliant per le architetture cloud).
              </p>
              <ul className="space-y-4 mt-6 list-none pl-0">
                <li className="pt-4 border-t border-gray-100">
                  <a href="#" className="font-medium text-memora-primary hover:text-memora-primary-dark transition-colors">Privacy Policy</a>
                  <p className="text-sm mt-1">Dettagli su come raccogliamo, conserviamo e proteggiamo i dati sanitari sensibili, inclusa la Row-Level Security.</p>
                </li>
                <li className="pt-4 border-t border-gray-100">
                  <a href="#" className="font-medium text-memora-primary hover:text-memora-primary-dark transition-colors">Termini di Servizio</a>
                  <p className="text-sm mt-1">Condizioni generali d'uso per pazienti, medici e familiari.</p>
                </li>
                <li className="pt-4 border-t border-gray-100">
                  <span className="font-bold text-gray-900">Società</span>
                  <p className="text-sm mt-1">
                    Memora S.r.l. (in costituzione)<br />
                    P.IVA: (In fase di registrazione)
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
