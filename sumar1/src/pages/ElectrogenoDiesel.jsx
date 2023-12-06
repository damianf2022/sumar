import React, { useState } from 'react';
import GrupoElectrogeno from '../images/videos/SCANIAGE.mp4'
import './stylesPages/electrogenodiesel.css'
const ElectrogenoDiesel = () => {
    const [playing, setPlaying] = useState(true);

    return (
        <div className='section_diesel'>
            <div className='imggene'>
                <img src="https://sumarservicios.com.ar/wp-content/uploads/2020/01/header-grupos-electrogenos-sumar.jpg" alt="grupo electrogeno diesel" />
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
            <div className='trogenocontaniner'>
                <h1><strong>Grupos electrógenos diesel</strong></h1>
                <p><strong>Sumar Servicios Industriales SRL</strong> se dedica a la fabricación de grupos electrógenos diesel desde el año 2013, apostando a la calidad de los componentes y la fabricación de los mismos.
                    <br /><br />
                    Apoyándose principalmente en los motores BAUDOUIN, FPT, PERKINS, CUMMINS y SCANIA, en los alternadores en marcas como WEG y CRAMACO.
                    <br /><br />
                    Los componentes eléctricos de nuestros grupos electrógenos diesel principalmente son: ABB y WEG.
                    <br /><br />
                    Somos representantes de grupos electrógenos diesel de la marca DeepSea de UK , líderes en fabricación de controladores de equipos, tanto para control del equipo, paralelismo, transferencia automática; contamos con amplio stock para entrega inmediata.
                    <br /><br />
                    Ofrecemos tanto opciones abiertas como cabinadas, en el caso de esta última con chapa galvanizada y pintura epoxi, e insonorización ignifuga con lana basáltica mineral.
                    <br /><br />
                    También contamos con transferencias automáticas (módulos de conmutación) fabricados con la más alta calidad tanto con componentes WEG o ABB.
                    <br /><br />
                    Adaptamos proyectos a medida de rupos electrógenos diesel de acuerdo a la necesidad del cliente como por ejemplo: tanques de combustible desmontable con mayor autonomía, chasis y cabinas, cáncamos de izaje, batea antiderrame.
                    <br /><br />
                    Los tipos de escape que hay son: industriales, residenciales o críticos.
                    <br /><br />
                    Tenemos precalentadores de block, cargadores de batería.
                </p>
                <img src="https://sumarservicios.com.ar/wp-content/uploads/2020/01/Grupos_electrogenos_Diesel-1.jpg" alt="grupo" />

            </div>
            <div className='trogenocontaniner2'>
                <h2 className='h2'><strong>Componentes y Accesorios</strong></h2>
                <p className='p2'><strong>Motores</strong>: Utilizamos motores de primera línea como ser MWM, Cummins, Perkins, Agrale y FPT. <br />
                    <strong>Alternadores</strong>: Utilizamos alternadores de primera línea como WEG y Cramaco. <br />
                    <strong>Cabinados</strong>: Construcción modular en chapa galvanizada, pintura epoxi, paneles fonoabsorbentes ignífugos de lana de roca volcánica, y silenciador de escape residencial, bulones de acero inoxidable ocultos, entradas y salidas de aire tratadas acústicamente y con luz interior. <br />
                    <strong>Tablero de control de grupo y tableros de transferencia:</strong> <br />
                </p>
                <ul className='lu'>
                    <li>Lógica de control Deep Sea, y componentes de maniobra ABB.</li>
                    <li>Sistemas de paralelismo, load sharing and peak shaving.</li>
                    <li>Iluminación interior.</li>
                </ul>
                <div className='motoralt'>
                    <img className='img2' src="https://sumarservicios.com.ar/wp-content/uploads/2020/01/Grupos-electrogenos_motores.jpg" alt="repuesto" />
                    <img className='img2' src="https://sumarservicios.com.ar/wp-content/uploads/2020/01/Grupos-electrogenos_alternadores.jpg" alt="repuesto" />
                    {/* <img className='img2' src="https://sumarservicios.com.ar/wp-content/uploads/2020/01/Grupos-electrogenos_tableros-150x150.jpg" alt="repuesto" /> */}
                </div>
            </div>
        </div>

    )
}

export default ElectrogenoDiesel