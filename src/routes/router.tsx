import { createBrowserRouter } from 'react-router'
import MoviesList from '../pages/MoviesList'
import Home from '../pages/Home'
import ErrorPage from '../pages/ErrorPage'
import { LoadingScreen } from '../components/LoadingScreen'
import RootLayout from '../components/layout/RootLayout'
import { rootLoader } from './rootLoader'
import { routes } from '../constants/routes'
import { removeRootPath } from '../utils'
import MovieDetail from '../pages/MovieDetail'

const routerRoutes = [
  {
    path: routes.ROOT,
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    id: 'root',
    HydrateFallback: () => <LoadingScreen />,
    children: [
      { index: true, element: <Home /> },
      {
        path: removeRootPath(routes.MOVIE.LIST),
        children: [
          { index: true, element: <MoviesList /> },
          {
            path: removeRootPath(routes.MOVIE.PARAMETER),
            element: <MovieDetail />,
          },
        ],
      },
    ],
  },
]
export const router = createBrowserRouter(routerRoutes, {
  basename: '/XFlix--sw',
})
