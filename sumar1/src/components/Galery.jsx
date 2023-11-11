import React, { useState, useEffect } from 'react';
import './styles/galery.css';
import fabricantes from '../images/fabricantes.png'
import alquiler from '../images/alquiler.png'
import tecEspecial from '../images/tecEspecial.png'
import menuicon from '../images/menuicon.png'

const Galery = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const plusSlides = (n) => {
    setSlideIndex((prevIndex) => (prevIndex + n) % 3);
  };

  useEffect(() => {
    const interval = setInterval(() => plusSlides(1), 3000);
    return () => clearInterval(interval);
  }, []);
  const slides = [
    {
      imageSrc: fabricantes,
      // caption: 'Iluminar',
      link: 'https://sumarservicios.com.ar/torres-iluminacion-led/',
    },
    {
      imageSrc: alquiler,
      // caption: 'Generador',
    },
    {
      imageSrc:tecEspecial,
      // caption: 'Elevador',
    },
  ];

  return (
    <div className="Galery-container">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`mySlides fade${index === slideIndex ? ' active' : ''}`}
        >
          <img src={slide.imageSrc}  />
          <div className="text">
            {slide.link ? (
              <a href={slide.link} style={{ textDecoration: 'none', color: 'inherit' }}>
                {slide.caption}
              </a>
            ) : (
              slide.caption
            )}
          </div>
        </div>
      ))}

      {/* <a className="prev" onClick={() => plusSlides(-1)}>
        &#10094;
      </a>
      <a className="next" onClick={() => plusSlides(1)}>
        &#10095;
      </a> */}

      <dir>

<img  className="menuicon"src= {menuicon} alt="" />

      </dir>
    </div>
  );
};

export default Galery;
