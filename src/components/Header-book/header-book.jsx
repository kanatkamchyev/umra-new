import React from 'react'
import  HeaderBackgroundImage from '../../assets/imgs/Vector-2.png'
import WrapperLogo from '../../assets/imgs/Vector.svg'
import {RiLogoutBoxRLine } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'
import './Header-book.css'

const HeaderBook = () => {

   const navigate = useNavigate()
  const HandleClick = () => {
    navigate('/')
  }
  return (
    <div className='header-book' style={{ backgroundImage: `url(${HeaderBackgroundImage })`, backgroundSize: 'cover' }}>
    <div className="container">
      <div className="header-book__wrapper">
        <div className="wrapper-home">
            <div className="wrapper-home__book-logo">
                <img src={WrapperLogo} alt="" />
            </div>
            <nav className="wrapper-home__nav-bars">
                <ul>
                    <li className='active' onClick={HandleClick}>Главная</li>
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
        </div>
      </div>
    </div>
    </div>
  )
}

export default HeaderBook
