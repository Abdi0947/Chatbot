import React from 'react'
import './chatbot.css'
const chatbot = ({onStartChat}) => {
  return (
    <div className='start-page'>
      <button className='start-page-btn' onClick={onStartChat}>Chat bot</button>
    </div>
  )
}

export default chatbot
