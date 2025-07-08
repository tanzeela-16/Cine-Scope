export default function GenreFilter({ genres, selectedGenre, onSelect }) {
  return (
    <div className="flex flex-wrap gap-3 my-4">
      {genres.map((genre) => (
        <button
          key={genre.id}
          onClick={() => onSelect(genre.id)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            selectedGenre === genre.id
              ? 'bg-[#e50914] text-white'
              : 'bg-[#333] text-gray-300 hover:bg-[#e50914]'
          }`}
        >
          {genre.name}
        </button>
      ))}
    </div>
  );
}
