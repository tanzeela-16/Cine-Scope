import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Header() {
  const [dark, setDark] = useState(() => localStorage.getItem('theme') === 'dark');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);

  const navLinkStyle = ({ isActive }) =>
    isActive
      ? 'text-[#e50914] font-semibold'
      : 'text-white hover:text-[#e50914] transition-colors';

  return (
    <header className="bg-black text-white px-6 py-4 shadow-md flex flex-col md:flex-row md:justify-between md:items-center gap-4">
      {/* Logo */}
      <NavLink to="/" className="text-2xl font-bold text-[#e50914]">
        🎬 CineScope
      </NavLink>

      {/* Nav Links */}
      <nav className="flex gap-6 text-sm md:text-base">
        <NavLink to="/" className={navLinkStyle}>
          Home
        </NavLink>
        <NavLink to="/favorites" className={navLinkStyle}>
          Favorites
        </NavLink>
        <NavLink to="/watchlist" className={navLinkStyle}>
          Watchlist
        </NavLink>
      </nav>

      {/* Dark Mode Toggle */}
      <button
        onClick={() => setDark(!dark)}
        className="bg-[#222] text-white px-4 py-2 rounded-md text-sm hover:bg-[#e50914] transition-all"
      >
        {dark ? '☀ Light Mode' : '🌙 Dark Mode'}
      </button>
    </header>
  );
}
