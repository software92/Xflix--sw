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
  TRENDING: '/trending/all/week',
  AIRING_TODAY: '/tv/airing_today',
  NOW_PLAYING: '/movie/now_playing',
  TV_POPULAR: '/movie/popular',
  MOVIE_POPULAR: '/tv/popular',
  MOVIE_DETAIL: (id: string | number): string => `/movie/${id}`,
} as const

export type ApiPath = {
  [K in keyof typeof API_ENDPOINT]: (typeof API_ENDPOINT)[K] extends (
    arg: string | number,
  ) => infer R
    ? R // 함수라면 리턴 타입(string)을 가져옴
    : (typeof API_ENDPOINT)[K] // 문자열이라면 리턴 리터럴 값을 가져옴
}[keyof typeof API_ENDPOINT]
