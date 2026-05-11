import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import AppFeatures from './pages/AppFeatures';
import Tester from './pages/Tester';
import Research from './pages/Research';
import Investors from './pages/Investors';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="app" element={<AppFeatures />} />
        <Route path="tester" element={<Tester />} />
        <Route path="ricerca" element={<Research />} />
        <Route path="investitori" element={<Investors />} />
        <Route path="contatti" element={<Contact />} />
      </Route>
    </Routes>
  );
}
