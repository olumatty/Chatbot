import { useRef } from 'react'
import { LuSendHorizontal } from "react-icons/lu";

const ChatForm = ({chatHistory, setChatHistory, generateBotResponse}) => {
    const inputRef = useRef();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const userMessage = inputRef.current.value.trim();
        if(!userMessage) return;
        inputRef.current.value = "";
        
        setChatHistory((history) => [...history, {role: "user", text: userMessage} ])


        setTimeout(() => {
            setChatHistory((history) => [...history, {role: "model", text:"Thinking..."}]);
        
            generateBotResponse([...chatHistory, {role:"user", text: userMessage}]);
        
    },600);
        
    }

  return (
      <form action='#' className='chat-form' onSubmit={handleFormSubmit}>
        <input type='text' ref={inputRef} placeholder='Message...' className='message-input' required/>
        <button className='send-btn'><LuSendHorizontal/></button>
      </form>
  )
}

export default ChatForm
 ;