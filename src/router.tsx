import { createBrowserRouter } from 'react-router'
import App from './App'
import Movies from './pages/Movies'
import TVs from './pages/TVs'
// import Search from './components/Search'
import Home from './pages/Home'
import ErrorPage from './pages/ErrorPage'
import Detail from './pages/Detail'
import LoadingScreen from './components/layout/LoadingScreen'
import { apiValidCheck } from './api/tmDBService'

// TODO: 같은 구조를 공유하는 movies/, tvs/ 라우터를 하나의 라우터로 합치는 방법 고민(+확장성)
export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    loader: async () => {
      const response = await apiValidCheck()

      if (response.error) {
        throw new Error(response.error)
      }

      return
    },
    HydrateFallback: () => <LoadingScreen />,
    children: [
      { index: true, element: <Home /> },
      {
        path: 'movies',
        children: [
          { index: true, element: <Movies /> },
          { path: ':id', element: <Detail /> },
        ],
      },
      {
        path: 'tvs',
        children: [
          { index: true, element: <TVs /> },
          { path: ':id', element: <Detail /> },
        ],
      },
      // { path: 'search', element: <Search /> },
      // { path: ':id', element: <Detail /> },
    ],
  },
])
