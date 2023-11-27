import React, { useEffect } from 'react';
import { FaPhone, FaEnvelope, FaLinkedin, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

import './styles/Navbar.css';

const Navbar = () => {
    useEffect(() => {
        // Verifica si el ancho de la ventana es menor o igual a 768px (puedes ajustar este valor según tus necesidades)
        const isMobile = window.innerWidth <= 768;

        // Obtiene el enlace de Instagram
        const facebookLink = document.getElementById('facebook-link');
        const twitterLink = document.getElementById('twitter-link');
        const linkedinLink = document.getElementById('linkedin-link');
        const instagramLink = document.getElementById('instagram-link');

        // Define las URL de destino para móviles y escritorio
        const mobileFacebookURL = 'https://m.facebook.com/SumarenCordoba';
        const desktopFacebookURL = 'https://www.facebook.com/SumarenCordoba';

        const mobileLinkedinURL = 'https://www.linkedin.com/company/sumar-servicios-industriales-srl/';
        const desktopLinkedinURL = 'https://www.linkedin.com/company/sumar-servicios-industriales-srl/';

        const mobileInstagramURL = 'https://m.instagram.com/sumar_cba/';
        const desktopInstagramURL = 'https://www.instagram.com/sumar_cba/';

        const mobileTwitterURL = 'https://twitter.com/SrlSumar?s=09';
        const desktopTwitterURL = 'https://twitter.com/SrlSumar?s=09';




        // Asigna la URL correcta según el tipo de dispositivo
        facebookLink.href = isMobile ? mobileFacebookURL : desktopFacebookURL;
        linkedinLink.href = isMobile ? mobileLinkedinURL : desktopLinkedinURL;
        instagramLink.href = isMobile ? mobileInstagramURL : desktopInstagramURL;
        twitterLink.href = isMobile ? mobileTwitterURL : desktopTwitterURL;

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
                <a href="#" target="_blank" rel="noopener noreferrer" id='linkedin-link'>
                    <FaLinkedin />
                </a>
                <a href="#" target="_blank" id='facebook-link'>
                    <FaFacebook />
                </a>
                <a id="instagram-link" href="#" target="_blank">
                    <FaInstagram />
                </a>

                <a id="twitter-link" href="#" target="_blank">
                    <FaTwitter/>
                </a>
            </div>
        </div>
    );
}

export default Navbar;
