import React from 'react'
import './main.css'
import  ZamzamLogo  from '../../assets/imgs/Vector-3.svg'
import {AiOutlineInstagram}  from 'react-icons/ai'
import{ TbBrandTelegram }from 'react-icons/tb'
import {BsWhatsapp} from 'react-icons/bs'
import LeftArab from '../../assets/imgs/arab-png 1.png'

const Main = () => {
  return (
    <div className='main'>
      <div className="container">
        <div className="main-wrapper">
            <div className="main-wrapper__left">
            <div className="main-wrapper__zam-zam">
            <div className="zamzam-inside">
            <img src={ ZamzamLogo } alt="" />
            <div className="main-wrapper__online-contacts">
            <div className="main-contacts__radius">
                <AiOutlineInstagram className='main__online-radius'/>
            </div>
            <div className="main-contacts__radius">
                <TbBrandTelegram className='main__online-radius'/>
            </div>
            
            <div className="main-contacts__radius">
                <BsWhatsapp className='main__online-radius'/>
            </div>
            </div>
            </div>
          
            </div>
             
            </div>
             <div className="main-wrapper__arab">
            <img src={LeftArab} alt="" />
            </div>
            <div className="main-wrapper__right">
                <div className="main-wrapper__right-inside">
                    <div className="right-inside__turist-reality">
                    Один из самых лучших туристических агенств чтобы  воплатить  ваши мечты в реальность
                    </div>
                    <div className="right-inside__hotel-place">
                    В STANDART пакете основная разница, отличающийся от других пакетов это расположение отелей  Чем дальше отель расположен от Каабы, тем дешевле обойдется пакет. Программа включает весь пакет услуг, кроме питание.
                    </div>
                    <div className="right-inside__bars">
                    <div className="right-inside__left-bar">
                            <div className="left-bar__list"> <b>1</b> Отель </div>
                            <div className="left-bar__list"> <b>2</b> Сомолет </div>
                            <div className="left-bar__list"> <b>3</b> Виза </div>
                    </div>
                    <div className="right-inside__right-bar">
                            <div className="right-bar__list"><b>4</b>Тур пакеты</div>
                            <div className="right-bar__list"><b>5</b>Доп.услуги</div>
                            <div className="right-bar__list"><b>6</b>Спец.туры</div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Main
