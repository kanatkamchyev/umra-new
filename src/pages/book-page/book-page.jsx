import React from 'react'
import FlightsBook from '../../components/Flights-book/flights-book'
import Footer from '../../components/Footer/Footer'
import HeaderBook from '../../components/Header-book/Header-book'

const BookPage = () => {
  return (
    <div className='book-page'>
      <>
      
       <HeaderBook />
        <FlightsBook />
        <Footer/>
      </>
       
    </div>
  )
}

export default BookPage
