interface IGetTmdbImgPath {
  path: string
  size?: string
}

export const removeRootPath = (path: string) => path.replace('/', '')

export const getTmdbImgPath = ({ path, size = 'original' }: IGetTmdbImgPath) =>
  `https://image.tmdb.org/t/p/${size}${path}`
