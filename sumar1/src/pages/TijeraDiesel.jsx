import React, { useState } from 'react';
import PlataformaAltura from '../images/videos/PlataformaAltura.mp4'
import './stylesPages/tijeradiesel.css'
const TijeraDiesel = () => {
    const [playing, setPlaying] = useState(true);

    return (
        <div className='tijedieselconten'>
            <img className='imggene' src="https://sumarservicios.com.ar/wp-content/uploads/2020/01/header-plataformas-de-altura-tijera-diesel.jpg" alt="header" />

            <h1><strong>Plataformas de elevación tipo tijera todo terreno diesel</strong></h1>
            <p>Conocido como un líder de la industria en plataformas de elevación tipo tijera todo terreno diesel a combustión durante décadas, <strong>Skyjack</strong> continúa mejorando sus equipos para los terrenos más difíciles con la mejor adaptación.
                <br /><br />
                La característica de estos equipos es operar al aire libre bajo cualquier tipo de condición de terreno, esto significa que este elevador tijera para terrenos accidentados puede ser el primero y el ultimo en irse.
                <br /><br />
                Cuenta con una gran capacidad de pendiente a superar, 45 por ciento y crossover simétrico a las cuatro ruedas.
                <br /><br />
                Neumáticos rellenos de espuma, casi cero niveles de ruido y cero emisiones de gases, esto hace que la transición de la tijera de interior a exterior muy sencillo y versátil el trabajo.
            </p>
            <div className='subimage'>
                <img className='tijdiesel' src="https://sumarservicios.com.ar/wp-content/uploads/2020/01/Plataforma-de-elevacio%CC%81n-tipo-Tijera-todo-terreno-Diesel-1392x1536.jpg" alt="tijera" />
            </div>
        </div>
    )
}

export default TijeraDiesel