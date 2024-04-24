import Sun from './graphics/Sun';
import Moon from './graphics/Moon';
import { useEffect, useState } from 'react';

function ThemeToggle() {

  const [theme, setTheme] = useState('forest');

  const toggleTheme = () => {
    setTheme(theme === 'forest' ? 'cupcake' : 'forest');
  };

  //update theme here
  useEffect(() => {
    document.querySelector('html')?.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <label className="swap swap-rotate" htmlFor="themeToggleCb">

      {/* this hidden checkbox controls the state */}
      <input type="checkbox" onClick={toggleTheme} id="themeToggleCb" />

      {/* sun icon */}
      <Sun />

      {/* moon icon */}
      <Moon />
    </label>
  );
}

export default ThemeToggle;