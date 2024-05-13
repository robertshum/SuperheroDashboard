import ThemeToggle from "./ThemeToggle";
import { Link } from 'react-router-dom';
import { UserButton } from "@clerk/clerk-react";

function Navigation() {

  return (
    <div className="navbar sticky top-0 bg-base-100  z-10 shadow-md ">
      <div className="navbar-start">
        {/* dropdown menu shows when not large */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link to="/superheroes">Superheroes</Link></li>
            <li><Link to="/powers">Powers</Link></li>
          </ul>
        </div>
        {/* Title */}
        <Link to="/" className="btn btn-ghost text-xl">Superhero Dashboard</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {/* Superhero Dashboard btn */}
          <li><Link to="/superheroes">Superheroes</Link></li>
          <li><Link to="/powers">Powers</Link></li>

        </ul>
      </div>
      <div className="navbar-end gap-2">
        {/* Light and dark theme selection toogle **/}
        <UserButton />
        <ThemeToggle />
      </div>
    </div>
  );
}

export default Navigation;