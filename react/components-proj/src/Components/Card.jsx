import React from 'react'
import '../styles/Card.css'

const Card = (props) => {
  return (
    <div className='card'>
        <div className='card-title'>{props.heading}</div>
        <div className='card-body'>
            <div className='date'>{props.date}</div>
            <div className='content'>{props.content}</div>
        </div>

    </div>
  )
}


export default Card