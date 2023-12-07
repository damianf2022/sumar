import React from 'react'
import './stylesPages/brazoElectrico.css'
import brazoelectrico from '../images/brazoElectrico.png'
import brazoelectricoF from '../images/brazoElectricoF.png'
import cuadrobrazoelectrico from '../images/cuadroBrazoelectrico.png'


const BrazoElecrico = () => {
  return (
    <div className='brazoElect'>
      <img className='imggene' src={brazoelectricoF} alt="flayer" />
      <div className='contenedorImg'>
        <img className='img' src={brazoelectrico} alt="brazoelectrico" />
         <ul>
          <strong>Alturas de trabajo disponibles :</strong>
        </ul>
        <li>12 mts</li>
        <li>15 mts</li>
        <li>16 mts</li>
        <img className='img2' src={cuadrobrazoelectrico} alt="cuadrobrazoelectrico" /> 
      </div>
    </div>
  )
}

export default BrazoElecrico