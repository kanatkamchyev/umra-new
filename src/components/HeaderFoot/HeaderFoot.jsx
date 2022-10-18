import React from 'react'
import '../Header/header.css'
import  { SlCalender }  from 'react-icons/sl'
import {BsBookmarkStar} from 'react-icons/bs'
import {TbCurrencyDollar} from 'react-icons/tb'
import {AiOutlineUser} from 'react-icons/ai'
import {BiSearch} from 'react-icons/bi'

const HeaderFoot = () => {
  return (
    <div>
      <div className="wrapper-footer__inside">
            <div className="wrapper-footer__about-information">
                <div className="wrapper-begin">
                    <SlCalender size = '32'color=' #125D98'/>
                    Дата вылета
                </div>
                <div className="wrapper-date">
                <select name="" id="" className='wrapper-date__ajy'>
               <option value="" selected disabled> Фев 21 -  Мар 10 </option>
               <option value="">21 февраль</option>
               <option value="">25 февраль</option>
               <option value="">28 февраль</option>
               <option value="">3 Март</option>
               <option value="">7 Март</option>
               <option value="">10 Март</option>
             </select>
                </div>
            </div>
            <div className="wrapper-footer__about-information">
                <div className="wrapper-begin"> 
                <BsBookmarkStar  size = '32'color=' #125D98'/>
                Тур пакеты
                </div>
                <div className="wrapper-date">
                <select name="" id="" className='wrapper-date__ajy'>
               <option value="" selected disabled>эконом класс</option>
               <option value="">Бизнес</option>
               <option value="">Коморт</option>
             </select>
                </div>
            </div>
            <div className="wrapper-footer__about-information">
                <div className="wrapper-begin">
                <TbCurrencyDollar  size = '32'color=' #125D98'/>
                Цена
                </div>
                <div className="wrapper-date">
                <select name="" id="" className='wrapper-date__ajy'>
               <option value="" selected disabled>$1200 - $2200</option>
               <option value="">$1200</option>
               <option value="">$1500</option>
               <option value="">$2000</option>
               <option value="">$2200</option>
             </select>
                </div>
                
            </div>
            <div className="wrapper-footer__about-information">
                <div className="wrapper-foot">
                <div className="wrapper-end">
             <div className="wrapper-begin">
            < AiOutlineUser  size = '32'color=' #125D98'/>
            Ажи-Баши
             </div>
             <div className="wrapper-date">
             <select name="" id="" className='wrapper-date__ajy'>
               <option value="" selected>Абдурахмон</option>
               <option value="">Абдурахмон2</option>
               <option value="">Абдурахмон3</option>
               <option value="">Абдурахмон4</option>
             </select>
                </div>
                </div>
                <div className="wrapper-footer__search">
                <BiSearch className='footer_search-icon' size='28'/>
             </div>
              </div>
              </div>  
              
            </div>
    </div>
  )
}

export default HeaderFoot
