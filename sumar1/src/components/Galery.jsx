import React, { useState } from 'react';

const Galery = ({ images }) => {

  return(
    <div>hola</div>
  )}
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const plusSlides = (n) => {
//     setCurrentSlide((prevSlide) => (prevSlide + n) % images.length);
//   };

//   const handleSlideClick = (n) => {
//     setCurrentSlide(n);
//   };

//   return (
//     <div className="container">
//       {images.map((image, index) => (
//         <div className={index === currentSlide ? 'mySlides' : 'hidden'} key={index}>
//           <div className="numbertext">
//             {index + 1} / {images.length}
//           </div>
//           <img src={image} style={{ width: '100%' }} />
//         </div>
//       ))}

//       <a className="prev" onClick={() => plusSlides(-1)}>
//         &#10094;
//       </a>
//       <a className="next" onClick={() => plusSlides(1)}>
//         &#10095;
//       </a>

//       <div className="row">
//         {images.map((image, index) => (
//           <div className="column" key={index}>
//             <img
//               className="demo cursor"
//               src={image}
//               style={{ width: '100%' }}
//               onClick={() => handleSlideClick(index)}
//               alt={`Slide ${index + 1}`}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

export default Galery;
