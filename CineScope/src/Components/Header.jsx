import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-black text-white px-6 py-4 shadow-md flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-[#e50914]">🎬 CineScope</Link>
      <nav className="space-x-6 text-sm md:text-base">
        <Link to="/" className="hover:text-[#e50914]">Home</Link>
        <Link to="/favorites" className="hover:text-[#e50914]">Favorites</Link>
        <Link to="/watchlist" className="hover:text-[#e50914]">Watchlist</Link>
      </nav>
    </header>
  );
}
