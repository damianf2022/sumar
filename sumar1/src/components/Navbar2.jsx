
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo1 from '../images/logo1.png'
import Logo2 from '../images/sumar2.png'
import SideMenu1 from './sideMenu1'


import './styles/Navbar2.css';


function Navbar2() {

    const [isOpen, setIsOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(true);

    const handleOpenMenu = () => {
        setMenuOpen(true);
    }


    return (
        <div>

            <div className='imgmovil'>
                <Link to="/sumar/home">
                    <img src={Logo1} alt="logo" className='logo1' />
                </Link>

                <button className='menu-button' onClick={handleOpenMenu}> </button>
                {menuOpen && <SideMenu1 />}
                {/* Renderiza SideMenu cuando menuOpen sea true */}
            </div>

            <nav className="navbar" >
                <Link to="/sumar/home">
                    <img src={Logo2} alt="logo" className='img' />
                </Link>

                <div className='menu'>
                    <a href="/sumar/Contacto">Contacto</a>
                    <a href="/sumar/Instalaciones">Instalaciones</a>
                    <a href="/sumar/Servicios">Servicios</a>

                    <div className="dropdown">
                        <a className="dropbtn" onClick={() => setIsOpen(!isOpen)}>
                            Productos
                        </a>
                        {isOpen && (
                            <div className="dropdown-content">
                                <div className="sub-menu">
                                    <a href="#">Grupos Electrogenos</a>
                                    <div className="sub-menu-content">
                                        <a href="/sumar/electrogenodiesel">Diesel</a>
                                        <a href="/sumar/electrogenogas">Gas</a>
                                    </div>
                                </div>

                                <div className="sub-menu">
                                    <a href="/sumar/">Torres de Iluminacion</a>

                                    <div className="sub-menu-content">
                                        <a href="/sumar/torresled">LED</a>
                                    </div>
                                </div>

                                <div className="sub-menu">
                                    <a href="#">Plataformas de Altura</a>

                                    <div className="sub-menu-content">
                                        <a href="/sumar/BrazoArtDiesel">Brazo articulado diesel</a>
                                        <a href="/sumar/BrazoTelescopico">Brazo telescópico diesel</a>
                                        <a href="/sumar/TijeraDiesel">Tijera todo-terreno diesel</a>
                                        <a href="/sumar/TijeraElectrica">Tijera eléctrica</a>
                                    </div>
                                </div>
                                <a href="/sumar/Tableros">Tableros</a>
                            </div>
                        )}

                    </div>
                    <a href="/sumar/QuienesSomos">Quiénes somos</a>
                </div>

            </nav>

        </div>
    );
}

export default Navbar2;