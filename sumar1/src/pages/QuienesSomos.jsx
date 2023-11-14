import React from 'react'
import './stylesPages/quienes.css'
import hisTiempo from '../images/histTiempo.png'

const QuienesSomos = () => {
  return (
    <div className='contenedor-somos'>

      <div className='div'>
        <img src="https://sumarservicios.com.ar/wp-content/uploads/2020/01/header-quienes-somos-sumar.jpg" alt="" />
      </div>

      {/* <strong className='stitulo'>Nuestra </strong>  */}
      <img className='history' src={hisTiempo} alt="" />
      {/* <p>En el año <strong>2011 Sumar</strong> se inicia como una empresa comercializadora de grupos electrógenos y plataformas para trabajo en altura, en condición venta y alquiler, con oficinas en Barracas y depósito en Sarandí.<br /><br />

        Luego de dos años en el <strong>2013</strong>, apostando a la producción nacional, se inaugura la planta industrial en Temperley convirtiéndonos en fabricantes de grupos electrógenos de hasta 700 kVA y torres de iluminación, haciendo acuerdos comerciales con fabricantes de motores como MWM, Perkins, Agrale, Volvo y Cummins, y de alternadores como Cramaco, Linz y Marelli.<br /><br />

        Dos años después en el <strong>2015</strong> se inaugura la sucursal de Córdoba.<br /><br />

        Al año siguiente en el <strong>2016</strong>, conseguimos la representación de <strong>Skyjack</strong>, compañía canadiense líder en la fabricación de plataformas para trabajo en altura, para distribución de sus equipos en Argentina.<br /><br />

        Finalmente en el <strong>2018</strong> se realiza un acuerdo comercial con WEG, para armar nuestros grupos electrógenos con sus alternadores, dando un importante salto de calidad. Y también ese mismo año se consiguió la representación de <strong>ELGI</strong>, compañía India fabricante de compresores de aire de muy alta calidad, para la distribución de sus equipos en Argentina.<br /><br />
      </p> */}
      <br /><br /><br /><br />

      <strong className='stitulo'>Cultura empresarial</strong>




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
        <p><strong>Nuestros Valores son:</strong><br /><br />
          <strong>Honestidad</strong>. Dando la mejor solución a nuestros clientes de acuerdo a su necesidad. <br /> <br />


          <strong>Compromiso</strong>. Cumpliendo con los compromisos asumidos con nuestros clientes. <br /> <br />

          <strong>Superación</strong>. Buscando siempre la mejora continua de nuestros equipos y servicios. Escuchando las críticas y sugerencias de nuestros clientes para ofrecer las mejores soluciones. <br /> <br />

          <strong>Responsabilidad</strong>. Todas nuestras funciones las realizamos de forma responsable, entendiendo desde la criticidad de nuestra provisión de equipos o servicios, hasta el cuidado de nuestras acciones para el entorno (usuarios, clientes, personal y medio ambiente). <br /> <br />

          <strong>Pasión</strong>. <br /> <br />

          <strong>Entusiasmo</strong>. <br /> <br />
        </p>

        {/* <img src="https://scontent.fcor11-2.fna.fbcdn.net/v/t1.6435-9/43108213_964736720393568_6994842175590629376_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=IVtqXnZWI9kAX_QHtAH&_nc_ht=scontent.fcor11-2.fna&oh=00_AfCcuZnx_UwjGqm06VHFUKM-tkmv1lQ5reKytiSUkkBcaQ&oe=65776C94" alt="" /> */}

      </div>


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