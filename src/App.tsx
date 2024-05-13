import { Routes, Route, Navigate } from 'react-router-dom';
import Footer from './components/Footer';
import './App.css';

//pages
import Dashboard from './pages/Dashboard';
import Powers from './pages/Powers';
import Superheroes from './pages/Superheroes';
import Power from './pages/Power';
import Superhero from './pages/Superhero';
import Navigation from './components/Navigation';
import AddPower from './pages/AddPower';
import EditPower from './pages/EditPower';
import AddSuperhero from './pages/AddSuperhero';
import EditSuperhero from './pages/EditSuperhero';
import SignIn from './pages/SignIn';
import { SignedIn, SignedOut } from "@clerk/clerk-react";

function App() {

  return (
    <>
      <SignedOut>
        <SignIn />
      </SignedOut>
      <SignedIn>
        <Navigation />
        <Routes>
          {/* any home '/' or 'SuperHeroDashboard' redirects to dashboard */}
          <Route path="/SuperheroDashboard"
            element={<Navigate to="/" replace />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/powers" element={<Powers />} />
          <Route path="/superheroes" element={<Superheroes />} />
          <Route path="/power/:powerId" element={<Power />} />
          <Route path="/power/edit/:powerId" element={<EditPower />} />
          <Route path="/power/add/" element={<AddPower />} />
          <Route path="/hero/:superHeroId" element={<Superhero />} />
          <Route path="/hero/edit/:superHeroId" element={<EditSuperhero />} />
          <Route path="/hero/add" element={<AddSuperhero />} />
        </Routes>
        <Footer />
      </SignedIn>

    </>
  );
}

export default App;
