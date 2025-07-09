// src/pages/NotFound.jsx
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#1E1E1E] flex flex-col justify-center items-center text-white px-4">
      {/* Subtle Glowing 404 */}
      <h1
        className="text-8xl font-extrabold text-pink-500 mb-4"
        style={{
          textShadow: '0 0 4px #ec4899, 0 0 6px #ec4899',
        }}
      >
        404
      </h1>

      <p className="text-2xl font-medium text-gray-300 mb-6 text-center max-w-md">
        Oops! The page you’re looking for doesn’t exist or has been moved.
      </p>

      {/* Soft Glowing Button */}
      <Link
        to="/"
        className="text-white bg-pink-600 hover:bg-pink-700 px-6 py-2 rounded-full text-lg font-semibold transition duration-300"
        style={{
          boxShadow: '0 0 6px rgba(236, 72, 153, 0.5)',
        }}
      >
        ⬅ Back to Home
      </Link>
    </div>
  );
}
