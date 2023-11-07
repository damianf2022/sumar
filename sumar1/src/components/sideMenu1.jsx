import React, { useState } from 'react';
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
                <a href="#home">Quiénes somos</a>


                <div className="dropdown2">
                  <a className="dropbtn" onClick={handleOpenMenu}>
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

                      <div className="sub-menu2">
                        <a href="#">Torres de Iluminacion</a>

                        <div className="sub-menu-content2">
                          <a href="#">LED</a>
                        </div>
                      </div>

                      <div className="sub-menu2">
                        <a href="#">Plataformas de Altura</a>

                        <div className="sub-menu-content2">
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

                <a href="#home">Servicios</a>
                <a href="#home">Instalaciones</a>
                <a href="#home">Contacto</a>


              </div>
            </div>
          </div>
        </div>
      ) : (
        <span onClick={openNav}><LuMenu className='menu-button' /></span>
        // style={{ fontSize: '30px', cursor: 'pointer' }}
      )}
    </div>
  );
}

export default SideMenu;
