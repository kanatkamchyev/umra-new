import React, { useState } from 'react'
import ajy from '../../assets/imgs/image 5.png'
import {SlCalender, SlLocationPin, SlUser} from 'react-icons/sl'
import {TbPlaneDeparture} from 'react-icons/tb'
import { RiPlaneLine } from 'react-icons/ri'
import mecca from '../../assets/imgs/mecca logo.png'
import medina from '../../assets/imgs/medina logo.png'
import lightFrame from '../../assets/imgs/Frame 5421.png'
import {CiDollar} from 'react-icons/ci'
import {BsQuestionCircle,BsBookmarkStar  ,BsHandbag} from 'react-icons/bs'
import {FaCcVisa,FaVest,FaBusAlt , FaUsers,FaPlaneArrival,FaPlaneDeparture} from 'react-icons/fa'
import {MdOutlineWaterDrop, MdOutlineBackpack} from 'react-icons/md'
import {BiIdCard} from 'react-icons/bi' 
// import {IoIosArrowDown} from 'react-icons/io'
import {IoDocumentAttachOutline,} from 'react-icons/io5'
import LeftHotel from '../../assets/imgs/image 28.png'
import RightHotel from '../../assets/imgs/image 27.png'
import './flights-book.css'


const FlightsBook = () => {
 
const [isOpen, setIsOpen] = useState(false)
const [isClose, setIsClose] = useState(true)

  return (
    <div className='Flights'>
    <div className="container">
      <div className="flights-wrapper__book">
        <div className="inner__book">
          <div className="flights__box__book">
              <div className="flights-box__inside">
                  <img src={ ajy } alt="" className='fliht-ajy' width='102' height='102'/>
                  <div className="right__side">
                      <div className="top-flights">
                      <div className="flights-tours">10 дневный тур пакет <b>Абдурахман Ажы</b></div>
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
    
        <div className="about__wrapper-tours">
            <div className="left-tours__excursion">
                <div className="include__in-tour">Что входит в тур <BsQuestionCircle /></div>
                <div className="include-tour__inside">
                    <ul>
                        <li><SlUser />Опытный Гид</li>
                        <li><FaCcVisa />Виза</li>
                        <li><FaBusAlt />Транспорт</li>
                    </ul>
                </div>
                <div className="include__in-tour">Экскурсия<BsQuestionCircle /></div>
                <div className="include-tour__inside">
                    <ul>
                        <li><SlLocationPin />Жидда</li>
                        <li><SlLocationPin />Место экскурсии</li>
                    </ul>
                </div>            
            </div>
            <div className="right-tours__excursion">
            <div className="include__in-tour">Подарок <BsQuestionCircle /></div>
                <div className="include-tour__inside">
                <ul>
                        <li><MdOutlineWaterDrop />Вода зам-зам</li>
                        <li><MdOutlineBackpack />Рюкзак</li>
                        <li><FaVest />Жилет</li>
                        <li><BsHandbag />Сумка</li>
                    </ul>
                </div>
                 <div className="include__in-tour">Документы <IoDocumentAttachOutline/></div>
                <div className="include-tour__inside">
                <ul>
                        <li><BiIdCard />Пасспорт</li>
                    </ul>
                </div>
            </div>
        </div>
      <div className="about__hotels">
        <div className="left__hotel">
            <img src={ LeftHotel } alt="" />
            <div className="hotel-lists">
                <div className="hotel__name">
                <h1>Отель Le Meredian</h1>
                </div>
                <div className="hotel__description-book">
                Расположение объекта Le Meridien Makkah находится в центре города Мекка. Кааба и Великая мечеть Мекки расположены в 5 минутах езды на автомобиле. Этот 5-звездочный отель — вариант с прекрасным расположением: Колодец Замзам находится в 0,8 км, Башни Абрадж аль-Бейт — в 5 км от него.
                <div className="hotel__description-book">
                Номера Почувствуйте себя как дома в одном из 255 номеров с кондиционером и камином. В номерах есть собственные внутренние дворики. Бесплатный беспроводной доступ в Интернет позволит вам оставаться на связи, а кабельное телевидение поможет вам развлечься. 
                </div>
                </div>
                 {  isClose && <div className="hidden__text">
                    <ul>
                        <li>круглосуточна стойка регистрации</li>
                        <li>Ванная комната для людей с ограниченными возможностями</li>
                        <li>Возможен завтрак (за дополнительную оплату)</li>
                        <li className='col-2'>Бизнес центр</li>
                        <li>Кофе/чай в местах общего пользования</li>
                        <li>Компьютерная станция</li>
                        <li>Бесплатный вай-фай</li>
                        <li>Кухня</li>
                    </ul>
                </div>}
                <div className="close__btn-li">
                    <button className='btn__read-more' onClick={()=> setIsClose (!isClose)}>{  isClose ? 'Скрыть' :'Подробнее...' }</button>
                </div>
            </div>
        </div>

        <div className="right__hotel">
            <img src={ RightHotel } alt="" />
            <div className="hotel-lists">
                <div className="hotel__name">
                <h1>Отель Rua Al Medina</h1>
                </div>
                <div className="hotel__description-book">
                Отель Rua Al Madinah расположен в городе Медина, в 80 метрах от мечети Масджид-ан-Набави. К услугам гостей номера с бесплатным Wi-Fi. Расстояние до кладбища Аль-Бакия составляет 100 метров. Стойка регистрации открыта круглосуточно.
                <div className="hotel__description-book">
                    В каждом номере установлен телевизор с плоским экраном. В номерах имеется собственная ванная комната с душем. В некоторых номерах обустроена гостиная зона, а из окон открывается частичный вид на мечеть Аль-Харам. В каждом номере установлен платяной шкаф, гости могут воспользоваться чайником...

{  isOpen && <div className='more-read'>Старый базар находится в 800 метрах от отеля Rua Al Madinah, а торговый центр Mazaya Mall — в 2,2 км. Расстояние до международного аэропорта имени принца Мухаммеда бен Абдул-Азиза составляет 14 км.

Это любимая часть города Медина среди наших гостей согласно независимым отзывам.

Парам особенно нравится расположение — они оценили проживание в этом районе для поездки вдвоем на 9,1.</div> }
                </div>
                <div className="btn-to__more">
                <button className='btn__read-more' onClick={()=> setIsOpen(!isOpen)}>   { isOpen ? 'Скрыть' : 'Подробнее...'}
                    
                      </button>

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

export default FlightsBook
