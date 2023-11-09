import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LuPanelRightClose, LuMenu } from 'react-icons/LU';

import './styles/sideMenu.css';

function SideMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsOpen(true);
  }


  function closeNav() {
    setMenuOpen(false);
  }

  function openNav() {
    setMenuOpen(true);
  }

  return (
    <div>
      {menuOpen ? (
        <div>
          <button className="closebtn" onClick={closeNav}>
            {<LuPanelRightClose className='menu-panel' />}
          </button>

          <div className='sidenav1'>
            <div className='menu-side'>
              <div className='menu2'>
                <Link to="/sumar/QuienesSomos">
                  <a>Quiénes somos</a>
                </Link>


                <div className="dropdown2">
                  <a className="dropbtn" onClick={handleOpenMenu}>
                    Productos
                  </a>
                  {isOpen && (
                    <div className="dropdown-content2">
                      <div className="sub-menu">
                        <a href="#">Grupos Electrogenos</a>

                        <div className="sub-menu-content">
                          <Link to="/sumar/electrogenodiesel"></Link>
                          <a >Diesel</a>
                          <Link to="/sumar/electrogenogas"></Link>
                          <a>Gas</a>
                        </div>
                      </div>

                      <div className="sub-menu2">
                        <a href="#">Torres de Iluminacion</a>

                        <div className="sub-menu-content2">
                          <Link to="/sumar/torresled">
                            <a >LED</a>
                          </Link>
                        </div>
                      </div>

                      <div className="sub-menu2">
                        <a href="#">Plataformas de Altura</a>

                        <div className="sub-menu-content2">
                          <Link to="/sumar/BrazoArtDiesel">
                            <a >Brazo articulado diesel</a>
                          </Link>
                          <Link to="/sumar/BrazoTelescopico">
                            <a>Brazo telescópico diesel</a>
                          </Link>
                          <Link to="/sumar/TijeraDiesel">
                            <a >Tijera todo-terreno diesel</a>
                          </Link>
                          <Link to="/sumar/TijeraElectrica">
                            <a >Tijera eléctrica</a>
                          </Link>

                        </div>
                      </div>
                      <Link to="/sumar/Tableros">
                        <a >Tableros</a>
                      </Link>
                    </div>
                  )}

                </div>
                <Link to="/sumar/Servicios">
                  <a>Servicios</a>
                </Link>
                <Link to="/sumar/Instalaciones">
                  <a>Instalaciones</a>
                </Link>
                <Link to="/sumar/Contacto">
                  <a>Contacto</a>
                </Link>


              </div>
            </div>
          </div>
        </div>
      ) : (
        <span onClick={openNav}><LuMenu className='menu-button' /></span>
      )}
    </div>
  );
}

export default SideMenu;
