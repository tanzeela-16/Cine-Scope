// Utility functions to handle localStorage

// ----- FAVORITES -----
export const getFavorites = () => {
  const data = localStorage.getItem('favorites');
  return data ? JSON.parse(data) : [];
};

export const saveFavorites = (favorites) => {
  localStorage.setItem('favorites', JSON.stringify(favorites));
};

// ----- WATCHLIST -----
export const getWatchlist = () => {
  const data = localStorage.getItem('watchlist');
  return data ? JSON.parse(data) : [];
};

export const saveWatchlist = (watchlist) => {
  localStorage.setItem('watchlist', JSON.stringify(watchlist));
};
