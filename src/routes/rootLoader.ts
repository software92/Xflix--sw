import { apiValidCheck } from '../api/tmDBAuth'
import { getGenres } from '../api/tmDBService'
import { IGenre } from '../types/common'

const checkAuth = async (): Promise<boolean> => {
  const response = await apiValidCheck()

  if (response.error) {
    throw new Error(response.error)
  }

  return true
}

const fetchGenres = async (): Promise<IGenre[]> => {
  const { data, error } = await getGenres()

  // 에러가 있거나 데이터가 없으면 빈 배열 반환 (UI 깨짐 방지)
  if (error || !data) {
    return []
  }

  return data
}

export const rootLoader = async () => {
  const isAuthOk = await checkAuth()

  if (!isAuthOk) {
    return { auth: isAuthOk, genres: [] }
  }

  const genres = await fetchGenres()

  return { genres }
}
