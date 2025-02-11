import { createBrowserRouter } from 'react-router'
import App from './App'
import Movies from './pages/Movies'
import TVs from './pages/TVs'
import Search from './pages/Search'
// import Detail from './pages/Detail'
import Home from './pages/Home'
import ErrorBoundary from './components/ErrorBoundary'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorBoundary />,
    children: [
      { index: true, element: <Home /> },
      { path: 'movies', element: <Movies /> },
      { path: 'tvs', element: <TVs /> },
      { path: 'search', element: <Search /> },
      // { path: ':id', element: <Detail /> },
    ],
  },
])
