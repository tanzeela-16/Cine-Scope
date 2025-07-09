import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedGenre } from '../redux/movieSlice';

const genreList = [
  { id: 28, name: 'Action' },
  { id: 35, name: 'Comedy' },
  { id: 18, name: 'Drama' },
  { id: 878, name: 'Sci-Fi' },
  { id: 53, name: 'Thriller' },
  { id: 27, name: 'Horror' },
  { id: 10749, name: 'Romance' },
  { id: 16, name: 'Animation' },
  { id: 99, name: 'Documentary' },
  { id: 14, name: 'Fantasy' },
];

const GenreFilter = () => {
  const dispatch = useDispatch();
  const activeGenre = useSelector((state) => state.movies.selectedGenre); // ✅ fixed

  const handleGenreClick = (id) => {
    dispatch(setSelectedGenre(id === activeGenre ? '' : id)); // Use empty string to deselect
  };

  return (
    <div className="flex flex-wrap gap-2">
      {genreList.map((genre) => (
        <button
          key={genre.id}
          className={`px-3 py-1 rounded-full text-sm transition-all ${
            genre.id === Number(activeGenre)
              ? 'bg-pink-600 text-white'
              : 'bg-[#3A232B] text-white hover:bg-pink-700'
          }`}
          onClick={() => handleGenreClick(genre.id)}
        >
          {genre.name}
        </button>
      ))}
    </div>
  );
};

export default GenreFilter;
