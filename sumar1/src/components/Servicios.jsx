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
                        <FontAwesomeIcon icon={faHandshake}  style={{ paddingRight:'270px' }}/>
                    </div>
                    <div className="servicio-info">
                        <h4 style={{ paddingLeft:'57px' }}>Ventas</h4>
                    </div>
                    <p>Ofrecemos atención preventa personalizada para brindar el mejor asesoramiento para sus proyectos.
                    </p>
                </div>
                <br /><br />
            </div>
            <div className='prueba'>
                <div className='marco'>
                    <div className="logoservi">
                        <FontAwesomeIcon icon={faRetweet}  style={{ paddingRight:'270px' }}/>
                    </div>
                    <div className="servicio-info">
                        <h4 style={{ paddingLeft:'64px' }}>Alquiler</h4>
                    </div>
                    <p>Contamos con una moderna flota de alquiler de 180 equipos. Sometemos a exahutivos chequeos y controles de seguridad, a fin de garantizar su máxima operatividad.
                    </p>
                </div>
                <br /><br />
            </div>
            <div className='prueba'>
                <div className='marco'>
                    <div className="logoservi">
                        <FontAwesomeIcon icon={faUsers} style={{ paddingRight:'270px' }} />
                    </div>
                    <div className="servicio-info">
                        <h4 style={{ paddingLeft:'70px' }}>DSE Electronics</h4>
                    </div>
                    <p>Representamos en Argentina de la firma de DSE Electronics, empresa líder mundial en fabricación de controladores para grupos electrógenos y motores, lógicas de transferencias y cargadores de baterías.</p>
                </div>
                <br /><br />
            </div>
            <div className='prueba'>
                <div className='marco'>
                    <div className="logoservi">
                        <FontAwesomeIcon icon={faCogs} style={{ paddingRight:'270px' }} />
                    </div>
                    <div className="servicio-info">
                        <h4  style={{ paddingLeft:'70px' }}>Servicio técnico</h4>
                    </div>
                    <p>Contamos con personal técnico capacitado para brindar una excelente calidad de servicio tanto sobre equipos fabricados por nosotros como equipos de otras marcas</p>
                </div>
                <br /><br />
            </div>
            <div className='prueba'>
                <div className='marco'>
                    <div className="logoservi">
                        <FontAwesomeIcon icon={faWrench}  style={{ paddingRight:'270px' }} />
                    </div>
                    <div className="servicio-info">
                        <h4  style={{ paddingLeft:'70px' }}>Instalaciones</h4>
                    </div>
                    <p>Realizamos instalaciones de grupos electrógenos, tanto nuestros como adquiridos a nuestros colegas, contamos con todas las medidas de seguridad.</p>
                </div>
                <br /><br />
            </div>
            <div className='prueba'>
                <div className='marco'>
                    <div className="logoservi">
                        <FontAwesomeIcon icon={faBolt}  style={{ paddingRight:'270px' }} />
                    </div>
                    <div className="servicio-info">
                        <h4  style={{ paddingLeft:'70px' }}>Repuestos</h4>
                    </div>
                    <p>Disponemos de amplio stock de repuestos para toda nuestra flota de equipos de fabricación propia como así también de las marcas que representamos.</p>
                </div>
                <br /><br />
            </div>
        </div>
    )
}

export default Servicios