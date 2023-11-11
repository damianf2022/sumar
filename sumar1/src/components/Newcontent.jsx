import React from 'react'
import './styles/newcontent.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faScrewdriver, faRetweet, faCheckSquare, faHandshake, faMoneyBillTrendUp } from '@fortawesome/free-solid-svg-icons';
import equipo from '../images/equipo.png'
import icogrua from '../images/icogrua.jpg'
import { Slide, Fade } from 'react-awesome-reveal';
import galeria from '../images/galeria.png'
// icon matenimiento=<FontAwesomeIcon icon="fa-solid fa-screwdriver-wrench" />
// iconalquiler=<FontAwesomeIcon icon="fa-solid fa-retweet" />
// iconventas=<FontAwesomeIcon icon="fa-solid fa-money-bill-trend-up" />


const Newcontent = () => {
    return (
        <div className='contentnew'>
            <Fade>
                <div className='contenedornew-1'>

                    {/* <video autoPlay muted loop>
                                <source src="https://dms.licdn.com/playlist/vid/D4E05AQFZkxaNifpZvw/mp4-720p-30fp-crf28/0/1698934031268?e=1700280000&v=beta&t=nQeBCZfGm9d4zn5FQEX1XCUbvFq-C7uQnAmXdrWH_Ww" type="video/mp4" />
                            </video> */}

                    <img src="https://scontent.fcor11-2.fna.fbcdn.net/v/t1.18169-9/30711937_845675858966322_1863372273810616069_n.png?_nc_cat=103&ccb=1-7&_nc_sid=7a1959&_nc_ohc=_BxxAS4t2JEAX_aDAhg&_nc_ht=scontent.fcor11-2.fna&oh=00_AfDQJFWUtSEUX4lMP8kxoZqVvRadbren49FRTGZfA_6zgQ&oe=6575BB18" alt="" />
                </div>
            </Fade>



            <Slide direction="right" triggerOnce>
                <div className='contenedornew-2'>
                    <Fade delay={1300}>
                    <img className="galeria" src={galeria} alt="" />

                    </Fade>
                    <div className="objcardnew">
                        <FontAwesomeIcon className="obj-icon" icon={faRetweet} beatFade style={{ color: "#ffffff", fontSize: "30px" }} />
                        <h1>Alquiler</h1>
                        <div className="linea-divisora"></div>
                    </div>

                    <div className="objcardnew">
                        <FontAwesomeIcon className="obj-icon" icon={faMoneyBillTrendUp} beatFade style={{ color: "#ffffff", fontSize: "30px" }} />
                        <h1>Ventas</h1>
                        <div className="linea-divisora"></div>
                    </div>

                    <div className="objcardnew">
                        <FontAwesomeIcon className="obj-icon" icon={faScrewdriver} beatFade style={{ color: "#ffffff", fontSize: "30px" }} />
                        <h1>Mantenimiento</h1>
                    </div>
                </div>
            </Slide>

        </div>
    )
}

export default Newcontent