import { ICastItem, IContentCommon, ICrewItem, IGenre } from './common'

interface IMovieCastItem extends ICastItem {
  cast_id: number
}
// jop = 'Director' 감독
// interface CrewItem {
//   job: string
// }

interface Credits {
  cast: IMovieCastItem[]
  crew: ICrewItem[]
}

export interface IMovie extends IContentCommon {
  imdb_id: string
  release_date: string
  runtime: number
  title: string
  credits: Credits
}
