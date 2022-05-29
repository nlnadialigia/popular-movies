import {apiKey} from "./tmdb.config.js"
import {useAPI} from "./useAPI.js";

const input = document.querySelector('#search')


input.addEventListener('keyup', async function (event) {
  const text = input.value;
  const searchURL = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${text}&include_adult=false`
  console.log(text);
  if (event.key === "Enter") {
    const moviesList = await useAPI(searchURL);
    
    console.log(moviesList);
  }
})




