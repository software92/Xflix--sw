import { apiValidCheck } from '../api/tmDBAuth'

export const authLoader = async () => {
  const response = await apiValidCheck()

  if (response.error) {
    throw new Error(response.error)
  }

  return null
}
