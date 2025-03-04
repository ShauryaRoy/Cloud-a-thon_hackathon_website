import { useState } from 'react'
import './App.css'
import Hero from './pages/Hero.jsx'
import Tracks from './pages/Tracks.jsx'
import Prizes from './pages/Prizes.jsx'
import Timeline from './pages/Timeline.jsx'
import AboutUs from './pages/AboutUs.jsx'
import Faqs from './pages/Faqs.jsx'
import Footer from './pages/Footer.jsx'

function App() {

  return (
    <>
      <Hero />
      <AboutUs />
      <Tracks />
      <Prizes />
      <Timeline />
      <Faqs />
      <Footer />
    </>
  )
}

export default App
