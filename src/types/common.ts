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
