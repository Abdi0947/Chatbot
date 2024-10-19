import React from 'react';
import './chatApp.css';

const ChatApp = ({onGoBack}) => {
  return (
    <div className='chatApp'>
      <div className="chat-list">
        <div className="chat-list-header">
          <h2>Chat List</h2>
          <i className='bx bx-edit-alt new chat'></i>
        </div>
        <div className="chat-list-item active">
          <h4>Chat 20/07/2024 12:59:42 PM</h4>
          <i className='bx bx-x-circle'></i>
        </div>
        <div className="chat-list-item">
          <h4>Chat 20/07/2024 12:59:42 PM</h4>
          <i className='bx bx-x-circle'></i>
        </div>
        <div className="chat-list-item">
          <h4>Chat 20/07/2024 12:59:42 PM</h4>
          <i className='bx bx-x-circle'></i>
        </div>
      </div>
      
      <div className="chat-window">
        <div className="chat-title">
          <h3>Chat with AI</h3>
          <i className='bx bx-arrow-back arrow' onClick={onGoBack}></i>
        </div>
        
        <div className="chat">
          <div className="prompt">
            Hi, how are you doing?
            <span>12:52:51 PM</span>
          </div>
          
          <div className="response">
            Hello, I'm just a computer program, so I don't have feelings, 
            but I'm here and ready to help you. How can I assist you today?
            <span>12:52:52 PM</span>
          </div>
          
          <div className="typing">Typing...</div>
        </div>
        
        <form className='msg-form'>
          <i className='fa-solid fa-face-smile emoji'></i>
          <input className='msg-input' placeholder='Type a message.....' type='text' />
          <i className='fa-solid fa-paper-plane plane'></i>
        </form>
      </div>
    </div>
  );
}

export default ChatApp;
