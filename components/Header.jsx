import { Link, NavLink } from "react-router-dom";

const navClass = ({ isActive }) =>
  `transition-colors hover:text-pink-700 ${isActive ? "text-pink-700 font-bold" : "text-stone-700"}`;

export default function Header() {
  return (
    <header className="bg-pink-100 shadow-sm">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-4">
        <Link to="/" className="flex items-center gap-3">
          <span className="text-4xl" aria-hidden="true">🐾</span>
          <span>
            <span className="block text-2xl font-bold text-pink-700 sm:text-3xl">Paw Palace</span>
            <span className="block text-xs text-stone-600">Everything for your pets</span>
          </span>
        </Link>
        <nav aria-label="Main navigation" className="flex flex-wrap items-center gap-x-5 gap-y-3 font-medium">
          <NavLink to="/" end className={navClass}>Home</NavLink>
          <NavLink to="/login" className={navClass}>Login</NavLink>
          <NavLink to="/adduser" className={navClass}>Add User</NavLink>
          <NavLink to="/showuser" className={navClass}>Show Users</NavLink>
        </nav>
      </div>
    </header>
  );
}
