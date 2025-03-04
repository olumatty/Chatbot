import React from 'react'
import Chatboticon from './components/Chatboticon'
import { IoIosArrowDown } from "react-icons/io";
import { LuSendHorizontal } from "react-icons/lu";
import ChatForm from './components/ChatForm';

const App = () => {
  return (
    <div className='container'>
      <div className="chatbot-popup">
        {/*Chatbot Header */}
        <div className="chatbot-header">
          <div className="header-info">
            <Chatboticon/>
            <h2 className="logo-text">myChatbot</h2>
          </div>
          <button className=''><IoIosArrowDown /></button>
        </div>

        {/*Chatbot Body */}
          <div className="chatbot-body">
            <div className="message bot-message">
              <Chatboticon/>
              <p className="message-text">
                Hey there 👋 <br/> How can I help you today ?
              </p>
            </div>

            <div className="message user-message">
              <p className="message-text">
                lorem ipsum dolor, stjefehjjh hfhfj.
              </p>
            </div>
          </div>

          {/*Chatbot Footer */}
          <div className="chat-footer">
            <ChatForm/>
          </div>
      </div>
    </div>
  )
}

export default App
