# Memora Landing — Deploy (Windows)

Pacchetto pronto per **Vercel**. Stack: Vite + React + React Router (SPA).

## Requisiti

- [Node.js 20 LTS](https://nodejs.org/) (o 22)
- Account Vercel collegato al progetto
- Opzionale: [Vercel CLI](https://vercel.com/docs/cli) (`npm i -g vercel`)

## Setup locale (prima volta)

Apri **PowerShell** o **CMD** nella cartella del progetto:

```powershell
cd memora-landing
npm install
npm run build
npm run preview
```

Apri `http://localhost:4173` e verifica che tutte le pagine funzionino (inclusi `/privacy`, `/per-le-famiglie`, ecc.).

## Deploy su Vercel (consigliato)

### Opzione A — Dashboard Vercel (Git)

1. Push del repo su GitHub/GitLab
2. Vercel → **Add New Project** → importa il repo
3. Impostazioni build (auto-rilevate):
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
4. Deploy

Il file `vercel.json` include già i rewrite SPA per le route (`/privacy`, `/contatti`, …).

### Opzione B — Vercel CLI da Windows

```powershell
npm install -g vercel
cd memora-landing
vercel login
vercel
```

Per produzione:

```powershell
vercel --prod
```

## Struttura importante

| Path | Contenuto |
|------|-----------|
| `public/screens/` | Screenshot app (6 PNG) |
| `public/logo.svg` | Logo Memora |
| `public/airalzh-logo.png` | Logo partner |
| `vercel.json` | Rewrite SPA |
| `dist/` | Build già generata (opzionale, Vercel rifà la build) |

## Note

- **Non** serve `.env` per la landing (form contatti usa `mailto:`).
- App beta linkata: `https://alzheimerapp-chi.vercel.app/`
- Email contatto: `info@airalzh.it`

## Problemi comuni

| Problema | Soluzione |
|----------|-----------|
| 404 su sottopagine in produzione | Verifica che `vercel.json` sia nella root |
| `npm` non riconosciuto | Reinstalla Node.js e riapri il terminale |
| Build fallisce | `npm install` poi `npm run build` e leggi l'errore TypeScript |

---

Michele Mosca · Daniele Spalletti · Memora NID Perugia 2026
