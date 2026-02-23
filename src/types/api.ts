import { IMovie } from './content'

export interface ITmdbContents {
  page: number
  results: IMovie[]
  total_pages: number
  total_results: number
}

export interface IApiReturn<T> {
  data: T | null
  error: string | null
}
