import { apiToken } from "./tmdb.config.js"

const useAPI = async (url) => {
  try {
    const response = await fetch(url, { 
      headers: new Headers ({
        Authorization: `Bearer ${apiToken}`
      }),
      mode: "cors"
    })
    let data = await response.json()
    data = data.results
    
    return data
  } catch (error) {
    return error;
  }
}

export { useAPI }
