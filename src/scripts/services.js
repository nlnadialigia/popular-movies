import { apiToken } from './tmdb.config.js';

const movies = document.querySelector('#movies');

const useAPI = async (url) => {
  try {
    const response = await fetch(url, {
      headers: new Headers({
        Authorization: `Bearer ${apiToken}`,
      }),
      mode: 'cors',
    });
    let data = await response.json();
    data = data.results;

    return data;
  } catch (error) {
    return error;
  }
};

function favorite(type) {
  if (type) {
    return './src/assets/full-heart.svg';
  }
  return './src/assets/heart.svg';
}

const moviesHtml = (data) => {
  data.forEach((movie) => {
    const imageURL = `https://image.tmdb.org/t/p/original${movie.poster_path}`;
    movies.innerHTML += `
      <div class="movie">
        <img class="logo" src=${imageURL}>
        <div id="title">
          <p class="title">${movie.title}</p>
          <div class="icons">
            <p><img src="./src/assets/full-star.svg">${movie.vote_average}</p>
            <p><img src=${favorite(movie.isFavorited)}>Favoritar</p>
          </div>
        </div>
        <p class="description">${movie.overview}</p>
     </div>
    `;
  });
};

export { useAPI, moviesHtml };
