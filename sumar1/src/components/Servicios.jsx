import React from 'react'
import "./styles/servicios.css"; // Importa los estilos CSS desde el archivo "Card.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshake, faRetweet, faUsers, faCogs, faWrench, faBolt } from '@fortawesome/free-solid-svg-icons';

const Servicios = () => {
    return (
        <div className='contenedor-servicios'>
            <h2>Servicios</h2>
            <img className='linea' src="https://sumarservicios.com.ar/wp-content/uploads/2020/01/divider.jpg" alt="linea" /> <br />
            <div className='prueba'>
                <div className='marco'>
                    <div className="logoservi">
                        <FontAwesomeIcon icon={faHandshake} />
                    </div>
                    <div className="servicio-info">
                        <h4>Ventas</h4>
                    </div>
                    <p>Ofrecemos atención preventa personalizada para brindar el mejor asesoramiento para sus proyectos.
                    </p>
                </div>
                <br /><br />
            </div>
            {/* <div className='prueba'>
                <div className="logoservi">
                    <FontAwesomeIcon icon={faRetweet} />
                </div>
                <div className="servicio-info">
                    <h5>Alquileres</h5>
                </div>
                <p>Contamos con una moderna flota de alquiler de 180 equipos. Sometemos a exahutivos chequeos y controles de seguridad, a fin de garantizar su máxima operatividad.
                </p>
                <br /><br />
            </div> <div className='prueba'>
                <div className="logoservi">
                    <FontAwesomeIcon icon={faUsers} />
                </div>
                <div className="servicio-info">
                    <h5>DSE Electronics</h5>
                </div>
                <p>Contamos con una moderna flota de alquiler de 180 equipos. Sometemos a exahutivos chequeos y controles de seguridad, a fin de garantizar su máxima operatividad.
                </p>
                <br /><br />
            </div> <div className='prueba'>
                <div className="logoservi">
                    <FontAwesomeIcon icon={faCogs} />
                </div>
                <div className="servicio-info">
                    <h5>Ventas</h5>
                </div>
                <p>Contamos con una moder su máxima operatividad.
                </p>
                <br /><br />
            </div> */}
            {/* <div>
                <div className="logoservi">
                    <FontAwesomeIcon icon={faRetweet} />
                </div>
                <h5>Alquileres</h5>
                <p>Contamos con una moderna flota de alquiler de 180 equipos. Sometemos a exahutivos chequeos y controles de seguridad, a fin de garantizar su máxima operatividad.</p>
            </div>
            <div>
                <div className="logoservi">
                    <FontAwesomeIcon icon={faUsers} />

                </div>
                <h5>DSE Electronics</h5>
                <p>Representamos en Argentina de la firma de DSE Electronics, empresa líder mundial en fabricación de controladores para grupos electrógenos y motores, lógicas de transferencias y cargadores de baterías.</p>
            </div>
            <div>
                <div className="logoservi">
                    <FontAwesomeIcon icon={faCogs} />

                </div>
                <h5>Servicio técnico</h5>
                <p>Contamos con personal técnico capacitado para brindar una excelente calidad de servicio tanto sobre equipos fabricados por nosotros como equipos de otras marcas</p>
            </div>
            <div>

                <div className="logoservi">
                    <FontAwesomeIcon icon={faWrench} />

                </div>
                <h5>Instalaciones</h5>
                <p>Realizamos instalaciones de grupos electrógenos, tanto nuestros como adquiridos a nuestros colegas, contamos con todas las medidas de seguridad.</p>
            </div>
            <div>
                <div className="logoservi">
                    <FontAwesomeIcon icon={faBolt} />

                </div>
                <h5>Repuestos</h5>
                <p>Disponemos de amplio stock de repuestos para toda nuestra flota de equipos de fabricación propia como así también de las marcas que representamos.</p>
            </div> */}

        </div>
    )
}

export default Servicios