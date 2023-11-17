import React, { useState } from 'react';
import TorreDeIluminación from '../images/videos/TorreDeIluminación.mp4'
import './stylesPages/torresled.css'

const TorresLed = () => {
    const [playing, setPlaying] = useState(true);

    return (
        <div className='contenedorled'>
            <div className='imggene'>
                <img src="https://sumarservicios.com.ar/wp-content/uploads/2020/01/header-torres-de-iluminacion.jpg" alt="" />
            </div>

            {/* <div className='videoled'> */}
                <video
                    muted
                    src={TorreDeIluminación}
                    controls={playing}
                    autoplay={playing}
                />
                {/* <button onClick={() => setPlaying(!playing)}>
                    {playing ? 'Pausar' : 'Reproducir'}
                </button> */}
            {/* </div> */}

            <div className='ledcontainer'>
                <h2> <strong>Torres de iluminación Led</strong></h2>
                <p><strong>Sumar Servicios Industriales SRL</strong> es uno de los pocos fabricantes nacionales de torres de iluminación led. Contamos con una unidad de potencia compacta de altísima calidad, altamente confiable y de diseño robusto. Las torres de iluminación de Sumar Servicios Industriales SRL poseen una sencilla operación, mantenimiento, y están sujetas a un exhaustivo programa de pruebas.
                    <br /><br />
                    Confiamos principalmente en las motorizaciones diésel Perkins, las cuales cuentan con tres cilindros de línea e inyección directa, refrigerado por agua, dos válvulas por cilindro, cigüeñal y bielas de acero forjado.
                    <br /><br />
                    En cuanto al alternador se utiliza la marca Cramaco.
                    <br /><br />
                    Las cabinas de las torres de iluminación son insonorizadas aptas para intemperie, construidas en chapa galvanizada y pintura poliéster termoconfortable.
                    <br /><br />
                    Las torres poseen cuatro patas de apoyo para lograr una mayor estabilidad. Cuentan con mástil telescópico, rebatible de tres tramos llegando a una altura máxima de 9.5 metros y en cuanto a los artefactos de iluminación que se utilizan para su composición se pueden utilizar tanto luminarias LED de 300 watts como lámparas halógenas Phillips de 1000 watts.
                </p>
                <div>
                    <img className='tablaled' src="https://sumarservicios.com.ar/wp-content/uploads/2020/01/ORIG_SUMAR_web_Torres-led.jpg" alt="" />
                    <img className='torreled' src="https://sumarservicios.com.ar/wp-content/uploads/2020/01/Torres-de-iluminacion-led.png" alt="" />
                </div>
            </div>
        </div>

    )
}

export default TorresLed