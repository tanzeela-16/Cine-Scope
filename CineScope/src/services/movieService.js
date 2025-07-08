import axios from 'axios';
import { API_BASE_URL, API_KEY } from '../config';

const api = axios.create({
  baseURL: API_BASE_URL,
  params: {
    api_key: API_KEY,
    language: 'en-US',
  },
});

export const fetchTrendingMovies = async () => {
  const res = await api.get('/trending/movie/week');
  return res.data.results;
};

export const fetchGenres = async () => {
  const res = await api.get('/genre/movie/list');
  return res.data.genres;
};

export const fetchMoviesByGenre = async (genreId) => {
  const res = await api.get('/discover/movie', {
    params: {
      with_genres: genreId,
      sort_by: 'popularity.desc',
    },
  });
  return res.data.results;
};

export const fetchMovieById = async (id) => {
  const res = await api.get(`/movie/${id}`);
  return res.data;
};

export const searchMovies = async (query) => {
  const res = await api.get('/search/movie', {
    params: {
      query,
    },
  });
  return res.data.results;
};
