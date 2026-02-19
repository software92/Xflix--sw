export enum MediaType {
  MOVIE = 'movie',
  TV = 'tv',
}

export interface IGenre {
  id: number
  name: string
}
export interface ISpokenLanguage {
  english_name: string
  iso_639_1: string
  name: string
}

export interface ICastItem {
  adult: boolean
  gender: number
  id: number
  known_for_department: string
  name: string
  original_name: string
  popularity: number
  profile_path: string
  character: string
  credit_id: string
  order: number
}

export interface ICrewItem {
  adult: boolean
  gender: number
  id: number
  known_for_department: string
  name: string
  original_name: string
  popularity: number
  profile_path: string
  credit_id: string
  department: string
  job: string
}

export interface IContentCommon {
  adult: boolean
  backdrop_path: string
  genres: IGenre[]
  id: number
  overview: string
  poster_path: string
  tagline: string
}
