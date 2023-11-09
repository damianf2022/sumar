// import React from 'react';
// import { useForm } from 'react-hook-form';
// import emailjs from 'emailjs-com';
// import React, { useState } from 'react';


// const Contacto = () => {
//   const [formData, setFormData] = useState({
//     nombre: '',
//     email: '',
//     mensaje: '',
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       // Enviar los datos del formulario utilizando Email.js
//       const response = await emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_USER_ID');

//       if (response.status === 200) {
//         console.log('Formulario enviado con éxito');
//       } else {
//         console.error('Error al enviar el formulario');
//       }
//     } catch (error) {
//       console.error('Error de red:', error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Nombre:
//         <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
//       </label>

//       <label>
//         Correo electrónico:
//         <input type="email" name="email" value={formData.email} onChange={handleChange} />
//       </label>

//       <label>
//         Mensaje:
//         <textarea name="mensaje" value={formData.mensaje} onChange={handleChange}></textarea>
//       </label>

//       <button type="submit">Enviar</button>
//     </form>
//   );
// };



// export default Contacto;
