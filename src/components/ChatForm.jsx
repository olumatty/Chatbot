import React, { useRef } from 'react'

const ChatForm = () => {
    const inputRef = useRef();

    const handleFormSubmit =(e) => {
        e.preventDefault();
        const userMessage = inputRef.current.value.trim();

        console.log(userMessage)
    }

  return (
    <div>
      <form action='#' className='chat-form' onSubmit={handleFormSubmit}>
        <input type='text' useRef={inputRef} placeholder='Message...' className='message-input' required/>
        <button className='send-btn'><LuSendHorizontal/></button>
      </form>
    </div>
  )
}

export default ChatForm
