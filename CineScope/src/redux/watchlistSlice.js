import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  watchlist: [],
};

const watchlistSlice = createSlice({
  name: 'watchlist',
  initialState,
  reducers: {
    addToWatchlist: (state, action) => {
      const movie = action.payload;
      if (!state.watchlist.find(item => item.id === movie.id)) {
        state.watchlist.push(movie);
      }
    },
    removeFromWatchlist: (state, action) => {
      const movieId = action.payload;
      state.watchlist = state.watchlist.filter(item => item.id !== movieId);
    },
  },
});

export const { addToWatchlist, removeFromWatchlist } = watchlistSlice.actions;
export default watchlistSlice.reducer;
