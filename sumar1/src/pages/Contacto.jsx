import React, { useState } from 'react';
import './stylesPages/contacto.css';

const Contacto = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mensage: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validar campos obligatorios
        if (!formData.name || !formData.email || !formData.mensage) {
            alert('Por favor, complete todos los campos.');
            return;
        }

        try {
            setIsSubmitting(true); // Activar indicador de carga
            const response = await fetch('https://formsubmit.co/ajax/damianf2022@gmail.com', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Mensaje enviado con éxito');
                // Limpiar el formulario
                setFormData({
                    name: '',
                    email: '',
                    mensage: '',
                });
            } else {
                alert('Error al enviar el mensaje');
            }
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setIsSubmitting(false); // Desactivar indicador de carga después de la solicitud
        }
    };

    return (
        <div className="containerContac">

            <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2846.0749363091027!2d-64.1969541!3d-31.3350164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432997f4b840823%3A0x4debe00164afc9e8!2sPje.%20Giuliano%2C%20C%C3%B3rdoba!5e0!3m2!1sen!2sar!4v1636993018439!5m2!1sen!2sar"
                marginHeight="0"
                marginWidth="0"
                scrolling="no"
            ></iframe>

            <div className="sectionFormu">
                <form onSubmit={handleSubmit}>
                    <p >Por favor deje un breve mensaje con su consulta y un mail, para que nuestro equipo a la brevedad se ponga en contacto con usted.</p>
                    <div className="inputName">
                        <label htmlFor="name">Nombre</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="tu nombre"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="inputEmail">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="tu email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="inputMesage">
                        <label htmlFor="message">Mensaje</label>
                        <textarea
                            id="mensage"
                            name="mensage"
                            className="input-field"
                            placeholder="Tu Mensaje"
                            value={formData.mensage}
                            onChange={handleChange}
                        ></textarea>
                        <br /> <br />
                        <button type="submit" className="submit-button" disabled={isSubmitting}>
                            {isSubmitting ? 'Enviando...' : 'Contáctanos'}
                        </button>
                    </div>
                </form>
                <p>
                </p>
            </div>
        </div>
    );
};

export default Contacto;
