import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import MovieDetail from './pages/MovieDetail';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <Router>
      <div className="bg-[#0F0F0F] text-white min-h-screen">
        <Header /> {/* 👈 Make sure Header is added here */}
        <main className="p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/movie/:id" element={<MovieDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
