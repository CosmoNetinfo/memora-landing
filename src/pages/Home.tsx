import { ArrowRight, HeartPulse, Shield, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/layout/PageTransition';

export default function Home() {
  return (
    <PageTransition className="!py-0">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-24 md:pt-28 md:pb-32 flex flex-col items-center text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-memora-primary-soft/30 rounded-full blur-3xl -z-10 animate-pulse"></div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-memora-primary/10 text-memora-primary font-medium text-sm mb-4">
            <HeartPulse className="w-4 h-4" />
            <span>Assistenza Alzheimer Digitale</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-gray-900 tracking-tight leading-tight">
            La cura comincia <br />
            <span className="text-memora-primary">da qui.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Memora connette pazienti, caregiver, medici e ricercatori in un unico ecosistema digitale sicuro, semplice e orientato al benessere.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              to="/app"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-memora-primary text-white font-medium text-lg hover:bg-memora-primary-dark transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              Scopri l'App
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/tester"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-memora-primary border-2 border-memora-primary/20 font-medium text-lg hover:bg-memora-bg transition-all flex items-center justify-center"
            >
              Diventa Tester
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-memora-primary-dark text-white py-12 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 mb-20 shadow-inner">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10 text-center">
          <div className="px-4">
            <div className="text-4xl md:text-5xl font-serif font-bold text-memora-primary-soft mb-2">1,2M</div>
            <div className="text-sm text-white/70 tracking-wide">Persone con demenza in Italia</div>
          </div>
          <div className="px-4">
            <div className="text-4xl md:text-5xl font-serif font-bold text-memora-primary-soft mb-2">4</div>
            <div className="text-sm text-white/70 tracking-wide">Ruoli utente distinti</div>
          </div>
          <div className="px-4">
            <div className="text-4xl md:text-5xl font-serif font-bold text-memora-primary-soft mb-2">0€</div>
            <div className="text-sm text-white/70 tracking-wide">Costo di accesso alla beta</div>
          </div>
          <div className="px-4">
            <div className="text-4xl md:text-5xl font-serif font-bold text-memora-primary-soft mb-2">PWA</div>
            <div className="text-sm text-white/70 tracking-wide">Installabile senza store</div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 border-t border-gray-100">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">Un impatto reale sulla qualità di vita</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Abbiamo progettato Memora per rispondere alle necessità quotidiane di chi affronta l'Alzheimer, mettendo al centro la persona.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Users className="w-8 h-8 text-memora-primary" />,
              title: "Per la famiglia",
              desc: "Un punto di riferimento condiviso per monitorare, ricordare e comunicare, riducendo lo stress dei caregiver."
            },
            {
              icon: <Shield className="w-8 h-8 text-memora-primary" />,
              title: "Per il paziente",
              desc: "Design inclusivo con interfacce vocal-first e agende chiare per supportare l'autonomia il più a lungo possibile."
            },
            {
              icon: <HeartPulse className="w-8 h-8 text-memora-primary" />,
              title: "Per i clinici",
              desc: "Dati in tempo reale su mood e aderenza terapeutica per decisioni mediche tempestive e personalizzate."
            }
          ].map((feature, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-memora-bg rounded-2xl flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
