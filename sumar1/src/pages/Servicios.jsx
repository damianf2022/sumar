import React, { useState } from 'react';
import ServiciosPortada from '../images/videos/ServiciosPortada.mp4'
import './stylesPages/serviciosp.css'
// import Galery from '../components/Galery';

const images = [
    'url_imagen_1.jpg',
    'url_imagen_2.jpg',
    // ... añade las URLs de tus imágenes
];

const Servicios = () => {
    const [playing, setPlaying] = useState(true);

    return (
        <div className='servicontenedor'>
            <div className='imggene'>
                <img src="https://sumarservicios.com.ar/wp-content/uploads/2020/01/header-servicios.jpg" alt="header" />
            </div>

            <video
                muted
                src={ServiciosPortada}
                controls={playing}
                autoplay={playing}
            />

            <h2>Servicio técnico y servicio de mantenimiento preventivo.</h2>

            <p>Consideramos a nuestros clientes socios estratégicos para el desarrollo de nuestra compañía, por esto es que entendemos la importancia de brindar el mejor soporte postventa para maximizar el rendimiento de sus equipos. Ofrecemos un servicio dinámico adaptado a cada cliente, escuchando sus necesidades y armando soluciones a medida. Servicio técnico y servicio de mantenimiento preventivo.
                <br /><br />
                Para los equipos trabajen a todo su potencial y sin fallas es que ofrecemos distintas modalidades de servicios, focalizando sobre todas las cosas en la gran importancia del mantenimiento preventivo.
            </p>
            <br />
            <h3>Modalidades del servicio:</h3>
            <br />

            <div className='servicecard'>

                <div className='subservicios'>
                    <img src="https://sumarservicios.com.ar/wp-content/uploads/2020/01/Servicios_modalidades-de-servicio_servicio-correctivo.png" alt="correctivo" />
                    <p>SERVICIO CORRECTIVO</p>
                </div>
                <div className='subservicios'>
                    <img src="https://sumarservicios.com.ar/wp-content/uploads/2020/01/Servicios_modalidades-de-servicio_servicio-de-mantenimiento-preventivo.png" alt="mantenimiento" />
                    <p>SERVICIO DE MANTENIMIENTO PREVENTIVO</p>
                </div>
                <div className='subservicios'>
                    <img src="https://sumarservicios.com.ar/wp-content/uploads/2020/01/Servicios_modalidades-de-servicio_venta-de-repuestos.png" alt="ventas" />
                    <p>VENTA DE REPUESTOS</p>
                </div>
                <div className='subservicios'>
                    <img src="https://sumarservicios.com.ar/wp-content/uploads/2020/01/Servicios_modalidades-de-servicio_Capacitaciones-te%CC%81cnicas-en-operacio%CC%81n-y-mantenimiento-de-equipos.png" alt="capacitaciones" />
                    <p>OPERACIÓN Y MANTENIMIENTO DE EQUIPOS</p>
                </div>

            </div>
            <h4>Staff y herramientas</h4>

            <p>Contamos con personal técnico altamente calificado y especializado en cada una de nuestras distintas ramas de producto, vehículos, herramientas y un importante stock de repuestos para dar una repuesta rápida y eficiente ante una emergencia.
                <br /><br />
                Orientamos a nuestro staff a la vocación de servicio ya que consideramos que ponernos en el lugar del cliente permite lograr los mejores esfuerzos de cada uno.
                <br /><br />
                {/* *********** */}

                <strong>Repuestos</strong>: contamos con repuestos originales de cada uno de nuestros productos, de manera tal, que podamos agilizar los tiempos de respuesta.
                <br /><br />
                <strong>Tableros especiales</strong>: Contamos con una división especializada en desarrollo de tableros para distintas aplicaciones adaptándonos a sus proyectos.
                <br /><br />
                <strong>DSE Electronics</strong>: Somos representantes para Argentina de la firma de DSE Electronics, empresa líder mundial en fabricación de controladores para grupos electrógenos y motores, lógicas de transferencias y cargadores de baterías. Contamos con más 1000(mil) productos en stock y con ingenieros capacitados para asesorarlos en la implementación de distintas soluciones.
                <br /><br />
                <strong>Servicio sobre equipos de terceros</strong>: Ofrecemos también la posibilidad de dar servicio sobre equipos fabricados por otras compañías.</p>


        </div>
    )
}

export default Servicios