import React from 'react'
import './Uscontact.css'
import {FiPhoneCall} from 'react-icons/fi'
import {MdOutlineLocalPostOffice} from 'react-icons/md'
import {CiLocationOn} from 'react-icons/ci'
import {AiOutlineInstagram} from 'react-icons/ai'
import {TbBrandTelegram} from 'react-icons/tb'
import {FaWhatsapp} from 'react-icons/fa'
import ZamZam from '../../assets/imgs/Ellipse 16.png'

const Uscontact = () => {
  return (
    <div className='uscontact'>
        <div className="container">
            <div className="contact-wrapper">
                <div className="left-wrapper__contact">
                    <div className="left-wrapper__inside">
                        <div className="call__us">Свяжитесь с нами</div>
                        <div className="our__workers">Оставьте ваши контакты и наши сотрудники свяжиться с вами в течение 24 часов </div>
                        <div className="us___comunication">
                            <FiPhoneCall />
                            <div className="us__nom">+996 700 600 600</div>
                        </div>
                        <div className="us___comunication">
                            <MdOutlineLocalPostOffice />
                            <div className="us__gmail">
                            unreal@outlook.com
                            </div>
                        </div>
                        <div className="us___comunication">
                            <CiLocationOn />
                            <div className="our__locate">
                            706 Campfire Ave. Meriden, CT 06450
                            </div>
                        </div>
            <div className="bottom__contac">
                        <div className="online__contact">
                            <div className="to__us">
                            <AiOutlineInstagram />
                            </div>

                            <div className="to__us">
                            <TbBrandTelegram />

                            </div>
                            <div className="to__us">
                                <FaWhatsapp />
                            </div>
                        </div> 
                        <div className="image-elipse" >
                        <img src={ZamZam} alt=""/>
                        <h1>ZamZam</h1>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="right-wrapper__contact">

                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Uscontact
