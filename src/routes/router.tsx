import { createBrowserRouter } from 'react-router'
import Movies from '../pages/Movies'
import TVs from '../pages/TVs'
import Home from '../pages/Home'
import ErrorPage from '../pages/ErrorPage'
import Detail from '../pages/Detail'
import { LoadingScreen } from '../components/LoadingScreen'
import RootLayout from '../components/layout/RootLayout'
import { authLoader } from './authLoader'
import { routes } from '../constants/routes'

// TODO: 같은 구조를 공유하는 movies/, tvs/ 라우터를 하나의 라우터로 합치는 방법 고민(+확장성)
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
        path: routes.MOVIE.LIST,
        children: [
          { index: true, element: <Movies /> },
          { path: routes.MOVIE.PARAMETER, element: <Detail /> },
        ],
      },
      {
        path: routes.TV.LIST,
        children: [
          { index: true, element: <TVs /> },
          { path: routes.TV.PARAMETER, element: <Detail /> },
        ],
      },
    ],
  },
])
