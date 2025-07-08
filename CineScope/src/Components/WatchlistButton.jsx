export default function WatchlistButton({ isInWatchlist, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`mt-2 px-3 py-2 rounded-md text-sm font-medium ${
        isInWatchlist
          ? 'bg-gray-800 text-white hover:bg-red-700'
          : 'bg-[#e50914] text-white hover:bg-red-600'
      }`}
    >
      {isInWatchlist ? 'Remove from Watchlist' : 'Add to Watchlist'}
    </button>
  );
}
