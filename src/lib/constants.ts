export const APP_URL = 'https://alzheimerapp-chi.vercel.app/';
export const AIRALZH_URL = 'https://airalzh.it/';
export const AIRALZH_EMAIL = 'info@airalzh.it';
export const CONTACT_EMAIL = AIRALZH_EMAIL;

export const THESIS = {
  program: 'NID',
  university: 'Università di Perugia',
  year: '2026',
  label: 'Progetto di tesi NID · Perugia · 2026',
} as const;

export const TEAM = {
  design: { name: 'Michele Mosca', role: 'UI/UX Design' },
  dev: { name: 'Daniele Spalletti', role: 'Developer' },
} as const;

/** Palette ufficiale — booklet v2 / Airalzh */
export const colors = {
  primary: '#9C69A7',
  primaryDark: '#4A304F',
  lavender: '#A88ABE',
  lillaSoft: '#D4C4E0',
  bg: '#F7F3FA',
  bgSecondary: '#EDE6F3',
  headerBg: '#FFF0F2',
  moodHappy: '#52A88E',
  moodNeutral: '#C9920A',
  moodSad: '#DC4545',
  petalOpacities: [1, 0.78, 0.58, 0.42, 0.3] as const,
} as const;

export const stats = {
  dementiaWorld: '55M',
  dementiaItaly: '2M',
  alzheimerItaly: '600K',
  caregivers: '3M',
  alzheimerShare: '60%',
  decorsoYears: '8–20',
} as const;

export const airalzhFacts = {
  founded: '2014',
  researchers: '60+',
  centers: '25+',
} as const;

export const roles = [
  {
    title: 'Paziente',
    desc: 'Agenda di oggi, mood tracker, SOS, messaggi vocali e guida — tutto con poche scelte per schermata.',
  },
  {
    title: 'Familiare · Caregiver',
    desc: 'Vede agenda e umore da remoto. Quello che aggiunge compare subito sul telefono del paziente.',
  },
  {
    title: 'Medico · Operatore',
    desc: 'Clinical Dashboard, registro attività e note cliniche per ogni paziente seguito.',
  },
  {
    title: 'Amministratore',
    desc: 'Moderazione utenti e contenuti del feed Memoriae.',
  },
] as const;

export const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Famiglie', path: '/per-le-famiglie' },
  { name: 'Medici', path: '/per-i-medici' },
  { name: 'Sponsor', path: '/investitori' },
  { name: 'Contatti', path: '/contatti' },
] as const;

export const legalLinks = [
  { name: 'Privacy', path: '/privacy' },
  { name: 'Cookie', path: '/cookie' },
  { name: 'Sicurezza', path: '/sicurezza' },
  { name: 'Termini Beta', path: '/termini-beta' },
] as const;

export const LOGO_CONCEPT =
  'Il fiore della memoria: cinque petali a goccia con opacità decrescente attorno a un nucleo che persiste — il non-ti-scordar-di-me tradotto in geometria.';

/** Ordine = bottom bar app: Home → Chat → Social → Analisi → Profilo → Impostazioni */
export const appScreens = [
  { step: 1, src: '/screens/home.png', title: 'Home', subtitle: 'Agenda e umore' },
  { step: 2, src: '/screens/chat.png', title: 'Chat', subtitle: 'Messaggi di famiglia' },
  { step: 3, src: '/screens/memoriae.png', title: 'Memoriae', subtitle: 'Feed social' },
  { step: 4, src: '/screens/analisi.png', title: 'Analisi', subtitle: 'Grafici benessere' },
  { step: 5, src: '/screens/profilo.png', title: 'Profilo', subtitle: 'Ruolo e account' },
  { step: 6, src: '/screens/impostazioni.png', title: 'Impostazioni', subtitle: 'Accessibilità' },
] as const;

export const pageMeta = {
  home: {
    title: 'Memora — PWA per l\'assistenza Alzheimer',
    description:
      'Progetto di tesi NID, Università di Perugia 2026. PWA per famiglie, caregiver e medici — con il contributo di Airalzh ETS.',
  },
  famiglie: {
    title: 'Memora per le famiglie — Caregiver e familiari',
    description: 'Agenda condivisa, umore e messaggi vocali per chi assiste un familiare con Alzheimer.',
  },
  medici: {
    title: 'Memora per i medici — Monitoraggio clinico',
    description: 'Clinical Dashboard, registro attività e note cliniche per operatori sanitari.',
  },
  investitori: {
    title: 'Memora — Sponsor e partner',
    description: 'Opportunità di partnership e sponsorizzazione per Memora. Progetto NID Perugia 2026.',
  },
  contatti: {
    title: 'Contatti — Memora',
    description: 'Scrivi al team Memora o ad Airalzh ETS. Beta, partnership e informazioni sulla tesi.',
  },
} as const;
