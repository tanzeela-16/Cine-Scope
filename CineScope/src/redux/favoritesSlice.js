import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    list: [],
  },
  reducers: {
    addToFavorites: (state, action) => {
      const movie = action.payload;
      if (!state.list.find((item) => item.id === movie.id)) {
        state.list.push(movie);
      }
    },
    removeFromFavorites: (state, action) => {
      const movieId = action.payload;
      state.list = state.list.filter((item) => item.id !== movieId);
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;
