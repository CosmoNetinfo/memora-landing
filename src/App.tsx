import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Layout from './components/Layout';
import Home from './pages/Home';
import Famiglie from './pages/Famiglie';
import Medici from './pages/Medici';
import Investitori from './pages/Investitori';
import Contatti from './pages/Contatti';
import DesignSystem from './pages/DesignSystem';
import LegalPage from './pages/Legal';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="per-le-famiglie" element={<Famiglie />} />
        <Route path="per-i-medici" element={<Medici />} />
        <Route path="investitori" element={<Investitori />} />
        <Route path="design-system" element={<DesignSystem />} />
        <Route path="contatti" element={<Contatti />} />
        <Route path="privacy" element={<LegalPage type="privacy" />} />
        <Route path="cookie" element={<LegalPage type="cookie" />} />
        <Route path="sicurezza" element={<LegalPage type="sicurezza" />} />
        <Route path="termini-beta" element={<LegalPage type="termini-beta" />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      </Routes>
    </>
  );
}
