import React, { useState } from 'react';
import GrupoElectrogeno from '../images/videos/GrupoElectrogeno.mp4'
import './stylesPages/brazodiesel.css'
const BrazoArtDiesel = () => {
    const [playing, setPlaying] = useState(true);
    return (

        <div className='brazocontainer'>
            <div className='imggene'>
                <img src="https://sumarservicios.com.ar/wp-content/uploads/2020/01/header-plataformas-de-altura-skyjack.jpg" alt="" />
            </div>

            {/* <div className='tvideo'>
                <video
                    muted
                    src={GrupoElectrogeno}
                    controls={playing}
                    autoplay={playing}
                />
                <button onClick={() => setPlaying(!playing)}>
                    {playing ? 'Pausar' : 'Reproducir'}
                </button>
            </div> */}


            <div className='subbrazocontainer'>

                <h2><strong>Plataformas de elevación diesel con brazo articulado</strong></h2>

                <p>Las plataformas de elevación diesel con brazo articulado de <strong>Skyjack</strong> proporcionan una versatilidad líder en la industria
                    Ideal para aplicaciones tanto de construcción como industriales, los elevadores <strong>Skyjack’s</strong> tipo brazo articulado cuentan con un alcance superior – ya sea en altura, alcance horizontal, hacia arriba y sobre despeje.
                </p>
                <ul>
                    <li>Radio de giro reducido y cola cero para maniobras en espacios reducidos.</li>
                    <li>Tracción en las cuatro ruedas basada en el eje.</li>
                    <li>Opciones de motor diésel y combustible. Excelente potencia, torque y capacidad de terreno en general.</li>
                    <li>La característica del Jib proporciona un mayor rango de trabajo y mejor alcance a lugares confinados.</li>
                </ul>
                <div>
                    <img src="https://sumarservicios.com.ar/wp-content/uploads/2020/01/Platadormas-en-altura_Brazo-articulado-Diesel-1500.jpg" alt="" />
                </div>
            </div>

        </div>
    )
}

export default BrazoArtDiesel