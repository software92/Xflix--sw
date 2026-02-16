import { API_CONFIG, API_ENDPOINT } from '../constants/api'
import { devLog } from '../utils'

enum MediaType {
  MOVIE = 'movie',
  TV = 'tv',
}
interface IContent {
  backdrop_path: string
  id: number
  title: string
  overview: string
  poster_path: string
  media_type: MediaType
  genre_ids: number[]
  release_date: Date
}

interface ITrendingContents {
  page: number
  results: IContent[]
  total_pages: number
  total_results: number
}

interface ITrendingResults {
  data: ITrendingContents | null
  error: string | null
}

// 주간 인기 콘텐츠 조회 - FeaturedHero 컴포넌트 및 목록 페이지
export const getTrendingContents = async (): Promise<ITrendingResults> => {
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
