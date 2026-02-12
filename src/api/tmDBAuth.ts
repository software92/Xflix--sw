import { API_CONFIG, API_ENDPOINT } from '../constants/api'
import { devLog } from '../utils'

// 토큰 유효성 검사
interface IAuthResponse {
  status_code?: number
  status_message?: string
  success: boolean
}
interface IAPIValidResult {
  data: IAuthResponse | null
  error: string | null
}

export const apiValidCheck = async (): Promise<IAPIValidResult> => {
  try {
    const { BASE_URL, OPTIONS } = API_CONFIG
    const { AUTH: { VALID = {} } = {} } = API_ENDPOINT

    const response = await fetch(BASE_URL + VALID, OPTIONS)

    if (!response.ok) {
      // API 인증 실패
      throw new Error('API 인증 실패로 현재 서비스를 이용할 수 없습니다')
    }

    const data: IAuthResponse = await response.json()

    devLog({ message: 'API 인증 OK' })

    return {
      data,
      error: null,
    }
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown Error'

    devLog({ message: errorMessage, type: 'error' })

    return {
      data: null,
      error: errorMessage,
    }
  }
}
