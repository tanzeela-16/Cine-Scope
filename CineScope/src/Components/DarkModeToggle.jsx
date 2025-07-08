import { useEffect, useState } from 'react';

export default function DarkModeToggle() {
  const [dark, setDark] = useState(() => localStorage.getItem('theme') === 'dark');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="bg-[#222] text-white px-4 py-2 rounded-md text-sm hover:bg-[#e50914] transition-all"
    >
      {dark ? '☀ Light Mode' : '🌙 Dark Mode'}
    </button>
  );
}
