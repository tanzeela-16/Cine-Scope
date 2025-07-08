export default function SearchBar({ value, onChange }) {
  return (
    <div className="my-4">
      <input
        type="text"
        placeholder="Search movies..."
        className="w-full p-3 rounded-xl bg-[#1a1a1a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#e50914]"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
