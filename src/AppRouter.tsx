import { RouterProvider } from 'react-router'
import { router } from './routes/router'

function AppRouter() {
  return <RouterProvider router={router} />
}

export default AppRouter
