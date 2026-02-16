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
  AUTH: {
    VALID: '/authentication',
  },
  TRENDING: '/trending/all/week',
  MOVIE: {
    DETAIL: (id: string | number) => `/movie/${id}`,
  },
} as const
