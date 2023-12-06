
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
                <Link to="/sumar/">
                    <img src={Logo1} alt="logo" className='logo1' />
                </Link>

                <button className='menu-button' onClick={handleOpenMenu}> </button>
                {menuOpen && <SideMenu1 />}
                {/* Renderiaa SideMenu cuando menuOpen sea true */}
            </div>

            <nav className="navbar" >
                <Link to="/sumar/">
                    <img src={Logo2} alt="logo" className='img' />
                </Link>

                <div className='menu'>
                    <Link to="/sumar/Contacto">
                        <a>Contacto</a>
                    </Link>
                    <Link to="/sumar/Instalaciones">
                        <a>Instalaciones</a>
                    </Link>

                    <Link to="/sumar/Servicios">
                        <a>Servicios</a>
                    </Link>

                    <div className="dropdown">
                        <a className="dropbtn" onClick={() => setIsOpen(!isOpen)}>
                             Productos
                        </a>
                        {isOpen && (
                            <div className="dropdown-content">
                                <div className="sub-menu">
                                    <a href="#">Grupos Electrógenos</a>
                                    <div className="sub-menu-content">
                                        <Link to="/sumar/electrogenodiesel">
                                            <a>Diesel</a>
                                        </Link>
                                        <Link to="/sumar/electrogenogas">
                                            <a>Gas</a>
                                        </Link>
                                    </div>
                                </div>

                                <div className="sub-menu">
                                    <a href="#">Torres de Iluminación</a>

                                    <div className="sub-menu-content">
                                        <Link to="/sumar/torresled" >
                                            <a>LED</a>
                                        </Link>
                                    </div>
                                </div>

                                <div className="sub-menu">
                                    <a href="#">Plataformas de Altura</a>

                                    <div className="sub-menu-content">
                                    <Link to="/sumar/BrazoArtDiesel">
                                            <a>Brazo articulado diesel</a>
                                        </Link>
                                        <Link to="/sumar/BrazoElectrico">
                                            <a>Brazo articulado eléctrico</a>
                                        </Link>
                                        <Link to="/sumar/BrazoTelescopico">
                                            <a>Brazo telescópico diesel</a>
                                        </Link>
                                        <Link to="/sumar/TijeraDiesel" >
                                            <a>Tijera todo-terreno diesel</a>
                                        </Link>
                                        <Link to="/sumar/TijeraElectrica" >
                                            <a>Tijera eléctrica</a>
                                        </Link>
                                    </div>
                                </div>
                                    <div className="sub-menu">
                                        <Link to="/sumar/Tableros">
                                            <a style={{ padding: "0px" }}>Tableros</a>
                                        </Link>
                                    </div>
                            </div>
                        )}

                    </div>
                    <Link to="/sumar/QuienesSomos">
                        <a>Quiénes somos</a>
                    </Link>
                </div>

            </nav>

        </div>
    );
}

export default Navbar2;