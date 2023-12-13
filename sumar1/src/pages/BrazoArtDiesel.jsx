import React from 'react';
import './stylesPages/brazodiesel.css'
import ImageGallery from "react-image-gallery";

import brazo3 from '../images/brazoarticulado3.png'
import brazo2 from '../images/brazoarticulado2.png'
import brazo from '../images/brazoarticulado.png'
import brazo_ from '../images/brazo_articulado.jpeg'
import ezeiza from '../images/EZEIZA.jpg'

const BrazoArtDiesel = () => {
    const images = [
        {
            original: brazo,
            // thumbnail: ezeiza,
            originalHeight: 600, // ajusta la altura según tus necesidades
            originalWidth: 1000, // ajusta el ancho según tus necesidades
            thumbnailHeight: 150, // ajusta la altura de la miniatura según tus necesidades
            thumbnailWidth: 250, // a
        },
        // {
        //     original: brazo3,
        //     thumbnail: brazo3,
        //     originalHeight: 600, // ajusta la altura según tus necesidades
        //     originalWidth: 1000, // ajusta el ancho según tus necesidades
        //     thumbnailHeight: 150, // ajusta la altura de la miniatura según tus necesidades
        //     thumbnailWidth: 250, // a
        // },
        // {
        //     original: brazo_,
        //     thumbnail: brazo_,
        //     originalHeight: 600, // ajusta la altura según tus necesidades
        //     originalWidth: 1000, // ajusta el ancho según tus necesidades
        //     thumbnailHeight: 150, // ajusta la altura de la miniatura según tus necesidades
        //     thumbnailWidth: 250, // a
        // },
        // // {
        //     original: brazo2,
        //     thumbnail: brazo2,
        //     originalHeight: 600,
        //     originalWidth: 1000,
        //     thumbnailHeight: 150, // ajusta la altura de la miniatura según tus necesidades
        //     thumbnailWidth: 250, // a
        // },
        // {
        //     original: brazo,
        //     thumbnail: brazo,
        //     originalHeight: 600,
        //     originalWidth: 1000,
        //     thumbnailHeight: 150, // ajusta la altura de la miniatura según tus necesidades
        //     thumbnailWidth: 250, // a
        // },
    ];

    return (

        <div className='brazocontainer'>
            <div className='imggene'>
                <img src="https://sumarservicios.com.ar/wp-content/uploads/2020/01/header-plataformas-de-altura-skyjack.jpg" alt="foto brazo" />
            </div>
            {/* <div className='contentgif'> */}
            {/* <img className='gif' src={brazo} alt="gif" /> */}
            {/* </div> */}
            <div className='Gallery_Bdiesel'>
                <ImageGallery
                    items={images}
                    // thumbnailWidth={50}  // Ajusta el ancho de las miniaturas
                    // thumbnailHeight={50} // Ajusta la altura de las miniaturas
                    showPlayButton={false} // Opciones adicionales según tus necesidades
                    showFullscreenButton={false}
                    // originalClass="custom-image-class"  // Añade esta clase para las imágenes
                    // thumbnailClass="custom-thumbnail-class"  // Añade esta clase para las miniaturas


                />
            </div>
            <div className='subbrazocontainer'>
                <h1><strong>Plataformas de elevación diesel con brazo articulado</strong></h1>

                <p>Las plataformas de elevación diesel con brazo articulado de <strong>Skyjack</strong> proporcionan una versatilidad líder en la industria
                    Ideal para aplicaciones tanto de construcción como industriales, los elevadores <strong>Skyjack’s</strong> tipo brazo articulado cuentan con un alcance superior – ya sea en altura, alcance horizontal, hacia arriba y sobre despeje.
                </p>
                <ul>
                    <li>Radio de giro reducido y cola cero para maniobras en espacios reducidos.</li>
                    <li>Tracción en las cuatro ruedas basada en el eje.</li>
                    <li>Opciones de motor diésel y combustible. Excelente potencia, torque y capacidad de terreno en general.</li>
                    <li>La característica del Jib proporciona un mayor rango de trabajo y mejor alcance a lugares confinados.</li>
                </ul>
                <img src="https://sumarservicios.com.ar/wp-content/uploads/2020/01/Platadormas-en-altura_Brazo-articulado-Diesel-1500.jpg" alt="repuestos" />
            </div>

        </div>
    )
}

export default BrazoArtDiesel