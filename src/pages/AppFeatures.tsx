import { CalendarHeart, Mic, Activity, Smartphone, Shield, Bell, FileHeart, Stethoscope, Users, LineChart } from 'lucide-react';
import PageTransition from '../components/layout/PageTransition';

export default function AppFeatures() {
  const features = [
    {
      icon: <CalendarHeart className="w-6 h-6 text-memora-primary" />,
      title: "Agenda Cloud Real-time",
      desc: "Tutti gli appuntamenti e le attività sincronizzati istantaneamente tra tutti i membri della famiglia e il personale medico."
    },
    {
      icon: <Activity className="w-6 h-6 text-memora-primary" />,
      title: "Mood Tracker Clinico",
      desc: "Monitoraggio quotidiano dell'umore e dello stato d'animo per fornire ai medici indicazioni preziose sull'efficacia terapeutica."
    },
    {
      icon: <Mic className="w-6 h-6 text-memora-primary" />,
      title: "Messaggi Vocal-First",
      desc: "Interfacce pensate per i pazienti, con focus su comandi e messaggi vocali intuitivi, abbattendo le barriere tecnologiche."
    },
    {
      icon: <Smartphone className="w-6 h-6 text-memora-primary" />,
      title: "PWA – Nessuno Store",
      desc: "Accessibile come un comune sito web ma con le prestazioni di un'app nativa. Nessuna installazione complicata richiesta."
    },
    {
      icon: <Shield className="w-6 h-6 text-memora-primary" />,
      title: "Sicurezza RLS",
      desc: "Row-Level Security implementata alla base. I dati medici e personali sono visibili esclusivamente alle persone autorizzate."
    },
    {
      icon: <Bell className="w-6 h-6 text-memora-accent" />,
      title: "Tasto SOS",
      desc: "Accesso rapido per chiamate d'emergenza o notifiche immediate a tutta la rete di supporto del paziente."
    }
  ];

  const roles = [
    {
      icon: <FileHeart className="w-8 h-8 text-white" />,
      title: "Paziente",
      desc: "Interfaccia semplificata, promemoria chiari e bottoni grandi."
    },
    {
      icon: <Users className="w-8 h-8 text-white" />,
      title: "Caregiver",
      desc: "Controllo dell'agenda, monitoraggio e gestione allerte."
    },
    {
      icon: <Stethoscope className="w-8 h-8 text-white" />,
      title: "Medico",
      desc: "Dashboard clinica, variazioni d'umore e aderenza."
    },
    {
      icon: <LineChart className="w-8 h-8 text-white" />,
      title: "Ricercatore",
      desc: "Accesso a dati aggregati e resi anonimi per la ricerca."
    }
  ];

  const screens = [
    { title: "Login",       sub: '"Bentornat*" — inclusivo dal primo secondo',    img: "/login.png"   },
    { title: "Home",        sub: "Agenda, umore e pillola di benessere",           img: "/home.png"    },
    { title: "Chat Vocale", sub: "Waveform dinamica, nessun testo da digitare",   img: "/chat.png"    },
    { title: "Profilo",     sub: "Attività recenti e impostazioni",                img: "/profile.png" },
    { title: "Momenti",     sub: "Condivisione sicura tra caregiver e famiglia",   img: "/social.png"  },
  ];

  return (
    <PageTransition>
      <div className="text-center max-w-3xl mx-auto mb-20">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
          Un'app, quattro ruoli
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          Memora non è un'app standard. Adatta la propria interfaccia e le sue funzionalità a seconda di chi effettua l'accesso, garantendo ad ognuno gli strumenti necessari.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
        {roles.map((role, i) => (
          <div key={i} className="bg-memora-primary-dark p-8 rounded-3xl shadow-lg hover:-translate-y-1 transition-transform relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity transform translate-x-4 -translate-y-4 scale-150">
              {role.icon}
            </div>
            <div className="relative z-10">
              <div className="mb-6">{role.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{role.title}</h3>
              <p className="text-memora-primary-soft text-sm leading-relaxed">{role.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
          Tecnologia al servizio della cura
        </h2>
        <p className="text-lg text-gray-600">
          Caratteristiche tecniche avanzate, nascoste da un'interfaccia estremamente intuitiva. Semplice per design.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {features.map((feat, i) => (
          <div key={i} className="flex gap-4 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex-shrink-0 w-12 h-12 bg-memora-bg rounded-xl flex items-center justify-center">
              {feat.icon}
            </div>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">{feat.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feat.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-memora-bg/30 rounded-3xl p-8 md:p-12 border border-memora-primary-soft/30">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-block px-4 py-2 rounded-full bg-memora-primary/10 text-memora-primary font-medium text-sm mb-4">
            Interfaccia reale
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
            Semplice per design
          </h2>
          <p className="text-gray-600">
            Ogni schermata è progettata con un solo principio: meno scelte cognitive, più autonomia reale per l'utente.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {screens.map((screen, i) => (
            <div key={i} className="bg-white rounded-2xl p-3 md:p-4 text-center border border-gray-100 shadow-sm hover:-translate-y-1 transition-transform">
              <div className="relative mx-auto mb-4" style={{ maxWidth: '130px' }}>
                <div
                  className="rounded-[18px] overflow-hidden shadow-md"
                  style={{ aspectRatio: '9/16', border: '3px solid #e5e7eb' }}
                >
                  <img
                    src={screen.img}
                    alt={screen.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Notch */}
                <div
                  className="absolute left-1/2 -translate-x-1/2 bg-gray-300 rounded-full z-10"
                  style={{ top: '7px', width: '32%', height: '5px' }}
                />
              </div>
              <h4 className="font-bold text-sm text-gray-900 mb-1">{screen.title}</h4>
              <p className="text-xs text-gray-500 leading-tight">{screen.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
