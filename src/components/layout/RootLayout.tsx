import { Outlet, ScrollRestoration } from 'react-router'
import Header from './Header'
import Footer from './Footer'
import { Helmet } from 'react-helmet-async'

function RootLayout() {
  return (
    <main className='min-h-screen bg-black'>
      <Helmet
        titleTemplate='%s | XFlix'
        defaultTitle='...'
      />
      <Header />
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </main>
  )
}

export default RootLayout
