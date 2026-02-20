import { useEffect, useState } from 'react'
import { getTmdbContnets } from '../../api/tmDBService'
import { IApiReturn, ITmdbContents } from '../../types/api'
import { ApiPath } from '../../api/config'

interface IFetchingDataReturn {
  error: string | null
  isLoading: boolean
  contents: ITmdbContents | null
}

function useGetContents(endPoint: ApiPath): IFetchingDataReturn {
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [contents, setContents] = useState<ITmdbContents | null>(null)

  useEffect(() => {
    if (!endPoint) return

    async function fetchTrending() {
      const result = await getTmdbContnets(endPoint)

      setContents(result.data)
      setIsLoading(false)
      setError(result.error)
    }

    fetchTrending()
  }, [endPoint])

  return {
    error,
    isLoading,
    contents,
  }
}

export default useGetContents
