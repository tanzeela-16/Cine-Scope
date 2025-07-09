import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies, setSelectedGenre } from '../redux/movieSlice';
import MovieCard from '../components/MovieCard';

// Map genre names to TMDB genre IDs
const genreMap = {
  Action: 28,
  Comedy: 35,
  Drama: 18,
  'Sci-Fi': 878,
  Thriller: 53,
  Horror: 27,
  Romance: 10749,
  Animation: 16,
  Documentary: 99,
  Fantasy: 14,
};

const genres = Object.keys(genreMap);

const Home = () => {
  const dispatch = useDispatch();
  const { filteredMovies, status, selectedGenre } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const handleGenreClick = (genreName) => {
    const genreId = genreMap[genreName];
    dispatch(setSelectedGenre(genreId));
  };

  return (
    <div>
      <h1 className="text-3xl md:text-4xl font-semibold mb-6">Explore by Genre</h1>

      <div className="flex flex-wrap gap-3 mb-4">
        {genres.map((genreName) => (
          <button
            key={genreName}
            onClick={() => handleGenreClick(genreName)}
            className={`px-4 py-1.5 rounded-full text-sm transition ${
              selectedGenre === genreMap[genreName]
                ? 'bg-[#5A2B3E] text-white'
                : 'bg-[#3A232B] text-white hover:bg-[#5A2B3E]'
            }`}
          >
            {genreName}
          </button>
        ))}
      </div>

      <h2 className="text-2xl font-semibold mb-4">Trending Movies</h2>

      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p className="text-red-500">Failed to load movies</p>}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Home;
