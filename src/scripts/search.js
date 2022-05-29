import { apiKey } from './tmdb.config.js';
import { moviesHtml, useAPI } from './services.js';

const input = document.querySelector('#search');
const movies = document.querySelector('#movies');
const searchIcon = document.querySelector('.searchIcon');

const searchByName = async () => {
  const searchURL = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${input.value}&include_adult=false`;
  const moviesList = await useAPI(searchURL);
  movies.innerHTML = '';

  moviesHtml(moviesList);
};

input.addEventListener('keyup', async (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    await searchByName();
  }
});

searchIcon.addEventListener('click', async () => searchByName());
