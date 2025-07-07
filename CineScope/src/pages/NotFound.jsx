import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
      <h1 className="text-[6rem] font-extrabold text-red-700 drop-shadow-lg mb-2">404</h1>
      <h2 className="text-3xl md:text-4xl font-semibold mb-2">Oops! Page Not Found</h2>
      <p className="text-gray-400 mb-6 text-center max-w-md">
        The reel you’re looking for doesn’t exist. Let’s roll back to the home screen!
      </p>
      <Link
        to="/"
        className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md transition duration-300"
      >
        🎬 Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
