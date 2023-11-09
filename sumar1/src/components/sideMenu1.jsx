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
              <a href>Quiénes somos</a>
                </Link>


                <div className="dropdown2">
                  <a className="dropbtn" onClick={handleOpenMenu}>
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

                      <div className="sub-menu2">
                        <a href="#">Torres de Iluminacion</a>

                        <div className="sub-menu-content2">
                          <a href="/sumar/torresled">LED</a>
                        </div>
                      </div>

                      <div className="sub-menu2">
                        <a href="#">Plataformas de Altura</a>

                        <div className="sub-menu-content2">
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
                <a href="/sumar/Servicios">Servicios</a>
                <a href="/sumar/Instalaciones">Instalaciones</a>
                <a href="/sumar/Contacto">Contacto</a>

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
