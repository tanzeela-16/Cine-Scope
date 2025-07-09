import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaSearch,
  FaHeart,
  FaUserCircle,
  FaFilter,
  FaBook,
  FaBookmark,
} from 'react-icons/fa';
import GenreFilter from './GenreFilter';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedYear, setSearchKeyword, clearFilters } from '../redux/movieSlice'; // ✅ added clearFilters

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchText, setSearchText] = useState('');
  const dispatch = useDispatch();
  const selectedYear = useSelector((state) => state.movies.selectedYear);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleYearChange = (e) => {
    dispatch(setSelectedYear(e.target.value));
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchText(value);
    dispatch(setSearchKeyword(value));
  };

  const handleClearFilters = () => {
    dispatch(clearFilters());
  };

  return (
    <header className="flex justify-between items-center px-4 py-3 bg-[#1E1E1E] text-white shadow-md">
      {/* Left: Menu Icon + Sidebar */}
      <div className="flex items-center">
        <button onClick={toggleSidebar} className="mr-4 text-xl">
          {isSidebarOpen ? <FaTimes /> : <FaBars />}
        </button>
        <span className="text-2xl font-bold text-pink-500">CineScope</span>
      </div>

      {/* Center: Navigation Links */}
      <nav className="hidden md:flex gap-6">
        <a href="/" className="hover:text-pink-400">Home</a>
        <a href="/movies" className="hover:text-pink-400">Movies</a>
        <a href="/tv-shows" className="hover:text-pink-400">TV Shows</a>
      </nav>

      {/* Right: Search + Icons */}
      <div className="flex items-center gap-4">
        <div className="relative">
          <input
            type="text"
            value={searchText}
            onChange={handleSearchChange}
            placeholder="Search..."
            className="rounded-full px-3 py-1.5 text-sm bg-[#2E2E2E] placeholder-gray-400 text-white focus:outline-none"
          />
          <FaSearch className="absolute top-2.5 right-3 text-sm text-gray-400" />
        </div>
        <FaBookmark className="text-xl hover:text-pink-400 cursor-pointer" />
        <FaUserCircle className="text-2xl hover:text-pink-400 cursor-pointer" />
      </div>

      {/* Sidebar */}
      {isSidebarOpen && (
        <div className="fixed top-0 left-0 h-full w-64 bg-[#2A2A2A] text-white shadow-lg z-50 p-5 overflow-y-auto">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <FaFilter /> Filters
            </h2>
            <button onClick={toggleSidebar}>
              <FaTimes />
            </button>
          </div>

          {/* Filter Sections */}
          <div className="mb-6">
            <h3 className="text-lg font-medium mb-2">Genres</h3>
            <GenreFilter />
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-medium mb-2">Year</h3>
            <select
              className="bg-[#1E1E1E] p-2 rounded w-full text-white"
              value={selectedYear || ''}
              onChange={handleYearChange}
            >
              <option value="">All Years</option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
            </select>
          </div>

          {/* ✅ Clear Filters Button */}
          <button
            onClick={handleClearFilters}
            className="w-full bg-gray-300 text-black font-medium py-2 rounded hover:bg-gray-400 transition"
          >
            Clear Filters
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
