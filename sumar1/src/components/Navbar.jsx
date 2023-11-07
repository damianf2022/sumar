import React from 'react';

import { FiPhone, FiMail, FiLinkedin, FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi';

import './styles/Navbar.css';

const Navbar = () => {

    return (
        <div className='container'>

            <div className='phone'>
                <FiPhone />
                +54 9 3517 66-7501
            </div>

            <div className='mail'>
                <FiMail />
                comercialcba@sumarservicios.com.ar
            </div>

            <div className='icons'>
                <FiLinkedin />
                <FiFacebook />
                <FiInstagram />
                <FiTwitter />
            </div>

        </div>
    );
}

export default Navbar;