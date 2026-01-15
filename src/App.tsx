import { Outlet } from 'react-router'
import Header from './components/layout/Header'

function App() {
  return (
    <main className='min-h-screen bg-black'>
      <Header />
      <Outlet />
    </main>
  )
}

export default App
