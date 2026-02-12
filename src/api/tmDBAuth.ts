import { devLog } from '../utils'
import { BASE_URL, options } from './config'

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
    const response = await fetch(BASE_URL, options)

    if (!response.ok) {
      // API 인증 실패
      throw new Error('API 인증 실패로 현재 서비스를 이용할 수 없습니다')
    }

    const data: IAuthResponse = await response.json()

    if (process.env.NODE_ENV === 'development') {
      console.log('API 인증 OK')
    }

    return {
      data,
      error: null,
    }
  } catch (error: unknown) {
    if (process.env.NODE_ENV === 'development') {
      console.error(error)
    }
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown Error'

    return {
      data: null,
      error: errorMessage,
    }
  }
}
