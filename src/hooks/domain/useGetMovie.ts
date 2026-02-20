import { useEffect, useState } from 'react'
import { IMovie } from '../../types/movie'
import { getMovie } from '../../api/tmDBService'

interface IFetchingDataReturn {
  error: string | null
  isLoading: boolean
  movie: IMovie | null
}

function useGetMovie(id: number | string): IFetchingDataReturn {
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [movie, setMovie] = useState<IMovie | null>(null)

  useEffect(() => {
    if (!id) return setIsLoading(false)

    const params = { append_to_response: 'credits' }

    async function fetchMovie(id: string | number) {
      const result = await getMovie(id, params)

      setMovie(result.data)
      setIsLoading(false)
      setError(result.error)
    }
    fetchMovie(id)
  }, [id])

  return { error, isLoading, movie }
}

export default useGetMovie
