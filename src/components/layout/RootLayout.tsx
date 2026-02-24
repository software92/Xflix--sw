import { Outlet, ScrollRestoration } from 'react-router'
import Header from './Header'
import Footer from './Footer'

function RootLayout() {
  return (
    <main className='min-h-screen bg-black'>
      <Header />
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </main>
  )
}

export default RootLayout
