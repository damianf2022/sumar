import React, { useState } from 'react';
import './stylesPages/electrogenoGas.css'
import GrupoElectrogeno from '../images/videos/TodosGE.mp4'

const Electrogenogas = () => {
    const [playing, setPlaying] = useState(true);

    return (
        <div className='section_gas'>
            <div className='imggene3'>
                <img src="https://sumarservicios.com.ar/wp-content/uploads/2020/01/header-grupos-electrogenos-sumar.jpg" alt="header" />
            </div>
            {/* <div className='tvideo'> */}
            <video
                muted
                src={GrupoElectrogeno}
                controls={playing}
                autoplay={playing}

            />
            {/* <button onClick={() => setPlaying(!playing)}>
                    {playing ? 'Pausar' : 'Reproducir'}
                </button> */}
            {/* </div> */}


            <div className='trogenocontaniner3'>
                <h1><strong>Grupos electrógenos a gas</strong> </h1>
                <p>Sumar Servicios Industriales SRL se dedica a la fabricación de grupos electrógenos a gas de alta calidad y confiables con un diseño compacto de sencilla operación y mantenimiento desde el año 2014, desde potencias de 10KVa hasta 500KVa. En potencias hasta 66KVa las modificaciones son realizas por Sumar, y en potencias hasta 500KVa los motores son provistos desde fábrica.
                    <br />
                    Apoyándose principalmente en los motores Agrale, MWM y Scania, en los alternadores en marcas como WEG y CRAMACO.
                    <br />
                    Los componentes eléctricos de los grupos electrógenos a gas principalmente son: ABB y WEG.
                    <br />
                    Somos representantes de la marca DeepSea, líderes en fabricación de controladores de equipos, tanto para control del equipo, paralelismo, transferencia automática; contamos con amplio stock para entrega inmediata.
                    <br />
                    Ofrecemos tanto opciones abiertas como cabinadas, en el caso de esta última con chapa galvanizada y pintura epoxi, e insonorización ignifuga con lana basáltica mineral.
                    <br />
                    También contamos con transferencias automáticas (módulos de conmutación) fabricados con la más alta calidad tanto con componentes WEG o ABB.
                    <br />
                    Adaptamos proyectos de <strong>grupos electrógenos a gas</strong> a medida de acuerdo a la necesidad del cliente: chasis y cabinas, cáncamos de izaje.
                    <br />
                    Los tipos de escape que hay son: industriales, residenciales o críticos.
                    Tenemos precalentadores de block, cargadores de batería.
                    <br />
                    Cada grupo electrógeno a gas está sujeto a un exhaustivo programa de pruebas que incluye pruebas de carga completa, verificación y provisión de todas las funciones de control y seguridad.
                </p>
                <img src="https://sumarservicios.com.ar/wp-content/uploads/2020/01/Grupos_electrogenos_Gas.jpg" alt="electrogeno gas" />
            </div>

            <div className='gascontaniner2'>
                <h2 className='h2'><strong>Componentes y Accesorios</strong></h2>
                <p className='p'><strong>Motores</strong>: Utilizamos motores de primera línea como ser: Cummins, Scania y FPT. <br />
                    <strong>Alternadores</strong>: Utilizamos alternadores de primera línea como Cramaco y WEG. <br />
                    <strong>Cabina</strong>: Construcción modular en chapa galvanizada, pintura epoxi, paneles fonoabsorbentes ignífugos de lana de roca volcánica, y silenciador de escape residencial, bulonería de acero inoxidable ocultos, entradas y salidas de aire tratadas acústicamente. Luz interior en la cabina. Tablero de control de grupo y tableros de transferencia:
                </p>
                <br />
                <ul className='lu'>
                    <li>Lógica de control DEEP SEA, y componentes de maniobra ABB</li>
                    <li>Sistemas de paralelismo, load sharing and peak shaving</li>
                    <li>Iluminacion interior</li>
                </ul>
                <div className='altenadorgas'>
                    <img className='img' src="https://sumarservicios.com.ar/wp-content/uploads/2020/01/Grupos-electrogenos_alternadores.jpg" alt="repuestos" />
                </div>
            </div>
        </div>

    )
}

export default Electrogenogas