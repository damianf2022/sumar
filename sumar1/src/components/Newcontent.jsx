import React, { useState } from 'react';
import VideoaPortadaInicio from '../images/videos/VideoaPortadaInicio.mp4'
import './styles/newcontent.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faScrewdriver, faRetweet, faCheckSquare, faHandshake, faMoneyBillTrendUp } from '@fortawesome/free-solid-svg-icons';
import { Slide, Fade } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
import sound2 from '../../src/assets/reactanimacionsonidos_src_Assets_sound_flipCard.ogg';



const Newcontent = () => {
    const [playing, setPlaying] = useState(true);
    const [isSoundPlaying, setIsSoundPlaying] = useState(false);

    const handleMouseEnter = () => {
        setIsSoundPlaying(true);
    };

    const handleMouseLeave = () => {
        setIsSoundPlaying(false);
    };

    return (
        <div className='contentnew'>
            {/* <Fade> */}
            <div className='contenedornew-1'>
                <img src="https://scontent.fcor11-2.fna.fbcdn.net/v/t39.30808-6/325898215_745513970037791_4386854368367331220_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=zF7Yl18snFEAX_n1n8l&_nc_ht=scontent.fcor11-2.fna&oh=00_AfC0Z2ycBXpXxC8YK9GYvLUUZ-tBIM8MI02x7063utw1bQ&oe=65752C51" alt="" />
                {/* <img src="https://scontent.fcor11-2.fna.fbcdn.net/v/t1.18169-9/30711937_845675858966322_1863372273810616069_n.png?_nc_cat=103&ccb=1-7&_nc_sid=7a1959&_nc_ohc=_BxxAS4t2JEAX_aDAhg&_nc_ht=scontent.fcor11-2.fna&oh=00_AfDQJFWUtSEUX4lMP8kxoZqVvRadbren49FRTGZfA_6zgQ&oe=6575BB18" alt="imagen de logo" /> */}

                <div className='tvideo'>
                    <video
                        muted
                        src={VideoaPortadaInicio}
                        controls={playing}
                        autoPlay={playing}
                    />
                    {/* <button onClick={() => setPlaying(!playing)}>
                    {playing ? 'Pausar' : 'Reproducir'}
                </button> */}
                </div>
            </div>

            {/* </Fade> */}



            <Slide direction="right" triggerOnce delay={1500}>

                <div className='contenedornew-2'>
                    <Fade delay={2300}>
                        {/* <img className="galeria" src={galeria} alt="imagen de galeria" /> */}

                    </Fade>
                    <div className='contenedor_cardnew'onClick={onclick}>
                        <Link to="/sumar/Contacto" style={{ textDecoration: 'none', color: 'inherit' }}>
                                {isSoundPlaying && <audio autoPlay src={sound2} />}
                            <div className="objcardnew"  onClick={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                <FontAwesomeIcon className="obj-icon" icon={faRetweet} beatFade style={{ color: "#ffffff", fontSize: "30px" }} />
                                <h2  onClick={onclick}>Alquiler</h2>
                                <div className="linea-divisora"></div>

                            </div>
                        </Link>

                        <Link to="/sumar/Contacto" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <div className="objcardnew">
                                <FontAwesomeIcon className="obj-icon" icon={faMoneyBillTrendUp} beatFade style={{ color: "#ffffff", fontSize: "30px" }} />
                                <h2>Ventas</h2>
                                <div className="linea-divisora"></div>
                            </div>
                        </Link>

                        <Link to="/sumar/Contacto" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <div className="objcardnew">
                                <FontAwesomeIcon className="obj-icon" icon={faScrewdriver} beatFade style={{ color: "#ffffff", fontSize: "30px" }} />
                                <h2>Mantenimiento</h2>
                            </div>
                        </Link>
                    </div>
                </div>
            </Slide >

        </div >
    )
}

export default Newcontent