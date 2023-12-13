import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar'
import Navbar2 from './components/Navbar2'
import Footer from './components/Footer'
import Home from './pages/Home'
import ElectrogenoDiesel from './pages/ElectrogenoDiesel'
import ElectrogenoGas from './pages/ElectrogenoGas'
import TorresLed from './pages/TorresLed'
import BrazoArtDiesel from './pages/BrazoArtDiesel'
import BrazoTelescopico from './pages/BrazoTelescopico'
import TijeraDiesel from './pages/TijeraDiesel'
import TijeraElectrica from './pages/TijeraElectrica'
import Tableros from './pages/Tableros'
import QuienesSomos from './pages/QuienesSomos'
import Instalaciones from './pages/Instalaciones'
import Servicios from './pages/Servicios'
import Contacto from './pages/Contacto'
import BrazoElectrico from './pages/BrazoElecrico'
import Whatsapp from './components/Whatsapp'
import Chatbot from './components/ChatBot';

function App() {

  return (
    <Router>

      <Navbar />
      <Navbar2 />
      <Routes>
        {/* <Route path="/home" element={<Home />} /> */}
        <Route path="/sumar/" element={<Home />} />
        <Route path="/sumar/electrogenodiesel" element={<ElectrogenoDiesel />} />
        <Route path="/sumar/electrogenogas" element={<ElectrogenoGas />} />
        <Route path="/sumar/tijeraelectrica" element={<TijeraElectrica />} />
        <Route path="/sumar/torresled" element={<TorresLed />} />
        <Route path="/sumar/BrazoArtDiesel" element={<BrazoArtDiesel />} />
        <Route path="/sumar/BrazoElectrico" element={<BrazoElectrico />} />
        <Route path="/sumar/BrazoTelescopico" element={<BrazoTelescopico />} />
        <Route path="/sumar/TijeraDiesel" element={<TijeraDiesel />} />
        <Route path="/sumar/TijeraElectrica" element={<TijeraElectrica />} />
        <Route path="/sumar/Tableros" element={<Tableros />} />
        <Route path="/sumar/QuienesSomos" element={<QuienesSomos />} />
        <Route path="/sumar/Instalaciones" element={<Instalaciones />} />
        <Route path="/sumar/Servicios" element={<Servicios />} />
        <Route path="/sumar/Contacto" element={<Contacto />} />
        <Route path="/sumar/chatbot" element={<Chatbot />} />



      </Routes>
      <Whatsapp/>
      <Footer />

    </Router>

  )
}

export default App
