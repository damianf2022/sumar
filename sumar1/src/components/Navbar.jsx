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
                {/* <a href="mailto:"></a> */}
                comercialcba@sumarservicios.com.ar
            </div>

            <div className='icons'>
                <FaLinkedin />
                <FaFacebook />
                {/* <a href="https://www.facebook.com/SumarenCordoba" target="_blank" style="text-decoration: none; color: black;">
                </a> */}
                <FaInstagram />
                <FaTwitter />
            </div>

        </div>
    );
}

export default Navbar;