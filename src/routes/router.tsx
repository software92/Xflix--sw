import { createBrowserRouter } from 'react-router'
import Movies from '../pages/Movies'
import Home from '../pages/Home'
import ErrorPage from '../pages/ErrorPage'
import { LoadingScreen } from '../components/LoadingScreen'
import RootLayout from '../components/layout/RootLayout'
import { authLoader } from './authLoader'
import { routes } from '../constants/routes'
import { removeRootPath } from '../utils'
import MovieDetail from '../pages/MovieDetail'

export const router = createBrowserRouter([
  {
    path: routes.ROOT,
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    loader: authLoader,
    HydrateFallback: () => <LoadingScreen />,
    children: [
      { index: true, element: <Home /> },
      {
        path: removeRootPath(routes.MOVIE.LIST),
        children: [
          { index: true, element: <Movies /> },
          {
            path: removeRootPath(routes.MOVIE.PARAMETER),
            element: <MovieDetail />,
          },
        ],
      },
    ],
  },
])
