import React, { useState } from 'react';
import VideoaPortadaInicio from '../images/videos/VideoaPortadaInicio.mp4'
import './styles/newcontent.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faScrewdriver, faRetweet, faCheckSquare, faHandshake, faMoneyBillTrendUp } from '@fortawesome/free-solid-svg-icons';
import equipo from '../images/equipo.png'
import icogrua from '../images/icogrua.jpg'
import { Slide, Fade } from 'react-awesome-reveal';
import galeria from '../images/galeria.png'


const Newcontent = () => {
    const [playing, setPlaying] = useState(true);

    return (
        <div className='contentnew'>
            {/* <Fade> */}
            <div className='contenedornew-1'>
                <img src="https://scontent.fcor11-2.fna.fbcdn.net/v/t1.18169-9/30711937_845675858966322_1863372273810616069_n.png?_nc_cat=103&ccb=1-7&_nc_sid=7a1959&_nc_ohc=_BxxAS4t2JEAX_aDAhg&_nc_ht=scontent.fcor11-2.fna&oh=00_AfDQJFWUtSEUX4lMP8kxoZqVvRadbren49FRTGZfA_6zgQ&oe=6575BB18" alt="" />

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
                        <img className="galeria" src={galeria} alt="" />

                    </Fade>
                    <div className='contenedor_cardnew'>
                        <div className="objcardnew">
                            <FontAwesomeIcon className="obj-icon" icon={faRetweet} beatFade style={{ color: "#ffffff", fontSize: "30px" }} />
                            <h2>Alquiler</h2>
                            <div className="linea-divisora"></div>
                        </div>

                        <div className="objcardnew">
                            <FontAwesomeIcon className="obj-icon" icon={faMoneyBillTrendUp} beatFade style={{ color: "#ffffff", fontSize: "30px" }} />
                            <h2>Ventas</h2>
                            <div className="linea-divisora"></div>
                        </div>

                        <div className="objcardnew">
                            <FontAwesomeIcon className="obj-icon" icon={faScrewdriver} beatFade style={{ color: "#ffffff", fontSize: "30px" }} />
                            <h2>Mantenimiento</h2>
                        </div>
                    </div>
                </div>
            </Slide >

        </div >
    )
}

export default Newcontent