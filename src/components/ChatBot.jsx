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

    const scrollRef = useRef()

    useEffect(()=>{
        scrollRef.current.scrollIntoView({behavior:"smooth"})
    })

   
    const handleSend = () => {
        setMesssages([...messages,{author:"user","message":textMessage}])
        setTextMessage('')
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
                <input type="text" placeholder="Type your message..." value={textMessage} onChange={e=>setTextMessage(e.target.value)} />
                <button onClick={handleSend}>Send</button>
            </div>
        </div>
  </div>
  )
}

export default ChatBot