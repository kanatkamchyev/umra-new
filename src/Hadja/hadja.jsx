import React from 'react'
import './hadja.css'
import HadjaImage from '../../assets/imgs/image 23.png'

const Hadja = () => {
  return (
    <div className='hadja'>
        <div className="container">
            <div className="hadja-wrapper">
                <div className="hadja__list">
                Достоинства Хаджа
                </div>
                <div className="hadja-wrapper__inside">
                <div className="hadja-inside__left">
                <img src={ HadjaImage } alt="" />
                </div>
                <div className="hadja-inside__right">
                <div className="hadja-right__text">
                Хадж – это обязательно паломничество мусульман, которое сродни ежегодному конгрессу уверовавших со всего мира. Хадж несёт в себе огромную пользу как мирскую, так и религиозную (духовную). О достоинствах паломничество повествуется в хадиса Пророка Мухаммада. Предлагаем вниманию читателей 24 таких изречений.
                </div>
                </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Hadja
