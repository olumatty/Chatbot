import React from 'react'
import Chatboticon from './components/Chatboticon'
import { IoIosArrowDown } from "react-icons/io";

const App = () => {
  return (
    <div className='container'>
      <div className="chatbot-popup">
        {/*Chatbot Header */}
        <div className="chatbot-header">
          <div className="header-info">
            <Chatboticon/>
            <h2 className="lgo-text">MyChatbot</h2>
          </div>
          <button className=''><IoIosArrowDown /></button>
        </div>

        {/*Chatbot Body */}

      </div>
    </div>
  )
}

export default App
