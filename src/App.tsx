import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import './App.css';

//pages
import Dashboard from './pages/Dashboard';
import Powers from './pages/Powers';
import Superheroes from './pages/Superheroes';
import Navigation from './components/Navigation';

function App() {

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/powers" element={<Powers />} />
        <Route path="/superheroes" element={<Superheroes />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
