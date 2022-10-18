import React from 'react'
import './answer.css'
import {AiOutlinePlus} from 'react-icons/ai'

const Answer = () => {
  return (
    <div className='answer'>
        <div className="container">
            <div className="answer-wrapper">
                <div className="answer-wrapper__inside">
                    <div className="answer-inside__first-box">
                        <h1>01</h1>
                        <div className="first-box__inside">
                            <div className="trip">
                            Могу ли поехать на Умру с Российской или Китайской вакциной от COVID-19?
                            </div>
                            <div className="add__icon">
                                <AiOutlinePlus className='icon__to-add' size='14'/>
                            </div>
                        </div>
                    </div>
                    <div className="answer-inside__first-box">
                        <h1>02</h1>
                        <div className="inside-right__box">
                            <div className="top__box">
                                <div className="trip">
                                Что входит в программу тура?
                                </div>
                                <div className="add__icon">
                                <AiOutlinePlus className='icon__to-add' size='14'/>

                                </div>
                            </div>
                            <div className="inside-bottom__box">
                            Паломники могут выбрать программу, исходя из своих финансовых возможностей. Принципиальная разница между пакетами состоит в ценах проживание. Чем дальше отель расположен от Каабы, и чем ниже уровень обслуживания в гостинице, тем дешевле обойдется пакет. Программа включает весь пакет услуг. С нашей стороны вы получите оформление визы для посещения Саудовской Аравии в посольстве королевства в Бишкеке, 2-разовое питание по типу шведского стола и проживание в гостиницах европейского уровня. Стоимость авиабилетов на самолет также входит в программу тура. Нашими надежными партнерами выступают «Turkish Airlines» и «FlyDubai». Мы обеспечиваем поездки на трансфере до гостиницы и обратно на автобусах повышенной комфортабельности, организацию переездов между городами Медина и Мекка и сопровождение опытными гидами, любящими свою работу и хорошо знающими правила пребывания в арабской стране.
                            </div>
                        </div>
                    </div>
                    <div className="answer-inside__first-box">
                        <h1>03</h1>
                        <div className="first-box__inside">
                            <div className="trip">
                            Что мне делать в случае возникновения проблем в Саудовской Аравии?
                            </div>
                            <div className="add__icon">
                                <AiOutlinePlus className='icon__to-add' size='14'/>
                            </div>
                        </div>
                    </div>
                    <div className="answer-inside__first-box">
                        <h1>04</h1>
                        <div className="first-box__inside">
                            <div className="trip2">
                            Я гражданин Казахстана или РФ,  могу ли поехать на Умру с Вами?
                            </div>
                            <div className="add__icon">
                                <AiOutlinePlus className='icon__to-add' size='14'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Answer
