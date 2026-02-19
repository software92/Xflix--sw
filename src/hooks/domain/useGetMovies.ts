import { useEffect, useState } from 'react'
import { getTmdbContnets } from '../../api/tmDBService'
import { IApiReturn, ITmdbContents } from '../../types/api'
import { ApiPath } from '../../api/config'

function useGetMovies(endPoint: ApiPath) {
  const [error, setError] = useState<IApiReturn<ITmdbContents>['error']>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [contents, setContents] =
    useState<IApiReturn<ITmdbContents>['data']>(null)

  useEffect(() => {
    async function fetchTrending() {
      const result = await getTmdbContnets(endPoint)

      setContents(result.data)
      setIsLoading(false)
      setError(result.error)
    }

    fetchTrending()
  }, [])

  return {
    error,
    isLoading,
    contents,
  }
}

export default useGetMovies
