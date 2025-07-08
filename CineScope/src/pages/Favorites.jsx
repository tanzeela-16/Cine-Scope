// src/pages/Favorites.jsx
import { useSelector } from 'react-redux';
import MovieCard from '../components/MovieCard';

export default function Favorites() {
  const favorites = useSelector((state) => state.favorites.items);

  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      <h2 className="text-2xl text-white font-semibold mb-6">Your Favorites</h2>
      {favorites.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {favorites.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <p className="text-gray-400">You have no favorite movies yet.</p>
      )}
    </div>
  );
}