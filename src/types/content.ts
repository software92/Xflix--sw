import { IGenre, ISpokenLanguage } from './common'

export interface IMovie {
  adult: boolean
  backdrop_path: string
  genres: IGenre[]
  id: number
  imdb_id: string
  origin_country: string[]
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  release_date: string
  runtime: number
  status: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
  spoken_languages: ISpokenLanguage[]
  tagline: string
}

export interface ITv {}

// | ITv
export type IContent = IMovie
