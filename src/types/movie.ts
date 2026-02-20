import { ICastItem, IContentCommon, ICrewItem } from './common'

interface IMovieCastItem extends ICastItem {
  cast_id: number
}

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
