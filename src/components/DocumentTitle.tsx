import { useEffect } from 'react';

const DEFAULT_TITLE = 'Memora — Assistenza Alzheimer Digitale';
const DEFAULT_DESCRIPTION =
  "Memora — PWA per l'assistenza Alzheimer. Progetto di tesi NID, Università di Perugia 2026. Con il contributo di Airalzh ETS.";

export function DocumentTitle({ title, description }: { title: string; description?: string }) {
  useEffect(() => {
    document.title = title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', description ?? DEFAULT_DESCRIPTION);
    return () => {
      document.title = DEFAULT_TITLE;
      if (meta) meta.setAttribute('content', DEFAULT_DESCRIPTION);
    };
  }, [title, description]);

  return null;
}
