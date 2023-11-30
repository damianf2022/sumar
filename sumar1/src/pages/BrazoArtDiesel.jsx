import React from 'react';
import './stylesPages/brazodiesel.css'
import ImageGallery from "react-image-gallery";

import brazo from '../images/brazoArt2.gif'
const BrazoArtDiesel = () => {
    const images = [
        {
            original: "https://scontent.fcor11-2.fna.fbcdn.net/v/t1.6435-9/188656712_1690588294475070_2282297236909307526_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=810d5f&_nc_ohc=Fo0IHwetZ-YAX9fY1Mz&_nc_ht=scontent.fcor11-2.fna&oh=00_AfB0uUgeWcEfSr6JlXyBjm5LdhCKeJtQgmdNbWdUJ8A42A&oe=6590421D",
            thumbnail: "https://scontent.fcor11-2.fna.fbcdn.net/v/t1.6435-9/188656712_1690588294475070_2282297236909307526_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=810d5f&_nc_ohc=Fo0IHwetZ-YAX9fY1Mz&_nc_ht=scontent.fcor11-2.fna&oh=00_AfB0uUgeWcEfSr6JlXyBjm5LdhCKeJtQgmdNbWdUJ8A42A&oe=6590421D",
        },
        {
            original: "https://scontent.fcor11-2.fna.fbcdn.net/v/t1.6435-9/188656712_1690588294475070_2282297236909307526_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=810d5f&_nc_ohc=Fo0IHwetZ-YAX9fY1Mz&_nc_ht=scontent.fcor11-2.fna&oh=00_AfB0uUgeWcEfSr6JlXyBjm5LdhCKeJtQgmdNbWdUJ8A42A&oe=6590421D",
            thumbnail: "https://scontent.fcor11-2.fna.fbcdn.net/v/t1.6435-9/188656712_1690588294475070_2282297236909307526_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=810d5f&_nc_ohc=Fo0IHwetZ-YAX9fY1Mz&_nc_ht=scontent.fcor11-2.fna&oh=00_AfB0uUgeWcEfSr6JlXyBjm5LdhCKeJtQgmdNbWdUJ8A42A&oe=6590421D",
        },
        {
            original: "https://scontent.fcor11-2.fna.fbcdn.net/v/t1.6435-9/188656712_1690588294475070_2282297236909307526_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=810d5f&_nc_ohc=Fo0IHwetZ-YAX9fY1Mz&_nc_ht=scontent.fcor11-2.fna&oh=00_AfB0uUgeWcEfSr6JlXyBjm5LdhCKeJtQgmdNbWdUJ8A42A&oe=6590421D",
            thumbnail: "https://scontent.fcor11-2.fna.fbcdn.net/v/t1.6435-9/188656712_1690588294475070_2282297236909307526_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=810d5f&_nc_ohc=Fo0IHwetZ-YAX9fY1Mz&_nc_ht=scontent.fcor11-2.fna&oh=00_AfB0uUgeWcEfSr6JlXyBjm5LdhCKeJtQgmdNbWdUJ8A42A&oe=6590421D",
        },
    ]

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
                    thumbnailWidth={250}  // Ajusta el ancho de las miniaturas
                    thumbnailHeight={250} // Ajusta la altura de las miniaturas
                    showPlayButton={false} // Opciones adicionales según tus necesidades
                    showThumbnails={false}
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