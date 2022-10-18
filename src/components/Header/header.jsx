import React from 'react'
import  HeaderBackgroundImage from '../../assets/imgs/Vector-2.png'
import WrapperLogo from '../../assets/imgs/Vector.svg'
import {RiLogoutBoxRLine } from 'react-icons/ri'
import './header.css'
import HeaderFoot from '../HeaderFoot/HeaderFoot'

const Header = () => {

  return (
    <div className='header' style={{ backgroundImage: `url(${HeaderBackgroundImage })`, backgroundSize: 'cover' }}>
    <div className="container">
      <div className="header-wrapper">
        <div className="wrapper-home">
            <div className="wrapper-home__logo">
                <img src={WrapperLogo} alt="" />
            </div>
            <nav className="wrapper-home__nav-bars">
                <ul>
                    <li className='active' >Главная</li>
                    <li>Про нас</li>
                    <li>Ажи-Баши</li>
                    <li>Контакты</li>
                </ul>
            </nav>
            <div className="wrapper-home__come-in">
              Войти
              <RiLogoutBoxRLine className='wrapper-home__icon' size='25'/>
            </div>
        </div>
        <div className="wrapper-footer">
            <HeaderFoot />
        </div>
      </div>
    </div>
    </div>
  )
}

export default Header
