import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import './App.css';

//pages
import Dashboard from './pages/Dashboard';
import Powers from './pages/Powers';
import Superheroes from './pages/Superheroes';
import Power from './pages/Power';
import Superhero from './pages/Superhero';
import Navigation from './components/Navigation';

function App() {

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/powers" element={<Powers />} />
        <Route path="/superheroes" element={<Superheroes />} />
        <Route path="/power/:powerId" element={<Power />} />
        <Route path="/hero/:superHeroId" element={<Superhero />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
