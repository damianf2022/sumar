import React from 'react'
import './stylesPages/quienes.css'
import hisTiempo from '../images/histTiempo.png'

const QuienesSomos = () => {
  return (
    <div className='contenedor-somos'>

      <div className='div'>
        <img src="https://sumarservicios.com.ar/wp-content/uploads/2020/01/header-quienes-somos-sumar.jpg" alt="" />
      </div>

      <img className='history' src={hisTiempo} alt="" />

      <h2><strong>Cultura empresarial</strong></h2>
      <div className='subcontainer'>
        <img src="https://sumarservicios.com.ar/wp-content/uploads/2020/01/Quienes-somos_filosofia-empresaria_mision.png" alt="" />
        <p> <strong>Nuestra Misión</strong> es ofrecer a nuestros clientes la mejor ecuación precio y calidad del mercado, siempre apuntando a la excelencia. Desde el asesoramiento preventa para brindar la mejor solución, pasando por la provisión de equipos y servicios, hasta la postventa. </p>
      </div>
      <div className='subcontainer'>
        <img src="https://sumarservicios.com.ar/wp-content/uploads/2020/01/Quienes-somos_filosofia-empresaria_vision.png" alt="" />
        <p><strong>Nuestra Visión</strong> es construir relaciones a largo plazo con nuestros clientes, a quienes consideramos pilares fundamentales para el desarrollo de la compañía. Con el fin ser una empresa referente en el segmento y lograr una mayor especialización.</p>
      </div>
      <div className='subcontainer'>
        <img src="https://sumarservicios.com.ar/wp-content/uploads/2020/01/Quienes-somos_filosofia-empresaria_valores.png" alt="" />
        <p><strong>Nuestros Valores son:</strong>
        
        <br /><br />
          <strong>Honestidad</strong>. Dando la mejor solución a nuestros clientes de acuerdo a su necesidad. <br /> <br />
          <strong>Compromiso</strong>. Cumpliendo con los compromisos asumidos con nuestros clientes. <br /> <br />

          <strong>Superación</strong>. Buscando siempre la mejora continua de nuestros equipos y servicios. Escuchando las críticas y sugerencias de nuestros clientes para ofrecer las mejores soluciones. <br /> <br />

          <strong>Responsabilidad</strong>. Todas nuestras funciones las realizamos de forma responsable, entendiendo desde la criticidad de nuestra provisión de equipos o servicios, hasta el cuidado de nuestras acciones para el entorno (usuarios, clientes, personal y medio ambiente). <br /> <br />

          <strong>Pasión</strong>. <br /> <br />

          <strong>Entusiasmo</strong>. <br /> <br />
        </p>


      </div>
        {/* <div className='foto'>
          <img src="https://scontent.fcor11-2.fna.fbcdn.net/v/t1.6435-9/43108213_964736720393568_6994842175590629376_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=IVtqXnZWI9kAX_QHtAH&_nc_ht=scontent.fcor11-2.fna&oh=00_AfCcuZnx_UwjGqm06VHFUKM-tkmv1lQ5reKytiSUkkBcaQ&oe=65776C94" alt="" />
        </div> */}


      {/* 

        <p>Nuestros valores son:
          Honestidad. Dando la mejor solución a nuestros clientes de acuerdo a su necesidad.

          Compromiso. Cumpliendo con los compromisos asumidos con nuestros clientes.

          Superación. Buscando siempre la mejora continua de nuestros equipos y servicios. Escuchando las críticas y sugerencias de nuestros clientes para ofrecer las mejores soluciones.

          Responsabilidad. Todas nuestras funciones las realizamos de forma responsable, entendiendo desde la criticidad de nuestra provisión de equipos o servicios, hasta el cuidado de nuestras acciones para el entorno (usuarios, clientes, personal y medio ambiente).

          Pasión

          Entusiasmo</p> 
          
          */}





    </div >
  )
}

export default QuienesSomos