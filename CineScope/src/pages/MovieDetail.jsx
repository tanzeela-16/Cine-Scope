import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieById } from '../services/movieService';

export default function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getMovie = async () => {
      const data = await fetchMovieById(id);
      setMovie(data);
    };
    getMovie();
  }, [id]);

  if (!movie) return <div className="text-white text-center p-4">Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto text-white p-6">
      <h2 className="text-3xl font-bold mb-4">{movie.title}</h2>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="rounded-xl w-full max-w-sm mx-auto mb-4"
      />
      <p className="text-gray-300 mb-2">{movie.overview}</p>
      <p className="text-sm text-[#e50914]">⭐ {movie.vote_average} | 📅 {movie.release_date}</p>
    </div>
  );
}
