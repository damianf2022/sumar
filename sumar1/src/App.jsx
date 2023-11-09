import './App.css'
import Navbar from './components/Navbar'
import Navbar2 from './components/Navbar2'
import Galery from './components/Galery'
import Card from './components/Card'
import Quienes from './components/Quienes'
import Footer from './components/Footer'
import Servicios from './components/Servicios'
import Objetivos from './components/Objetivos'

function App() {

  return (
    <div>
      <Navbar />
      <Navbar2 />
      <Galery />
      <Card />
      <Quienes/>
      <Servicios/>
      <Objetivos/>
      <Footer />

    </div>
  )
}

export default App
