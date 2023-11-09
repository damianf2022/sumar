import React from 'react'
import Galery from '../components/Galery';
import Card from '../components/Card';
import Quienes from '../components/Quienes';
import Servicios from '../components/Servicios';
import Objetivos from '../components/Objetivos';

const Home = () => {
  return (
    <div>
          <Galery />
          <Card />
          <Quienes />
          <Servicios />
          <Objetivos />
    </div>
  )
}

export default Home