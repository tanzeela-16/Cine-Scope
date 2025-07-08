export default function MovieCard({ movie }) {
  return (
    <div className="bg-[#111] rounded-xl overflow-hidden shadow hover:scale-105 transition-transform duration-300">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="w-full h-72 object-cover"
      />
      <div className="p-4 text-white space-y-1">
        <h3 className="font-semibold text-lg truncate">{movie.title}</h3>
        <p className="text-gray-400 text-sm">{movie.release_date}</p>
        <p className="text-[#e50914] text-sm">⭐ {movie.vote_average}</p>
      </div>
    </div>
  );
}
