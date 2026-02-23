interface IGetTmdbImgPath {
  path?: string
  size?: string
}

export const removeRootPath = (path: string) => path.replace('/', '')

export const getTmdbImgPath = ({
  path = undefined,
  size = 'original',
}: IGetTmdbImgPath) => path && `https://image.tmdb.org/t/p/${size}${path}`
