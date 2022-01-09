import React from 'react'
import "./Cards.css"
import Items from "./Items"

function Cards() {
    return (
        <div className="cards">
           <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <Items
              src='/images/ctg-hilltracts.jpeg'
              text='Explore the hidden waterfall in the hilltracts of Chittagong'
              label='Adventure'
              path='/services'
            />
            <Items
              src='/images/nature-beauty-of-cox.jpeg'
              text='Experience the natural beauty of the longest beach'
              label='Mystery'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <Items
              src='/images/Rangamati.jpeg'
              text='Amazing nature to deep in'
              label='Nature'
              path='/services'
            />
            <Items
              src='/images/parlament.jpeg'
              text='The parlament building'
              label='Heritage'
              path='/products'
            />
            <Items
              src='/images/Sajek.jpeg'
              text='Take a deep breath high close to the sky'
              label='Adventure'
              path='/sign-up'
            />
          </ul>
        </div>
      </div> 
        </div>
    )
}

export default Cards
