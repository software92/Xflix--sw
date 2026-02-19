import { ICastItem, IContentCommon, ICrewItem, ISpokenLanguage } from './common'

interface CreatedByItem {
  id: number
  credit_id: string
  name: string
  original_name: string
  gender: number
  profile_path: null
}

interface LastEpisodeToAir {
  id: number
  name: string
  overview: string
  vote_average: number
  vote_count: number
  air_date: string
  episode_number: number
  episode_type: string
  production_code: string
  runtime: null
  season_number: number
  show_id: number
  still_path: null
}

interface NextEpisodeToAir {
  id: number
  name: string
  overview: string
  vote_average: number
  vote_count: number
  air_date: string
  episode_number: number
  episode_type: string
  production_code: string
  runtime: null
  season_number: number
  show_id: number
  still_path: null
}

interface NetworksItem {
  id: number
  logo_path: string
  name: string
  origin_country: string
}

interface ProductionCountriesItem {
  iso_3166_1: string
  name: string
}

interface SeasonsItem {
  air_date: string
  episode_count: number
  id: number
  name: string
  overview: string
  poster_path: string
  season_number: number
  vote_average: number
}

// jop = 'Director' 감독
// interface CrewItem {
//   job: string
// }

interface Credits {
  cast: ICastItem[]
  crew: ICrewItem[]
}

export interface ITV extends IContentCommon {
  created_by: CreatedByItem[]
  episode_run_time: number[]
  first_air_date: string
  homepage: string
  languages: string[]
  last_air_date: string
  last_episode_to_air: LastEpisodeToAir
  name: string
  next_episode_to_air: NextEpisodeToAir
  number_of_episodes: number
  number_of_seasons: number
  seasons: SeasonsItem[]
  spoken_languages: ISpokenLanguage[]
  type: string
  credits: Credits
}
