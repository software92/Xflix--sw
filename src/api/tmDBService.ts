import { API_CONFIG, API_ENDPOINT } from './config'
import { IApiReturn, ITmdbContents } from '../types/api'
import { IContent, IMovie } from '../types/content'
import { devLog } from '../utils'

// get TV or Movie contents
export const getTmdbContnets = async (
  endPoint: string,
): Promise<IApiReturn<ITmdbContents>> => {
  try {
    const { BASE_URL, LANGUAGE, OPTIONS } = API_CONFIG

    const response = await fetch(
      `${BASE_URL}${endPoint}?language=${LANGUAGE}`,
      OPTIONS,
    )

    if (!response.ok) {
      throw new Error('API 응답을 받아올 수 없습니다.')
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
): Promise<IApiReturn<IMovie>> => {
  try {
    const { BASE_URL, LANGUAGE, OPTIONS } = API_CONFIG
    const { MOVIE_DETAIL } = API_ENDPOINT
    const response = await fetch(
      `${BASE_URL}${MOVIE_DETAIL(id)}?language=${LANGUAGE}`,
      OPTIONS,
    )

    if (!response.ok) {
      throw new Error('현재 영화를 찾을 수 없습니다.')
    }

    const movie: IContent = await response.json()

    return { data: movie, error: null }
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown Error'

    devLog({ message: 'getMovie: ' + errorMessage, type: 'error' })

    return { data: null, error: errorMessage }
  }
}
