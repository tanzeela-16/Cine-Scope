import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
      <h1 className="text-5xl md:text-6xl font-extrabold text-red-600 mb-4 text-center drop-shadow-lg">
        🎬 Welcome to CineScope
      </h1>
      <p className="text-lg md:text-xl text-gray-300 text-center max-w-2xl">
        Explore trending, latest, and popular movies. Dive deep into movie details, search by genre or year, and build your personal watchlist.
      </p>
    </div>
  );
};

export default Home;
