import React, { useState, useEffect } from 'react';
import './styles/galery.css';

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
      imageSrc: 'https://sumarservicios.com.ar/wp-content/uploads/2020/02/ORIG_SUMAR_web_home_banner-2_V2.jpg',
      caption: 'Caption Text',
      link: 'https://sumarservicios.com.ar/torres-iluminacion-led/',
    },
    {
      imageSrc: 'https://sumarservicios.com.ar/wp-content/uploads/2020/02/ORIG_SUMAR_web_home_banner-4_V2.jpg',
      caption: 'Caption Two',
    },
    {
      imageSrc: 'https://sumarservicios.com.ar/wp-content/uploads/2020/02/ORIG_SUMAR_web_home_banner-3_V2.jpg',
      caption: 'Caption Three',
    },
  ];

  return (
    <div className="Galery-container">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`mySlides fade${index === slideIndex ? ' active' : ''}`}
        >
          <img src={slide.imageSrc} style={{ width: '100%' }} />
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

      <a className="prev" onClick={() => plusSlides(-1)}>
        &#10094;
      </a>
      <a className="next" onClick={() => plusSlides(1)}>
        &#10095;
      </a>
    </div>
  );
};

export default Galery;
