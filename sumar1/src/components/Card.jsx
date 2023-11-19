import React from 'react';
import { Link } from 'react-router-dom';

import "./styles/card.css";
import _dsc0 from '../images/_dsc0.png';
import card_grupo from '../images/card_grupo.png';
import card_grua from '../images/card_grua.png';
import card_iluminaria from '../images/card_iluminaria.png';

import { Slide, Fade } from 'react-awesome-reveal';

const Card = () => {
    return (
        <div className="card-container">
            <Fade delay={500}>
                <div className="card">
                    <Link to="/sumar/electrogenodiesel">
                        <img
                            className="card-image"
                            src={card_grupo} alt="Imagen de la tarjeta" />

                    </Link>
                </div>


                <div className="card">
                    <Link to="/sumar/TijeraElectrica">
                        <img
                            className="card-image"
                            src={card_grua} alt="Imagen de la tarjeta" />
                    </Link>
                </div>


                <div className="card">
                    <Link to="/sumar/torresled">
                        <img
                            className="card-image"
                            src={card_iluminaria} alt="Imagen de la tarjeta" />


                    </Link>
                </div>
            </Fade>
        </div>

    );
}

export default Card;
