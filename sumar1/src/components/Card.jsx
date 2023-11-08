import React from 'react';
import "./styles/Card.css"; // Importa los estilos CSS desde el archivo "Card.css"
import _dsc0 from '../images/_dsc0.jpg';

const Card = () => {
    return (
        <div className="card-container">
            <div className="card">
                <img
                    className="card-image"
                    src="https://sumarservicios.com.ar/wp-content/uploads/2020/02/Home_nuestros-equipos_grupos-1.png"
                    alt="Imagen de la tarjeta"
                />
                <h3 className="card-title">Grupos electrógenos</h3>
                <button className="card-button">Botón</button>
            </div>
            <div className="card">
                <img
                    className="card-image"
                    src='https://sumarservicios.com.ar/wp-content/uploads/2020/02/Home_nuestros-equipos_torres-1.png' alt="Imagen de la tarjeta"
                />
                <h3 className="card-title">Torres de Iluminación</h3>
                <button className="card-button">Botón</button>
            </div>
            <div className="card">
                <img
                    className="card-image"
                    src='https://sumarservicios.com.ar/wp-content/uploads/2020/02/Home_nuestros-equipos_plataformas-1.png' alt="Imagen de la tarjeta"
                />
                <h3 className="card-title">Plataformas en Altura</h3>
                <button className="card-button">Botón</button>
            </div>
        </div>

    );
}

export default Card;
