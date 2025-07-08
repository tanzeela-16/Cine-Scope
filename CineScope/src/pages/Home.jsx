import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setMovies,
  setLoading,
  setError,
} from '../redux/movieSlice';
import { fetchTrendingMovies } from '../services/movieService';
import MovieCard from '../components/MovieCard';

const genres = [
  'Action', 'Comedy', 'Drama', 'Sci-Fi', 'Thriller',
  'Horror', 'Romance', 'Animation', 'Documentary', 'Fantasy',
];

const Home = () => {
  const dispatch = useDispatch();
  const { movies, loading, error } = useSelector((state) => state.movies);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        dispatch(setLoading(true));
        const trending = await fetchTrendingMovies(); // replace with actual call
        dispatch(setMovies(trending));
        dispatch(setLoading(false));
      } catch (err) {
        dispatch(setError('Failed to fetch movies'));
        dispatch(setLoading(false));
      }
    };

    loadMovies();
  }, [dispatch]);

  return (
    <div >
      {/* Section Title */}
      <h1 className="text-3xl md:text-4xl font-semibold mb-6">Explore by Genre</h1>

      {/* Genre Buttons */}
      <div className="flex flex-wrap gap-3 mb-8">
        {genres.map((genre) => (
          <button
            key={genre}
            className="bg-[#3A232B] text-white px-4 py-1.5 rounded-full text-sm hover:bg-[#5A2B3E] transition"
          >
            {genre}
          </button>
        ))}
      </div>

      {/* Genre Section - Static "Action" */}
      <h2 className="text-2xl font-semibold mb-4">Action</h2>

      {/* Loading/Error */}
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {/* Movie Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Home;
