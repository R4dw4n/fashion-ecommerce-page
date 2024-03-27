import React from 'react'
import TrendItem from './TrendItem'
import './Trends.css'

function Trends() {
  return (
    <div className='trends-container'>
        <TrendItem text='HOT ITEM' title='BUY 1 GET 1!' pic='img-8.jpg'/>
        <TrendItem text='SALE ITEM' title='UP TO 80% OFF!' pic='img-10.jpg'/> 
    </div>
  )
}

export default Trends