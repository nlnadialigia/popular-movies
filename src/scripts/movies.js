import {apiKey} from './tmdb.config.js'
import {useAPI} from './useAPI.js'

const movies = document.querySelector("#movies")

const baseURL = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`

async function renderMovies() {
  const moviesList = await useAPI(baseURL)
  moviesList.forEach(movie => {
    const imageURL = `https://image.tmdb.org/t/p/original${movie.poster_path}`
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
    `
  })
}

function favorite(type) {
  if (type) {
    return `./src/assets/full-heart.svg`
  } else {
    return `./src/assets/heart.svg`
  }
}

window.onload = renderMovies

