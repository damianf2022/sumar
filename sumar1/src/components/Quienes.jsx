import React from 'react'
import "./styles/quienes.css"; 
import equipo from '../images/equipo.png'
const Quienes = () => {
    return (
        <div className="image-text-container">
            <div className="image-half">
                <img className="half-image" src={equipo} alt="Imagen" />
                {/* <img className='equipo2' src="https://scontent.fcor11-2.fna.fbcdn.net/v/t1.6435-9/43108213_964736720393568_6994842175590629376_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=IVtqXnZWI9kAX_QHtAH&_nc_ht=scontent.fcor11-2.fna&oh=00_AfCcuZnx_UwjGqm06VHFUKM-tkmv1lQ5reKytiSUkkBcaQ&oe=65776C94" alt="foto equipo" /> */}

            </div>
            <div className="text-half">
                <h2><strong>Quiénes somos</strong></h2>
                <img className='linea' src="https://sumarservicios.com.ar/wp-content/uploads/2020/01/divider.jpg" alt="linea" /> <br />
                <p>SUMAR Servicios Industriales S.R.L. es una empresa joven y dinámica con una fuerte cultura orientada a la atención del cliente, brindando soluciones rápidas y eficientes, trabajando bajo las normas necesarias para el correcto desarrollo y cumplimiento en tiempo y forma de vuestros proyectos.</p>
                <p>Nuestra misión es ofrecer a nuestros clientes la mejor ecuación precio y calidad del mercado, siempre apuntando a la excelencia. Desde el asesoramiento preventa para brindar la mejor solución, pasando por la provisión de equipos y servicios, hasta la postventa.</p>
                <p>Nuestra visión es construir relaciones a largo plazo con nuestros clientes, a quienes consideramos pilares fundamentales para el desarrollo de la compañía. Con el fin ser una empresa referente en el segmento  y lograr una mayor especialización.</p>
            </div>

                {/* <img className='equipo3' src="https://scontent.fcor11-2.fna.fbcdn.net/v/t1.6435-9/43108213_964736720393568_6994842175590629376_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=IVtqXnZWI9kAX_QHtAH&_nc_ht=scontent.fcor11-2.fna&oh=00_AfCcuZnx_UwjGqm06VHFUKM-tkmv1lQ5reKytiSUkkBcaQ&oe=65776C94" alt="foto equipo" /> */}

        </div>
    );
}

export default Quienes