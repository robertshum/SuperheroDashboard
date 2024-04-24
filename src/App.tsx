import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

//pages
import Dashboard from './pages/Dashboard';
import Powers from './pages/Powers';
import Superheroes
  from './pages/Superheroes';
import Navigation from './components/Navigation';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/powers" element={<Powers />} />
        <Route path="/superheroes" element={<Superheroes />} />
      </Routes>
      <div>

        <div className="navbar bg-base-100">
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>

        <div className="stats shadow">

          <div className="stat">
            <div className="stat-title">Total Page Views</div>
            <div className="stat-value">89,400</div>
            <div className="stat-desc">21% more than last month</div>
          </div>

        </div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button className="btn" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
