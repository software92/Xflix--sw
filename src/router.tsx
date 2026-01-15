import { createBrowserRouter } from 'react-router'
import App from './App'
import Movies from './pages/Movies'
import TVs from './pages/TVs'
// import Search from './components/Search'
// import Detail from './pages/Detail'
import Home from './pages/Home'
import ErrorBoundary from './components/ErrorBoundary'
import Detail from './pages/Detail'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorBoundary />,
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
