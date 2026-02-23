type POSSIBLE_LANG = 'ko'

interface IApiConfig {
  readonly BASE_URL: string
  readonly LANGUAGE: POSSIBLE_LANG
  readonly OPTIONS: RequestInit
}

export const API_CONFIG: IApiConfig = {
  BASE_URL:
    import.meta.env.VITE_TMDB_BASE_URL || 'https://api.themoviedb.org/3',
  LANGUAGE: 'ko',
  OPTIONS: {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`,
    },
  },
} as const

export const API_ENDPOINT = {
  AUTH_VALID: '/authentication',
  TRENDING: '/trending/movie/week',
  NOW_PLAYING: '/movie/now_playing',
  MOVIE_POPULAR: '/movie/popular',
  MOVIE_DETAIL: (id: string | number) => `/movie/${id}`,
  MOVIE_SIMILAR: (id: string | number) => `/movie/${id}/similar`,
  MOVIE_RECOMEND: (id: string | number) => `/movie/${id}/recommendations`,
} as const

export type ApiPath = {
  [K in keyof typeof API_ENDPOINT]: (typeof API_ENDPOINT)[K] extends (
    arg: string | number,
  ) => infer R
    ? R // 함수라면 리턴 타입(string)을 가져옴
    : (typeof API_ENDPOINT)[K] // 문자열이라면 리턴 리터럴 값을 가져옴
}[keyof typeof API_ENDPOINT]
