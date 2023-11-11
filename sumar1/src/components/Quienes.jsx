import React from 'react'
import "./styles/quienes.css"; // Importa los estilos CSS desde el archivo "Card.css"
import equipo from '../images/equipo.png'
const Quienes = () => {
    return (
        <div className="image-text-container">
            <div className="image-half">
                <img className="half-image"src={equipo} alt="Imagen" />
            </div>
            <div className="text-half">
                <h2>Quiénes somos</h2>
                <img className='linea' src="https://sumarservicios.com.ar/wp-content/uploads/2020/01/divider.jpg" alt="linea" /> <br />
                <p><strong>SUMAR SERVICIOS INDUSTRIALES S.R.L.</strong> es una empresa joven y dinámica con una fuerte cultura orientada a la atención del cliente, brindando soluciones rápidas y eficientes, trabajando bajo las normas necesarias para el correcto desarrollo y cumplimiento en tiempo y forma de vuestros proyectos.</p>
                <p><strong>Nuestra misión</strong> es ofrecer a nuestros clientes la mejor ecuación precio y calidad del mercado, siempre apuntando a la excelencia. Desde el asesoramiento preventa para brindar la mejor solución, pasando por la provisión de equipos y servicios, hasta la postventa.</p>
                <p><strong>Nuestra visión</strong> es construir relaciones a largo plazo con nuestros clientes, a quienes consideramos pilares fundamentales para el desarrollo de la compañía. Con el fin ser una empresa referente en el segmento  y lograr una mayor especialización.</p>
            </div>


        </div>
    );
}

export default Quienes