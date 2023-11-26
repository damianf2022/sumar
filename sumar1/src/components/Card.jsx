import { React, useState } from 'react';
import { Link } from 'react-router-dom';

import sound2 from '../../src/assets/reactanimacionsonidos_src_Assets_sound_efectoEncima.ogg';


import "./styles/card.css";
import _dsc0 from '../images/_dsc0.png';
import card_grupo from '../images/card_grupo.png';
import card_grua from '../images/card_grua.png';
import card_iluminaria from '../images/card_iluminaria.png';

import { Slide, Fade } from 'react-awesome-reveal';

const Card = () => {
    const [isSoundPlaying, setIsSoundPlaying] = useState(false);

    const handleMouseEnter = () => {
        setIsSoundPlaying(true);
    };

    const handleMouseLeave = () => {
        setIsSoundPlaying(false);
    };


    return (
        <div className="card-container">
            <Fade delay={500}>
                <div className="card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <Link to="/sumar/electrogenodiesel">
                        <img
                            className="card-image"
                            src={card_grupo} alt="Imagen de la tarjeta" />
                        {isSoundPlaying && <audio autoPlay src={sound2} />}

                    </Link>
                </div>


                <div className="card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <Link to="/sumar/TijeraElectrica">
                        <img
                            className="card-image"
                            src={card_grua} alt="Imagen de la tarjeta" />
                        {/* {isSoundPlaying && <audio autoPlay src={sound2} />} */}

                    </Link>
                </div>


                <div className="card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
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
