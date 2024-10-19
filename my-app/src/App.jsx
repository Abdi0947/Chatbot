import React, { useState } from 'react'
import Chatbot from './components/chatbot';
import ChatApp from './components/chatApp';
const App = () => {
  const[ischatting,setIsChatting]=useState(false);

  const handleStartChat = ()=>{
    setIsChatting(true);
  }
  const hnadleGoBack = () =>{
    setIsChatting(false);
  }
  return (
    <div className='container'>
      {ischatting ? <ChatApp onGoBack={hnadleGoBack}/> 
      : <Chatbot onStartChat={handleStartChat}/>}
    </div>
  )
}

export default App
