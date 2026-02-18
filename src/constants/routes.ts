export const routes = {
  ROOT: '/',
  MOVIE: {
    PARAMETER: '/:id',
    LIST: '/movies',
    DETAIL: (id: string | number) => `/movies/${id}` as const,
  },
  TV: {
    PARAMETER: '/:id',
    LIST: '/tvs',
    DETAIL: (id: string | number) => `/tvs/${id}` as const,
  } as const,
}
