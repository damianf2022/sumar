import React from 'react';
import './stylesPages/contacto.css';

const Contacto = () => {
    return (
        <section className="sectionC">
            <div className="containerContac">

                <div className='right-section'>

                    <div className="sectionMap">
                        <iframe
                            title="map"
                            className="map-iframe"
                            src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
                            frameBorder="0"
                            marginHeight="0"
                            marginWidth="0"
                            scrolling="no"
                        ></iframe>
                        <div className="sectionMapInfo">
                            <div className="sectionMaoInfoA">
                                <h2 className="title">ADDRESS</h2>
                                <p className="description">
                                    Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter
                                </p>
                            </div>
                            <div className="sectionMapInfoB">
                                <h2 className="title">EMAIL</h2>
                                <a href="mailto:example@email.com" className="text-blue-500 leading-relaxed">
                                    example@email.com
                                </a>
                                <h2 className="title mt-4">PHONE</h2>
                                <p className="description">123-456-7890</p>
                            </div>
                        </div>
                    </div>
                </div>



                <div className='left-section'>
                    <div className="sectionFormu">
                        <h2 className="text-gray-900 text-lg mb-1 font-medium title">Feedback</h2>
                        <p className="description mb-5 text-gray-600">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
                        <div className="inputName">
                            <label htmlFor="name" className="input-label">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="input-field"
                                placeholder="Your Name"
                            />
                        </div>
                        <div className="inputEmail">
                            <label htmlFor="email" className="input-label">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="input-field"
                                placeholder="Your Email"
                            />
                        </div>
                        <div className="inputMesage">
                            <label htmlFor="message" className="input-label">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                className="input-field"
                                placeholder="Your Message"
                            ></textarea>
                        </div>
                        <button className="submit-button">Button</button>
                        <p className="additional-info">
                            Chicharrones blog helvetica normcore iceland tousled brook viral artisan.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contacto;
