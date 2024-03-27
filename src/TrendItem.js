import React from 'react'
import Button from './Button'
import './TrendItem.css'

function TrendItem({text, title, pic}) {
  return (
    <div className='trend'>
        <img src={pic} alt='trending' />
        <div className='trend-info'>
            <p>{text}</p>
            <h2>{title}</h2>
            <Button buttonStyle='btn--outline' customStyle='trend-btn'>
                SHOP NOW
            </Button>
        </div>
    </div>
  )
}

export default TrendItem