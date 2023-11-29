import React from 'react';
import './stylesPages/contacto.css';

const Contacto = () => {
    return (
        <div className="containerContac">

            <iframe
                title="map"
                // className="map-iframe"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2846.0749363091027!2d-64.1969541!3d-31.3350164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432997f4b840823%3A0x4debe00164afc9e8!2sPje.%20Giuliano%2C%20C%C3%B3rdoba!5e0!3m2!1sen!2sar!4v1636993018439!5m2!1sen!2sar"
                // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3371.416168777595!2d-64.3590034!3d-33.128749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95d201362a50bcdd%3A0xfc1b22d639cfa306!2sJorge%20Newbery%20330%2C%20X5800%20R%C3%ADo%20Cuarto%2C%20C%C3%B3rdoba!5e0!3m2!1sen!2sar!4v1636990635651!5m2!1sen!2sar"
                marginHeight="0"
                marginWidth="0"
                scrolling="no"
            ></iframe>


            <div className="sectionFormu">
                <h2></h2>
                <p >Por favor deje un breve mensaje con su consulta y un mail, para que nuestro equipo a la brevedad se ponga en contacto con usted.</p>
                <div className="inputName">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="tu nombre"
                    />
                </div>
                <div className="inputEmail">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="tu email"
                    />
                </div>
                <div className="inputMesage">
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        className="input-field"
                        placeholder="Your Message"
                    ></textarea>
                    <br /> <br />
                    <button className="submit-button">Button</button>
                </div>
                <p>
                </p>
            </div>
        </div>
    );
};

export default Contacto;
