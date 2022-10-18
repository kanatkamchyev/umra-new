import React from 'react'
import Answer from '../../components/Answers/answer'
import Uscontact from '../../components/ContactUS/Uscontact'
import Flights from '../../components/Flights/flights'
import Footer from '../../components/Footer/Footer'
import Hadja from '../../components/Hadja/hadja'
import Header from '../../components/Header/header'
import  Main  from '../../components/Main/main'
import Question from '../../components/Questions/question'

const HomePage = () => {
  return (
    <div className='home-page'>
        <>  
        <Header />
        <Main />
        <Flights />
        <Hadja />
        <Question />
        <Answer />
        <Uscontact />
        <Footer />
      </>
    </div>
  )
}

export default HomePage
