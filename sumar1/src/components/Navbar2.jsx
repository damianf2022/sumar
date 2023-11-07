
import { useState } from 'react';
import Logo1 from '../images/logo1.png'
import Logo2 from '../images/sumar2.png'
import { FiMenu } from 'react-icons/fi';
import SideMenu1 from './sideMenu1'


import './styles/Navbar2.css';


function Navbar2() {

    const [isOpen, setIsOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleOpenMenu = () => {
        setMenuOpen(true);
    }


    return (
        <div>

            <div className='imgmovil'>
                <img src={Logo1} alt="logo" className='logo1' />
                <button className='menu-button' onClick={handleOpenMenu}>
                    {/* <FiMenu className='menu-icon' /> */}
                </button>
                {menuOpen && <SideMenu1 />} {/* Renderiza SideMenu cuando menuOpen sea true */}

            </div>
            <nav className="navbar" >
                <img src={Logo2} alt="logo" className='img' />

                <div className='menu'>
                    <a href="#home">Contacto</a>
                    <a href="#home">Instalaciones</a>
                    <a href="#home">Servicios</a>

                    <div className="dropdown">
                        <a className="dropbtn" onClick={() => setIsOpen(!isOpen)}>
                            Productos
                        </a>
                        {isOpen && (
                            <div className="dropdown-content">
                                <div className="sub-menu">
                                    <a href="#">Grupos Electrogenos</a>

                                    <div className="sub-menu-content">
                                        <a href="#">Diesel</a>
                                        <a href="#">Gas</a>
                                    </div>
                                </div>

                                <div className="sub-menu">
                                    <a href="#">Torres de Iluminacion</a>

                                    <div className="sub-menu-content">
                                        <a href="#">LED</a>
                                    </div>
                                </div>

                                <div className="sub-menu">
                                    <a href="#">Plataformas de Altura</a>

                                    <div className="sub-menu-content">
                                        <a href="#">Brazo articulado diesel</a>
                                        <a href="#">Brazo telescópico diesel</a>
                                        <a href="#">Tijera todo-terreno diesel</a>
                                        <a href="#">Tijera eléctrica</a>
                                    </div>
                                </div>
                                <a href="#">Tableros</a>
                            </div>
                        )}

                    </div>
                    <a href="#home">Quiénes somos</a>
                </div>

            </nav>

        </div>
    );
}

export default Navbar2;