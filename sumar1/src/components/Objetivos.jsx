import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons';

const Objetivos = () => {
    return (
        <div>
            <p>Nuestro objetivo es que nuestros clientes nos consideren socios estratégicos para sus proyectos.</p>

            <div className="obj card">
                <FontAwesomeIcon icon={faHandHoldingUsd} />
                <p>1653</p>
                <p>Equipos vendidos</p>
            </div>
            <div className="obj card">
                <FontAwesomeIcon icon={faHandHoldingUsd} />
                <p>186</p>
                <p>Flota de alquiler</p>
            </div>
            <div className="obj card">
                <FontAwesomeIcon icon={faHandHoldingUsd} />
                <p>300</p>
                <p>Equipos abonados</p>
            </div>
            <div className="obj card">
                <FontAwesomeIcon icon={faHandHoldingUsd} />
                <p>5600</p>
                <p>Clientes satisfechos</p>
            </div>

        </div>
    )
}

export default Objetivos