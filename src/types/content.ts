import { IMovie } from './movie'
import { ITV } from './tv'
export * from './movie'
export * from './tv'

// IMovie | ITv
export type IContent = IMovie | ITV
