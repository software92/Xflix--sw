import { Outlet } from 'react-router'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

function App() {
  return (
    <main className='min-h-screen bg-black'>
      <Header />
      <Outlet />
      <Footer />
    </main>
  )
}

export default App
