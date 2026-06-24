# 🧠 Memora — Landing Page

[![Website](https://img.shields.io/website?url=https%3A%2F%2Fmemora-landing-bay.vercel.app%2F)](https://memora-landing-bay.vercel.app/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**Memora** è un'applicazione innovativa progettata per assistere i pazienti affetti da Alzheimer e supportare i loro caregiver nel monitoraggio quotidiano. Questa repository contiene la **Landing Page** ufficiale del progetto, riscritta e ottimizzata in React + Vite.

## 🚀 Visione
Memora nasce per trasformare l'assistenza domiciliare attraverso la tecnologia. L'obiettivo è offrire autonomia al paziente (tramite interfacce vocali semplificate) e tranquillità ai familiari (tramite monitoraggio costante e condivisione sicura dei dati).

## 🛠️ Stack Tecnologico
- **Framework**: React 19 + TypeScript
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS v4
- **Routing**: React Router v7
- **Hosting**: [Vercel](https://vercel.com) con rewrite SPA abilitati in `vercel.json`

## 📁 Struttura del Progetto
```text
├── public/           # Asset statici (logo, screenshot dell'app, icone)
├── src/
│   ├── components/   # Componenti React riutilizzabili (Header, Footer, Layout, UI)
│   ├── lib/          # Costanti, utilities e configurazioni
│   ├── pages/        # Pagine del sito (Home, Famiglie, Medici, Investitori, Contatti, Legal, DesignSystem)
│   ├── App.tsx       # Routing principale dell'applicazione
│   ├── main.tsx      # Entry point di React
│   └── index.css     # Stili globali e configurazione Tailwind CSS
├── index.html        # Entry point HTML per Vite
├── package.json      # Dipendenze e script npm
├── tsconfig.json     # Configurazione TypeScript
├── vercel.json       # Configurazione per il routing SPA e deploy su Vercel
└── vite.config.ts    # Configurazione di Vite
```

## 💻 Sviluppo Locale

Per eseguire il progetto in locale, installa le dipendenze e avvia il server di sviluppo di Vite:

```bash
# Installa le dipendenze
npm install

# Avvia il server in modalità sviluppo
npm run dev

# Effettua la build di produzione
npm run build
```

## 👥 Contatti
Sviluppato da **Daniele Spalletti** per [CosmoNet](https://www.cosmonet.info).  
Design a cura di **Michele Mosca**.

---
*Progetto ispirato alla missione di Airalzh ETS per la ricerca sull'Alzheimer.*
