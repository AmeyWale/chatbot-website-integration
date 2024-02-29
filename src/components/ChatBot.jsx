import React, { useEffect, useRef, useState } from 'react'

let initialState = [
    {
        author:"bot",
        message:"Hello! How can I assist you today?"
    },
    {
        author:"user",
        message:"Sure! Can you provide more details about your query?"
    }
]

function ChatBot() {

    const [messages, setMesssages] = useState(initialState)
    const [textMessage, setTextMessage] = useState('')

    const inputRef = useRef()
    const scrollRef = useRef()

    useEffect(()=>{
        inputRef.current.focus()
        scrollRef.current.scrollIntoView({behavior:"smooth"})
    })
   
    const handleSend = (e) => {
        e.preventDefault()
        setMesssages([...messages,{author:"user","message":textMessage}])
        setTextMessage('')
        setTimeout(() => {
            setMesssages([...messages,{author:"user","message":textMessage},{author:"bot","message":"We will get back to you shortly!!!"}])   
        }, 1000);
        
    }

  return (
    <div className="chatbot">
        <div className="chat-container">
            <div className="chat-messages">

                {messages.map((item,index)=>{

                    return <div key={index} className={`message ${item.author === 'bot' ? 'received'  : 'sent'}`}>
                        <p>{item.message}</p>
                    </div>
                })}

                <div ref={scrollRef}></div>

            </div>
            
            <div className="chat-input">
                
                <form onSubmit={handleSend} style={{width:"100%"}}>
                    <input ref={inputRef} type="text" placeholder="Type your message..." value={textMessage} onChange={e=>setTextMessage(e.target.value)} />
                    <button type='submit' onClick={handleSend}>Send</button>
                </form>
                    
            </div>
        </div>
  </div>
  )
}

export default ChatBot