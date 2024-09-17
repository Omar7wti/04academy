import React from 'react'
import "./content.css"
import { Details } from '../details/page'
import { Booking } from './../booking/page';

export const Content = () => {
  return (
    <div className='container'>
        <div className='parent'>
          <div className='details'>
            <Details />
          </div>
          <div className='booking'>
            <Booking />
          </div>
        </div>
    </div>
  )
}
