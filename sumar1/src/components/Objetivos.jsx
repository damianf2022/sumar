import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingUsd, faKey, faCheckSquare, faHandshake } from '@fortawesome/free-solid-svg-icons';
import "./styles/objetivos.css";
import galeria from '../images/galeria.png'

import snorkel from '../images/snorkel.jpg'


const Objetivos = () => {
    return (
        <div>

            <div className='contenedor-objetivos-1'>
                <div className='contenedor-objetivos-2' >
                    <p><strong>Nuestro objetivo es que nuestros clientes nos consideren socios estratégicos para sus proyectos.</strong></p>
                    <div className='cartasobj'>
                        <div className="objcard">
                            <FontAwesomeIcon className="obj-icon" icon={faHandHoldingUsd} />
                            <div>1653</div>
                            <h6>Equipos vendidos</h6>
                            <div className="linea-divisora"></div>

                        </div>

                        <div className="objcard">
                            <FontAwesomeIcon className="obj-icon" icon={faKey} />
                            <div>186</div>
                            <h6>Flota de alquiler</h6>
                            <div className="linea-divisora"></div>

                        </div>
                        <div className="objcard">
                            <FontAwesomeIcon className="obj-icon" icon={faCheckSquare} />
                            <div>300</div>
                            <h6>Equipos abonados</h6>
                            <div className="linea-divisora"></div>

                        </div>
                        <div className="objcard">
                            <FontAwesomeIcon className="obj-icon" icon={faHandshake} />
                            <div>5600</div>
                            <h6>Clientes satisfechos</h6>
                            <div className="linea-divisora"></div>

                        </div>
                    </div>

                    <div className="contenedor-objetivo-3">
                        <h3><strong>Solicitá asesoramiento</strong></h3>
                        <span>Nuestro principal objetivo, es construir relaciones a largo plazo con nuestros clientes, como así también con nuestros
                            proveedores y empleados, a quienes consideramos pilares fundamentales para el desarrollo de nuestra companía.
                        </span>
                        <Link to="/sumar/Contacto" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <button>CONTACTANOS</button>
                        </Link>
                    </div>
                </div>


            </div>
            <div className="contenedor-objetivos-4">
                <h3>Somos Representantes</h3>
                <div className="linea-divisoraf"></div>
                <img className="galeria" src={galeria} alt="imagen de galeria" />
                {/* <img src={snorkel} alt="snorkel" /> */}
                {/* <img src="https://sumarservicios.com.ar/wp-content/uploads/2020/01/representantes-1024x213.jpg" alt="imagen de representado" /> */}
            </div>
        </div>
    )
}

export default Objetivos