import React from 'react'
import "./styles/quienes.css"; // Importa los estilos CSS desde el archivo "Card.css"

const Quienes = () => {
    return (
        <div className="image-text-container">
            <div className="image-half">
                <img src="https://sumarservicios.com.ar/wp-content/uploads/2020/01/Home_quienes-somos.png" alt="Imagen" />
            </div>
            <div className="text-half">
                <br />
                <h2>Título</h2>
                <br/>
                <br /><img src="https://sumarservicios.com.ar/wp-content/uploads/2020/01/divider.jpg" alt="linea" /> <br />
                <p> <strong>SUMAR SERVICIOS INDUSTRIALES S.R.L.</strong>es una empresa joven y dinámica con una fuerte cultura orientada a la atención del cliente, brindando soluciones rápidas y eficientes, trabajando bajo las normas necesarias para el correcto desarrollo y cumplimiento en tiempo y forma de vuestros proyectos.</p>
                <br /> <br />
                <p><strong>Nuestra misión</strong>es ofrecer a nuestros clientes la mejor ecuación precio y calidad del mercado, siempre apuntando a la excelencia. Desde el asesoramiento preventa para brindar la mejor solución, pasando por la provisión de equipos y servicios, hasta la postventa.</p>
                <br /><br />
                <p><strong>Nuestra visión</strong> es construir relaciones a largo plazo con nuestros clientes, a quienes consideramos pilares fundamentales para el desarrollo de la compañía. Con el fin ser una empresa referente en el segmento  y lograr una mayor especialización.</p>
                <br /><b></b>
            </div>


        </div>
    );
}

export default Quienes