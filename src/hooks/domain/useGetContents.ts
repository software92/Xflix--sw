import { useEffect, useState } from 'react'
import { getTmdbContnets } from '../../api/tmDBService'
import { ApiPath } from '../../api/config'
import { IMovie } from '../../types/content'

interface IFetchingDataReturn {
  error: string | null
  isLoading: boolean
  contents: IMovie[] | null
}

function useGetContents(
  endPoint: ApiPath,
  queryParams?: { [key: string]: string },
): IFetchingDataReturn {
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [contents, setContents] = useState<IMovie[] | null>(null)

  useEffect(() => {
    if (!endPoint) return

    async function fetchTrending() {
      const result = await getTmdbContnets(endPoint, queryParams)

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
