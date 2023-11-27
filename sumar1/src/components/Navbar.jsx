import React, { useEffect } from 'react';
import { FaPhone, FaEnvelope, FaLinkedin, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

import './styles/Navbar.css';

const Navbar = () => {
    useEffect(() => {
        // Verifica si el ancho de la ventana es menor o igual a 768px (puedes ajustar este valor según tus necesidades)
        const isMobile = window.innerWidth <= 768;

        // Obtiene el enlace de Instagram
        const instagramLink = document.getElementById('instagram-link');

        // Define las URL de destino para móviles y escritorio
        const mobileInstagramURL = 'https://m.instagram.com/sumar_cba/';
        const desktopInstagramURL = 'https://www.instagram.com/sumar_cba/';

        // Asigna la URL correcta según el tipo de dispositivo
        instagramLink.href = isMobile ? mobileInstagramURL : desktopInstagramURL;
    }, []);

    return (
        <div className='container'>
            <div className='phone'>
                <FaPhone />
                +54 9 3517 66-7501
            </div>

            <div className='mail'>
                <FaEnvelope />
                <a href="mailto:comercialcba@sumarservicios.com.ar">comercialcba@sumarservicios.com.ar</a>
            </div>

            <div className='icons'>
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                <a href="https://www.facebook.com/SumarenCordoba" target="_blank">
                    <FaFacebook />
                </a>
                <a id="instagram-link" href="#" target="_blank">
                    <FaInstagram />
                </a>
            </div>
        </div>
    );
}

export default Navbar;
