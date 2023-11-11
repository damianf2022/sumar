import React from 'react';
import { Link } from 'react-router-dom';

import "./styles/card.css";
import _dsc0 from '../images/_dsc0.png';
import { Slide, Fade } from 'react-awesome-reveal';

const Card = () => {
    return (
        <div className="card-container">
            <Fade delay={1000}>
                {/* <div className="card1">
                    <img
                        className="card-image"
                        src="https://sumarservicios.com.ar/wp-content/uploads/2020/02/Home_nuestros-equipos_grupos-1.png"
                        alt="Imagen de la tarjeta"
                    />
                    <h3 className="card-title">Grupos electrógenos</h3>
                    <Link to="/sumar/electrogenodiesel">
                        <button className="card-button">Botón</button>
                    </Link>
                </div> */}


                <div className="card">
                    <Link to="/sumar/electrogenogas">
                        <img
                            className="card-image"
                            src='https://sumarservicios.com.ar/wp-content/uploads/2020/02/Home_nuestros-equipos_torres-1.png' alt="Imagen de la tarjeta"
                        />
                        {/* <h3 className="card-title">Torres de Iluminación</h3>
                        <button className="card-button">Botón</button>*/}
                    </Link>
                </div>


                <div className="card">
                    <Link to="/sumar/tijeraelectrica">
                        <img
                            className="card-image"
                            src='https://sumarservicios.com.ar/wp-content/uploads/2020/02/Home_nuestros-equipos_plataformas-1.png' alt="Imagen de la tarjeta"
                        />
                        {/* <h3 className="card-title">Plataformas en Altura</h3>
                        <button className="card-button">Botón</button>
                */}

                    </Link>
                </div>
            </Fade>
        </div>

    );
}

export default Card;
