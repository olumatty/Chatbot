import React, { useEffect, useState,useRef } from 'react'
import Chatboticon from './components/Chatboticon'
import { IoIosArrowDown } from "react-icons/io";
import ChatForm from './components/ChatForm';
import ChatMessage from './components/ChatMessage';

const App = () => {

  const[chatHistory, setChatHistory] = useState([]);
  const[showChatBot, setShowChatBot] = useState(false);
  const chatBodyRef = useRef();

  const generateBotResponse = async (history) => {

    const updateHistory= (text) => {
      setChatHistory(prev => [...prev.filter(msg => msg.text !== ""), {role: "model", text}])
    }
    history = history.map(({role, text}) => ({role, parts: [{text}]}))

    const requestOptions ={
      method :"POST",
      headers : {"Content-Type": "application/json"},
      body: JSON.stringify({contents:history})
    };

    try{
      const response = await fetch(import.meta.env.VITE_API_URL, requestOptions);
      const data = await response.json();

      if(!response.ok) throw new Error (data.error.message || "something went wrong" )

      const apiResponseText = data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g,"$1").trim()
      updateHistory(apiResponseText)
    } catch(error){
      console.log(error)
    }
  };

  useEffect(()=> {
    chatBodyRef.current.scrollTo({top: chatBodyRef.current.scrollHeight, behavior :"smooth"})
  }, [chatHistory])
  

  return (
    <div className='container'>
      <button id="chatbot-toggler" onClick={() =>setShowChatbot((prev) => !prev)}>
        <span className='material-symbols-rounded'>mode_comment</span>
        <span className='material-symbols-rounded'>close</span>
      </button>
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
          <div ref={chatBodyRef} className="chatbot-body">
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
