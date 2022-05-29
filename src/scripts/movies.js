import { apiKey } from './tmdb.config.js';
import { moviesHtml, useAPI } from './services.js';

const baseURL = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;

async function renderMovies() {
  const moviesList = await useAPI(baseURL);
  moviesHtml(moviesList);
}

window.onload = renderMovies;
