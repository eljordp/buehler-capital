import { Outlet, useLocation } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  const location = useLocation()
  const isPortal = location.pathname.startsWith('/portal')

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      {!isPortal && <Nav />}
      <main className="flex-1">
        <Outlet />
      </main>
      {!isPortal && <Footer />}
    </div>
  )
}
