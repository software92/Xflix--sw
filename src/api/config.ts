type POSSIBLE_LANG = 'ko'

export const LANGUAGE: POSSIBLE_LANG = 'ko'
export const BASE_URL: string = 'https://api.themoviedb.org/3'
export const options: RequestInit = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`,
  },
}
