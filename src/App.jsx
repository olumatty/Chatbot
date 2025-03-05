import React, { useState } from 'react'
import Chatboticon from './components/Chatboticon'
import { IoIosArrowDown } from "react-icons/io";
import ChatForm from './components/ChatForm';
import ChatMessage from './components/ChatMessage';

const App = () => {

  const[chatHistory, setChatHistory] = useState([]);

  const generateBotResponse = async (history) => {

    
  }
  

  return (
    <div className='container'>
      <div className="chatbot-popup">
        {/*Chatbot Header */}
        <div className="chatbot-header">
          <div className="header-info">
            <Chatboticon/>
            <h2 className="logo-text">myChatbot</h2>
          </div>
          <button> <IoIosArrowDown /></button>
        </div>

        {/*Chatbot Body */}
          <div className="chatbot-body">
            <div className="message bot-message">
              <Chatboticon/>
              <p className="message-text">
                Hey there 👋 <br/> How can I help you today ?
              </p>
            </div>

            {chatHistory.map((chat, index) => (
              <ChatMessage key ={index} chat={chat}/>
            ))}
            
            
          </div>

          {/*Chatbot Footer */}
          <div className="chat-footer">
            <ChatForm chatHistory={chatHistory} setChatHistory={setChatHistory} generateBotResponse={generateBotResponse}/>
          </div>
      </div>
    </div>
  )
}

export default App
