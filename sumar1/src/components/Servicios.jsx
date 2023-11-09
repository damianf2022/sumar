import React from 'react'
import "./styles/servicios.css"; 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshake, faRetweet, faUsers, faCogs, faWrench, faBolt } from '@fortawesome/free-solid-svg-icons';

const Servicios = () => {
    return (

        <div className='grand-content'>
            
            <div className='servis'>
                <h2>Servicios</h2>
                <div className="linea-divisora"></div>
            </div>

            <div className="content">
                <div className="logo">
                    <FontAwesomeIcon icon={faHandshake} />
                </div>
                <div className="titulo">
                    <h2>Ventas</h2>
                    <p>Ofrecemos atención preventa personalizada para brindar el mejor asesoramiento para sus proyectos.</p>
                </div>
            </div>
            <div className="content">
                <div className="logo">
                    <FontAwesomeIcon icon={faRetweet} />
                </div>
                <div className="titulo">
                    <h2>Alquileres</h2>
                    <p>Contamos con una moderna flota de alquiler de 180 equipos. Sometemos a exahutivos chequeos y controles de seguridad, a fin de garantizar su máxima operatividad.</p>
                </div>
            </div>
            <div className="content">
                <div className="logo">
                    <FontAwesomeIcon icon={faUsers} />
                </div>
                <div className="titulo">
                    <h2>DSE Electronics</h2>
                    <p>Representamos en Argentina de la firma de DSE Electronics, empresa líder mundial en fabricación de controladores para grupos electrógenos y motores, lógicas de transferencias y cargadores de baterías.</p>                </div>
            </div>
            <div className="content">
                <div className="logo">
                    <FontAwesomeIcon icon={faCogs} />
                </div>
                <div className="titulo">
                    <h2>Servicio técnico</h2>
                    <p>Contamos con personal técnico capacitado para brindar una excelente calidad de servicio tanto sobre equipos fabricados por nosotros como equipos de otras marcas.</p>                </div>
            </div>
            <div className="content">
                <div className="logo">
                    <FontAwesomeIcon icon={faWrench} />
                </div>
                <div className="titulo">
                    <h2>Instalaciones</h2>
                    <p>Realizamos instalaciones de grupos electrógenos, tanto nuestros como adquiridos a nuestros colegas, contamos con todas las medidas de seguridad.</p>                </div>
            </div>
            <div className="content">
                <div className="logo">
                    <FontAwesomeIcon icon={faBolt} />
                </div>
                <div className="titulo">
                    <h2>Repuestos</h2>
                    <p>Disponemos de amplio stock de repuestos para toda nuestra flota de equipos de fabricación propia como así también de las marcas que representamos.</p>                </div>
            </div>

        </div>


    )
}

export default Servicios