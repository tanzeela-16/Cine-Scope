// src/pages/NotFound.jsx
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-white px-4">
      <h1 className="text-6xl font-bold text-[#e50914]">404</h1>
      <p className="text-xl mt-4 mb-6">Page Not Found</p>
      <Link
        to="/"
        className="bg-[#e50914] hover:bg-red-600 text-white px-5 py-2 rounded-md"
      >
        Go Home
      </Link>
    </div>
  );
}