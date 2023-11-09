import React from 'react';

import { FaPhone, FaEnvelope, FaLinkedin, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
// import { FaTwitter } from "react-icons/fa";

import './styles/Navbar.css';

const Navbar = () => {

    return (
        <div className='container'>

            <div className='phone'>
                <FaPhone />
                +54 9 3517 66-7501
            </div>

            <div className='mail'>
                <FaEnvelope />
                comercialcba@sumarservicios.com.ar
            </div>

            <div className='icons'>
                <FaLinkedin />
                <FaFacebook />
                <FaInstagram />
                <FaTwitter />
            </div>

        </div>
    );
}

export default Navbar;