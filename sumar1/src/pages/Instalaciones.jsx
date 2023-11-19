import React from 'react'
import './stylesPages/instalacionesp.css'
const Instalaciones = () => {
    return (
        <div className='contenedorinsta'>
            <div className='imggene'>
                <img src="https://sumarservicios.com.ar/wp-content/uploads/2020/01/header-instalaciones.jpg" alt="header" />
            </div>

            <div className='subcontenedorinsta'>
                <h1><strong>Servicio de Instalaciones</strong></h1>
                <br />
                <p>Contamos con servicio de instalaciones especializado para dar una solución integral a las necesidades de nuestros clientes. Trabajamos con componentes de primer nivel y dando cumplimiento a todas las normas de instalación tanto eléctricas, como municipales.</p>
                <br />

                <div className='fotoinstala'>
                <img src="https://sumarservicios.com.ar/wp-content/uploads/2020/01/Instalaciones_imagen-1.png" alt="instalaciones" />
                <img src="https://sumarservicios.com.ar/wp-content/uploads/2020/01/Instalaciones_imagen-2.png" alt="instalaciones" />
                </div>

            </div>

        </div>
    )
}

export default Instalaciones