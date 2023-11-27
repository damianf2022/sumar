import React from 'react';
import { Link } from 'react-router-dom';

import { FaPhone, FaEnvelope, FaLinkedin, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

import './styles/Navbar.css';

const Navbar = () => {

    return (
        <div className='container'>

            <div className='phone'>
                <FaPhone />
                {/* <a href="https://api.whatsapp.com/send/?phone=5493517667501&text&type=phone_number&app_absent=0">
                </a> */}
                +54 9 3517 66-7501
            </div>

            <div className='mail'>
                <FaEnvelope />
                <a href="mailto:comercialcba@sumarservicios.com.ar">comercialcba@sumarservicios.com.ar</a>
                {/* comercialcba@sumarservicios.com.ar */}
            </div>

            <div className='icons'>

                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>

                <a href="https://www.facebook.com/SumarenCordoba" target="_blank">
                    <FaFacebook />
                </a>
                <a href="https://www.instagram.com/sumar_cba/" target="_blank">
                    <FaInstagram />

                </a>
                {/* <a href="https://www.facebook.com/SumarenCordoba" target="_blank">

                    <FaTwitter />
                </a> */}

            </div>

        </div>
    );
}

export default Navbar;