
import { useState } from 'react'
import './App.css'
import Envelope from './components/Envelope'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import OurStory from './components/OurStory'
import Events from './components/Events'
import Venue from './components/Venue'
import Gallery from './components/Gallery'
import Footer from './components/Footer'

function App() {
  const [envelopeOpened, setEnvelopeOpened] = useState(false)

  return (
    <>
      {!envelopeOpened && <Envelope onOpen={() => setEnvelopeOpened(true)} />}
      <Navbar />
      <Hero />
      <Events />
      <OurStory />
      <Venue />
      <Gallery />
      <Footer />
    </>
  )
}

export default App
