import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './movieSlice';
import favoritesReducer from './favoritesSlice';
import watchlistReducer from './watchlistSlice';

const store = configureStore({
  reducer: {
    movies: movieReducer, // this key becomes state.movies
    favorites: favoritesReducer,
    watchlist: watchlistReducer,
  },
});

export default store;
