import { Routes, Route } from 'react-router'
import './index.css'

import Home from './components/lyouts/home'
import Header from './components/lyouts/Navbar'
import Footer from './components/lyouts/Footer'

// Import other pages
// import Destinations from './components/pages/Destinations'
// import Culture from './components/pages/Culture'

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/destinations' element={<Destinations />} /> */}
        {/* <Route path='/culture' element={<Culture />} /> */}
      </Routes>

      <Footer />
    </>
  )
}

export default App