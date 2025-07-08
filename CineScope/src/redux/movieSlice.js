import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  movies: [],        // ✅ key accessed in useSelector(state => state.movies.movies)
  genres: [],
  loading: false,
  error: null,
};

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload;
    },
    setGenres: (state, action) => {
      state.genres = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setMovies, setGenres, setLoading, setError } = movieSlice.actions;
export default movieSlice.reducer;
