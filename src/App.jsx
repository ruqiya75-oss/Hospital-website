import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Services from './components/Services'
import Doctors from './components/Doctors'
import Emergency from './components/Emergency'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Appointment from './components/Appointment'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Doctors />
      <Emergency />
      <Gallery />
      <Testimonials />
      <Appointment />
      <Footer />
    </div>
  )
}

export default App