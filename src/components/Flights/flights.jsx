import React from 'react'
import './flights.css'
import ajy from '../../assets/imgs/image 5.png'
import {SlCalender} from 'react-icons/sl'
import {TbPlaneDeparture} from 'react-icons/tb'
import { RiPlaneLine } from 'react-icons/ri'
import mecca from '../../assets/imgs/mecca logo.png'
import medina from '../../assets/imgs/medina logo.png'
import lightFrame from '../../assets/imgs/Frame 5421.png'
import {FaPlaneDeparture} from 'react-icons/fa'
import {FaPlaneArrival} from 'react-icons/fa'
import {BsBookmarkStar} from 'react-icons/bs'
import {CiDollar} from 'react-icons/ci'
import {FaUsers} from 'react-icons/fa'
import {MdArrowForwardIos} from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

const Flights = () => {
    const navigate = useNavigate()
    const HandleClick =() => {
        navigate('/book')
    }

  return (
    <div className='Flights'>
      <div className="container">
        <div className="flights-wrapper">
                <div className="flights-wrapper__text">Рейсы</div>
            
            <div className="flights__box">
                <div className="flights-box__inside">
                    <img src={ ajy } alt="" className='fliht-ajy' width='102' height='102'/>
                    <div className="right__side">
                        <div className="top-flights">
                        <div className="flights-tours">10 дневный тур пакет <b>Абдурахман Ажы</b></div>
                        <div className="flights-more" onClick={HandleClick}>Подробнее  <MdArrowForwardIos /></div>
                        </div>
                     
                        <div className="flight-inspection">
                                <div className="flights-date">
                               <SlCalender size = '18' color='#125D98'/> 29.04.2022 - 06.03.2022
                                </div>
                                <div className="flight-city">
                                    <TbPlaneDeparture color=' #125D98'/>
                                    <div className="city">Osh</div>
                                </div>
                                <div className="flight-plane">
                                    <RiPlaneLine  color=' #125D98'/>
                                    <div className="flight-plane__town">
                                    Jazzera Airways
                                    </div>
                                </div>
                                <div className="flights-hotel">
                                    Отели: <img src={ mecca } alt="" />Le Meredian <img src={ medina } alt="" />Rua Al Medina
                                </div>
                                
                        </div>
                        <div className="about-flight__times">
                            <div className="flight-times__left">
                                    <div className="first-flight">
                                        <div className="osh_city">Osh</div>
                                        <FaPlaneDeparture color=' #125D98'/> 
                                        <img src={lightFrame} alt="" />
                                        <FaPlaneArrival color=' #125D98'/>
                                        <div className="osh_city">Djidda</div>
                                        <FaPlaneDeparture color=' #125D98'/> 
                                        <img src={lightFrame} alt="" />
                                        <FaPlaneArrival color=' #125D98'/>
                                        <div className="osh_city">Medina</div>
                                    </div>
                                    <div className="first-flight">
                                        <div className="osh_city">Medina</div>
                                        <FaPlaneDeparture color=' #125D98'/> 
                                        <img src={lightFrame} alt="" />
                                        <FaPlaneArrival color=' #125D98'/>
                                        <div className="osh_city">Djidda</div>
                                        <FaPlaneDeparture color=' #125D98'/> 
                                        <img src={lightFrame} alt="" />
                                        <FaPlaneArrival color=' #125D98'/>
                                        <div className="osh_city">Osh</div>
                                    </div>
                                </div>
                        <div className="flight-times__right">
                            <div className="standart-flight">
                                <BsBookmarkStar size='28' color='#125D98' className='mark-star'/>
                                <div className="standart">Standart</div>
                            </div>
                            <div className="flight-price">
                                <CiDollar size='24' color='#125D98'/>
                                <div className="price" >1650$</div>
                            </div>
                            <div className="other-people">
                               
                                <div className="people_icon"> 
                                <FaUsers className='users-people' color='#125D98' size='24'/>
                                <div className="many__place">  Оставшийся места: </div>    
                                <b>+19</b>
                                </div>
                                <button className="book">Забронировать</button>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div className="flights__box">
                <div className="flights-box__inside">
                    <img src={ ajy } alt="" className='fliht-ajy' width='102' height='102'/>
                    <div className="right__side">
                    <div className="top-flights">
                        <div className="flights-tours">10 дневный тур пакет <b>Абдурахман Ажы</b></div>
                        <div className="flights-more" onClick={HandleClick}>Подробнее  <MdArrowForwardIos /></div>
                        </div>
                        <div className="flight-inspection">
                                <div className="flights-date">
                               <SlCalender size = '18' color='#125D98'/> 29.04.2022 - 06.03.2022
                                </div>
                                <div className="flight-city">
                                    <TbPlaneDeparture color=' #125D98'/>
                                    <div className="city">Osh</div>
                                </div>
                                <div className="flight-plane">
                                    <RiPlaneLine  color=' #125D98'/>
                                    <div className="flight-plane__town">
                                    Jazzera Airways
                                    </div>
                                </div>
                                <div className="flights-hotel">
                                    Отели: <img src={ mecca } alt="" />Le Meredian <img src={ medina } alt="" />Rua Al Medina
                                </div>
                                
                        </div>
                        <div className="about-flight__times">
                            <div className="flight-times__left">
                                    <div className="first-flight">
                                        <div className="osh_city">Osh</div>
                                        <FaPlaneDeparture color=' #125D98'/> 
                                        <img src={lightFrame} alt="" />
                                        <FaPlaneArrival color=' #125D98'/>
                                        <div className="osh_city">Djidda</div>
                                        <FaPlaneDeparture color=' #125D98'/> 
                                        <img src={lightFrame} alt="" />
                                        <FaPlaneArrival color=' #125D98'/>
                                        <div className="osh_city">Medina</div>
                                    </div>
                                    <div className="first-flight">
                                        <div className="osh_city">Medina</div>
                                        <FaPlaneDeparture color=' #125D98'/> 
                                        <img src={lightFrame} alt="" />
                                        <FaPlaneArrival color=' #125D98'/>
                                        <div className="osh_city">Djidda</div>
                                        <FaPlaneDeparture color=' #125D98'/> 
                                        <img src={lightFrame} alt="" />
                                        <FaPlaneArrival color=' #125D98'/>
                                        <div className="osh_city">Osh</div>
                                    </div>
                                </div>
                        <div className="flight-times__right">
                            <div className="standart-flight">
                                <BsBookmarkStar size='28' color='#125D98' className='mark-star'/>
                                <div className="standart">Standart</div>
                            </div>
                            <div className="flight-price">
                                <CiDollar size='24' color='#125D98'/>
                                <div className="price" >1650$</div>
                            </div>
                            <div className="other-people">
                               
                                <div className="people_icon"> 
                                <FaUsers className='users-people' color='#125D98' size='24'/>
                                <div className="many__place">  Оставшийся места: </div>    
                                <b>+19</b>
                                </div>
                                <button className="book">Забронировать</button>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div className="flights__box">
                <div className="flights-box__inside">
                    <img src={ ajy } alt="" className='fliht-ajy' width='102' height='102'/>
                    <div className="right__side">
                    <div className="top-flights">
                        <div className="flights-tours">10 дневный тур пакет <b>Абдурахман Ажы</b></div>
                        <div className="flights-more" onClick={HandleClick}>Подробнее  <MdArrowForwardIos /></div>
                        </div>
                        <div className="flight-inspection">
                                <div className="flights-date">
                               <SlCalender size = '18' color='#125D98'/> 29.04.2022 - 06.03.2022
                                </div>
                                <div className="flight-city">
                                    <TbPlaneDeparture color=' #125D98'/>
                                    <div className="city">Osh</div>
                                </div>
                                <div className="flight-plane">
                                    <RiPlaneLine  color=' #125D98'/>
                                    <div className="flight-plane__town">
                                    Jazzera Airways
                                    </div>
                                </div>
                                <div className="flights-hotel">
                                    Отели: <img src={ mecca } alt="" />Le Meredian <img src={ medina } alt="" />Rua Al Medina
                                </div>
                                
                        </div>
                        <div className="about-flight__times">
                            <div className="flight-times__left">
                                    <div className="first-flight">
                                        <div className="osh_city">Osh</div>
                                        <FaPlaneDeparture color=' #125D98'/> 
                                        <img src={lightFrame} alt="" />
                                        <FaPlaneArrival color=' #125D98'/>
                                        <div className="osh_city">Djidda</div>
                                        <FaPlaneDeparture color=' #125D98'/> 
                                        <img src={lightFrame} alt="" />
                                        <FaPlaneArrival color=' #125D98'/>
                                        <div className="osh_city">Medina</div>
                                    </div>
                                    <div className="first-flight">
                                        <div className="osh_city">Medina</div>
                                        <FaPlaneDeparture color=' #125D98'/> 
                                        <img src={lightFrame} alt="" />
                                        <FaPlaneArrival color=' #125D98'/>
                                        <div className="osh_city">Djidda</div>
                                        <FaPlaneDeparture color=' #125D98'/> 
                                        <img src={lightFrame} alt="" />
                                        <FaPlaneArrival color=' #125D98'/>
                                        <div className="osh_city">Osh</div>
                                    </div>
                                </div>
                        <div className="flight-times__right">
                            <div className="standart-flight">
                                <BsBookmarkStar size='28' color='#125D98' className='mark-star'/>
                                <div className="standart">Standart</div>
                            </div>
                            <div className="flight-price">
                                <CiDollar size='24' color='#125D98'/>
                                <div className="price" >1650$</div>
                            </div>
                            <div className="other-people">
                               
                                <div className="people_icon"> 
                                <FaUsers className='users-people' color='#125D98' size='24'/>
                                <div className="many__place">  Оставшийся места: </div>    
                                <b>+19</b>
                                </div>
                                <button className="book">Забронировать</button>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        
        </div>
      </div>
    </div>
  )
}

export default Flights;
