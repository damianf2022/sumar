import React from 'react'
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import './stylesPages/brazotele.css'
const BrazoTelescopico = () => {
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

        // {
        //     original: "https://scontent.fcor11-1.fna.fbcdn.net/v/t1.18169-9/16427752_644441965756380_8534878645639757369_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=6sMVgGnE1hMAX_frpvz&_nc_ht=scontent.fcor11-1.fna&oh=00_AfCKDUatKgdmFwNjGTxSxhLMaOYqXb8jDYElBsHWdnblWg&oe=659048A6",
        //     thumbnail: "https://scontent.fcor11-1.fna.fbcdn.net/v/t1.18169-9/16427752_644441965756380_8534878645639757369_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=dd63ad&_nc_ohc=6sMVgGnE1hMAX_frpvz&_nc_ht=scontent.fcor11-1.fna&oh=00_AfCKDUatKgdmFwNjGTxSxhLMaOYqXb8jDYElBsHWdnblWg&oe=659048A6",
        // },
        // {
        //     original: "https://picsum.photos/id/1019/1000/600/",
        //     thumbnail: "https://picsum.photos/id/1019/250/150/",
        // },
    ];

    return (
        <div className='brazotelecotainer'>
            <img className='imggene' src="https://sumarservicios.com.ar/wp-content/uploads/2020/01/header-plataformas-de-altura-brazo-tele-skyjack.jpg" alt="foto brazo" />
            <div className='myImageGallery'>
                <ImageGallery
                    items={images}
                    thumbnailWidth={250}  // Ajusta el ancho de las miniaturas
                    thumbnailHeight={250} // Ajusta la altura de las miniaturas
                    showPlayButton={false} // Opciones adicionales según tus necesidades
                    showThumbnails={true}
                />
            </div>
            <strong> <h1>Plataformas de elevación diesel con brazo articulado telescópico</h1></strong>
            <p>Las plataformas de elevación diesel con brazo articulado telescópico de <strong>Skyjack</strong> están diseñados para ofrecer la mejor solución de alcance cuando el acceso está limitado por diferentes causas.
                Perfecto para aplicaciones de construcción e industriales.
                El sistema de accionamiento basado en ejes mejora el trabajo y la productividad con una tracción superior demostrando una mejor adaptabilidad del terreno
            </p>
            <ul>
                <li>Ideal para aplicaciones que exigen alcance en entornos con acceso limitado.</li>
                <li>El balanceo de cola minimiza las maniobras en espacios confinados.</li>
                <li>Los modelos de brazos giratorios proporcionan un rango de trabajo adicional.</li>
            </ul>

            <div className='subimage'>
                <img src="https://sumarservicios.com.ar/wp-content/uploads/2020/01/Platadormas-en-altura_Brazo-telesco%CC%81pico-Diesel-1500.jpg" alt="repuestos" />
            </div>
        </div>
    )
}

export default BrazoTelescopico