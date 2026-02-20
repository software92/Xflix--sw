import { API_CONFIG, API_ENDPOINT } from './config'
import { IApiReturn, ITmdbContents } from '../types/api'
import { devLog } from '../utils'
import { IMovie } from '../types/content'

// interface IFetch {
//   path: string;
//   query?: Record<string, string | number | boolean | undefined>,
// }
// const commonFetch = async ({path, query}) => {

// }

// get TV or Movie contents list
export const getTmdbContnets = async (
  endPoint: string,
): Promise<IApiReturn<ITmdbContents>> => {
  try {
    const { BASE_URL, LANGUAGE, OPTIONS } = API_CONFIG

    const params = new URLSearchParams()
    params.set('language', LANGUAGE)
    params.set('page', '1')

    const response = await fetch(
      `${BASE_URL}${endPoint}?${params.toString()}`,
      OPTIONS,
    )

    if (!response.ok) {
      throw new Error('컨텐츠 정보를 가져올 수 없습니다.')
    }

    const data: ITmdbContents = await response.json()

    return { data, error: null }
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown Error'

    devLog({ message: 'getTmdbContnets: ' + errorMessage, type: 'error' })

    return { data: null, error: errorMessage }
  }
}

// get Movie details
export const getMovie = async (
  id: number | string,
  query?: Record<string, string | number | boolean>,
): Promise<IApiReturn<IMovie>> => {
  try {
    const { BASE_URL, LANGUAGE, OPTIONS } = API_CONFIG
    const { MOVIE_DETAIL } = API_ENDPOINT

    const params = new URLSearchParams()
    params.set('language', LANGUAGE)

    if (query) {
      for (const [key, value] of Object.entries(query)) {
        params.set(key, value.toString())
      }
    }

    const response = await fetch(
      `${BASE_URL}${MOVIE_DETAIL(id)}?${params.toString()}`,
      OPTIONS,
    )

    if (!response.ok) {
      throw new Error('현재 영화를 찾을 수 없습니다.')
    }

    const movie: IMovie = await response.json()

    return { data: movie, error: null }
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown Error'

    devLog({ message: 'getMovie: ' + errorMessage, type: 'error' })

    return { data: null, error: errorMessage }
  }
}

// export const getSimilarMovies = async (
//   id: number | string,
// ): Promise<IApiReturn<ITmdbContents>> => {
//   try {
//     const { BASE_URL, LANGUAGE, OPTIONS } = API_CONFIG
//     const { MOVIE_SIMILAR } = API_ENDPOINT

//     const params = new URLSearchParams()
//     params.set('language', LANGUAGE)
//     params.set('page', '1')

//     const response = await fetch(
//       `${BASE_URL}${MOVIE_SIMILAR(id)}?${params.toString()}`,
//       OPTIONS,
//     )

//     if (!response.ok) {
//       throw new Error('현재 유사한 영화 목록을 찾을 수 없습니다.')
//     }

//     const movies: ITmdbContents = await response.json()

//     return { data: movies, error: null }
//   } catch (error: unknown) {
//     const errorMessage =
//       error instanceof Error ? error.message : 'Unknown Error'

//     devLog({ message: 'getSimilarMovies: ' + errorMessage, type: 'error' })

//     return { data: null, error: errorMessage }
//   }
// }
