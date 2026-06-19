import { DocumentTitle } from '../components/DocumentTitle';
import { PrimaryButton } from '../components/ui';

export default function NotFound() {
  return (
    <>
      <DocumentTitle title="Pagina non trovata — Memora" />
      <div className="max-w-lg mx-auto px-4 py-24 text-center">
        <p className="text-memora-primary font-medium text-sm mb-4">404</p>
        <h1 className="text-3xl font-serif font-bold text-memora-primary-dark mb-4">Pagina non trovata</h1>
        <p className="text-gray-600 mb-8">Il link che hai seguito non esiste o è stato spostato.</p>
        <PrimaryButton to="/">Torna alla home</PrimaryButton>
      </div>
    </>
  );
}
