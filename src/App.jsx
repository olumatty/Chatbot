import React from 'react'
import Chatboticon from './components/Chatboticon'
import { IoIosArrowDown } from "react-icons/io";
import { LuSendHorizontal } from "react-icons/lu";

const App = () => {
  return (
    <div className='container'>
      <div className="chatbot-popup">
        {/*Chatbot Header */}
        <div className="chatbot-header">
          <div className="header-info">
            <Chatboticon/>
            <h2 className="logo-text">MyChatbot</h2>
          </div>
          <button className=''><IoIosArrowDown /></button>
        </div>

        {/*Chatbot Body */}
          <div className="chatbot-body">
            <div className="message ot-message">
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
          <div className="chat-Footer">
            <form action='#' className='chat-form'>
              <input type='text' placeholder='Message...' className='message-input' required/>
              <button className=''><LuSendHorizontal/></button>
            </form>
          </div>
      </div>
    </div>
  )
}

export default App
