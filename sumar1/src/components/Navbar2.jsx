
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
                {/* Renderiza SideMenu cuando menuOpen sea true */}
            </div>

            <nav className="navbar" >
                <Link to="/sumar/">
                    <img src={Logo2} alt="logo" className='img' />
                </Link>

                <div className='menu'>
                    <z href="/sumar/Contacto">Contacto</z>
                    <z href="/sumar/Instalaciones">Instalaciones</z>
                    <z href="/sumar/Servicios">Servicios</z>

                    <div className="dropdown">
                        <z className="dropbtn" onClick={() => setIsOpen(!isOpen)}>
                            Productos
                        </z>
                        {isOpen && (
                            <div className="dropdown-content">
                                <div className="sub-menu">
                                    <z href="#">Grupos Electrogenos</z>
                                    <div className="sub-menu-content">
                                        <Link to="/sumar/electrogenodiesel">
                                        <z>Diesel</z>
                                        </Link>
                                        <z href="/sumar/electrogenogas">Gas</z>
                                    </div>
                                </div>

                                <div className="sub-menu">
                                    <z href="/sumar/">Torres de Iluminacion</z>

                                    <div className="sub-menu-content">
                                        <z href="/sumar/torresled">LED</z>
                                    </div>
                                </div>

                                <div className="sub-menu">
                                    <z href="#">Plataformas de Altura</z>

                                    <div className="sub-menu-content">
                                        <z href="/sumar/BrazoArtDiesel">Brazo articulado diesel</z>
                                        <z href="/sumar/BrazoTelescopico">Brazo telescópico diesel</z>
                                        <z href="/sumar/TijeraDiesel">Tijera todo-terreno diesel</z>
                                        <z href="/sumar/TijeraElectrica">Tijera eléctrica</z>
                                    </div>
                                </div>
                                <z href="/sumar/Tableros">Tableros</z>
                            </div>
                        )}

                    </div>
                    <z href="/sumar/QuienesSomos">Quiénes somos</z>
                </div>

            </nav>

        </div>
    );
}

export default Navbar2;