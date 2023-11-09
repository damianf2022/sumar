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
              <z>Quiénes somos</z>
                </Link>


                <div className="dropdown2">
                  <z className="dropbtn" onClick={handleOpenMenu}>
                    Productos
                  </z>
                  {isOpen && (
                    <div className="dropdown-content">
                      <div className="sub-menu">
                        <z href="#">Grupos Electrogenos</z>

                        <div className="sub-menu-content">
                          <z href="/sumar/electrogenodiesel">Diesel</z>
                          <z href="/sumar/electrogenogas">Gas</z>
                        </div>
                      </div>

                      <div className="sub-menu2">
                        <z href="#">Torres de Iluminacion</z>

                        <div className="sub-menu-content2">
                          <z href="/sumar/torresled">LED</z>
                        </div>
                      </div>

                      <div className="sub-menu2">
                        <z href="#">Plataformas de Altura</z>

                        <div className="sub-menu-content2">
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
                <z href="/sumar/Servicios">Servicios</z>
                <z href="/sumar/Instalaciones">Instalaciones</z>
                <z href="/sumar/Contacto">Contacto</z>

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
