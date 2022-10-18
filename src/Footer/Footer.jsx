import React from 'react'
import './Footer.css'
import FooterIcon from '../../assets/imgs/Vector-4.svg'
import {AiOutlineArrowUp} from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="container">
            <div className="footer-wrapper" >
                <div className="all__footer">
                    <div className="top-side__footer">
                        <div className="left-side__footer">
                            <div className="left__footer">
                                <div className="footer__icon" id='1'>
                                    <img src={ FooterIcon } alt="" />
                                </div>
                                <div className="footer__meriden">
                                    <div className="top__text">
                                    706 Campfire Ave. Meriden, 
                                    </div>
                                    <div className="top__text">
                                      CT 06450  
                                    </div>
                                </div>
                            </div>
                            <div className="right__footer">
                            <div className="footer__nav-bar">
                                <div className="bar__about-us">
                                    <ul>
                                        <li>Главная</li>
                                        <li>Про нас</li>
                                        <li>Ажи-Баши</li>
                                        <li>Контакты</li>
                                    </ul>
                                </div>
                                <div className="bar__online-contacts">
                                <ul>
                                        <li>Facebook</li>
                                        <li>Instagram</li>
                                        <li>Telegram</li>
                                        <li>Whatsapp</li>
                                    </ul>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="icon-arrow">
                            <AiOutlineArrowUp alt='#1'/>
                        </div>
                    </div>
                    <div className="bottom__footer">
                        <div className="left-bottom__footer">
                            <div className="number">
                            +996 700 600 600
                            </div>
                            <div className="gmail-contact">
                            contact@lift.agencyr.com
                            </div>
                        </div>
                        <div className="right-bottom__footer">
                            <div className="maket-name">
                            © 2022 ZamZam. All rights reserved.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
