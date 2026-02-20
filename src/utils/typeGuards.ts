import { IContent, IMovie } from '../types/content'

// export const isMovie = (content: IContent): content is IMovie => {
//   return (content as IMovie).title !== undefined
// }

export const isMovie = (item: IContent): item is IMovie => 'title' in item
