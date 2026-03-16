import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer' // Added footer
import Home from './pages/Home'
import Moments from './pages/Moments'
import Ambassadors from './pages/Ambassadors'
import Contact from './pages/Contact'
import TeamPage from './pages/TeamPage'
import InternshipModal from './components/InternshipModal'
import './App.css'

function App() {
  const [showModal, setShowModal] = useState(false)

  const handleOpenModal = () => setShowModal(true)
  const handleCloseModal = () => setShowModal(false)

  return (
    <Router>
      <div className="font-sans antialiased min-h-screen flex flex-col">
        {/* Navigation stays at the top across all pages */}
        <Navbar onInternship={handleOpenModal} />
        
        {/* Main Content Area */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home onInternship={handleOpenModal} />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/moments" element={<Moments />} />
            <Route path="/ambassadors" element={<Ambassadors onInternship={handleOpenModal} />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer stays at the bottom across all pages */}
        <Footer />

        {/* Modal handles the internship form */}
        <InternshipModal open={showModal} onClose={handleCloseModal} />
      </div>
    </Router>
  )
}

export default App