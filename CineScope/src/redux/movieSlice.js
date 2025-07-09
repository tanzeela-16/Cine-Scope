// src/redux/movieSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// ✅ Thunk to fetch movies
export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=en-US&page=1`
  );
  return response.data.results;
});

const initialState = {
  allMovies: [],
  filteredMovies: [],
  selectedGenre: '',
  selectedYear: '',
  searchKeyword: '',
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
};

// ✅ Helper to filter movies
const filterMovies = (state) => {
  const { allMovies, selectedGenre, selectedYear, searchKeyword } = state;

  state.filteredMovies = allMovies.filter((movie) => {
    const matchesGenre = selectedGenre
      ? movie.genre_ids.includes(Number(selectedGenre))
      : true;

    const matchesYear = selectedYear
      ? movie.release_date?.startsWith(selectedYear)
      : true;

    const matchesSearch = searchKeyword
      ? movie.title.toLowerCase().includes(searchKeyword.toLowerCase())
      : true;

    return matchesGenre && matchesYear && matchesSearch;
  });
};

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setSelectedGenre: (state, action) => {
      state.selectedGenre = action.payload;
      filterMovies(state);
    },
    setSelectedYear: (state, action) => {
      state.selectedYear = action.payload;
      filterMovies(state);
    },
    setSearchKeyword: (state, action) => {
      state.searchKeyword = action.payload;
      filterMovies(state);
    },
    clearFilters: (state) => {
      state.selectedGenre = '';
      state.selectedYear = '';
      state.searchKeyword = '';
      filterMovies(state); // re-apply to show all
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.allMovies = action.payload;
        state.filteredMovies = action.payload;
      })
      .addCase(fetchMovies.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const {
  setSelectedGenre,
  setSelectedYear,
  setSearchKeyword,
  clearFilters, // ✅ Make sure this is exported
} = movieSlice.actions;

export default movieSlice.reducer;
