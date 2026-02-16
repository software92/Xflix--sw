import { API_CONFIG, API_ENDPOINT } from '../constants/api'
import { IApiReturn, ITrendingContents } from '../types/api'
import { IContent, IMovie } from '../types/content'
import { devLog } from '../utils'

// 주간 인기 콘텐츠 조회 - FeaturedHero 컴포넌트 및 목록 페이지
export const getTrendingContents = async (): Promise<
  IApiReturn<ITrendingContents>
> => {
  try {
    const { BASE_URL, LANGUAGE, OPTIONS } = API_CONFIG
    const { TRENDING } = API_ENDPOINT

    const response = await fetch(
      `${BASE_URL}${TRENDING}?language=${LANGUAGE}`,
      OPTIONS,
    )

    if (!response.ok) {
      throw new Error('API 응답을 받아올 수 없습니다.')
    }

    const data: ITrendingContents = await response.json()

    return { data, error: null }
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown Error'

    devLog({ message: errorMessage, type: 'error' })

    return { data: null, error: errorMessage }
  }
}

export const getMovie = async (
  id: number | string,
): Promise<IApiReturn<IMovie>> => {
  try {
    const { BASE_URL, LANGUAGE, OPTIONS } = API_CONFIG
    const {
      MOVIE: { DETAIL },
    } = API_ENDPOINT
    const response = await fetch(
      `${BASE_URL}${DETAIL(id)}?language=${LANGUAGE}`,
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

    devLog({ message: errorMessage, type: 'error' })

    return { data: null, error: errorMessage }
  }
}
