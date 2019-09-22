import React, { useState, useEffect } from "react";
import "../css/Chat.css"
import {emitChat, onChat, updateChat} from "../api"

export const Chat: React.FC = () => {
  const blankArray: string[] = []
  const [input,setInput] = useState("");
  const [message,setMessage] = useState(blankArray);
  
  useEffect(() => {
    updateChat()
    onChat((err: any, record: string[]) => {
      setMessage(record);
    })
  },[setMessage])

  const changeInput = (e:any) => {
      setInput(e.target.value)
  }
  

  return (
    <div className="chat-form">
      <div className="chat-box">
      {
        message.map((word) => <div>{word}</div>)
      }
      </div>
      <form id="form" className="chat-form-submit">
        <input 
          value={input}
          onChange={changeInput}
          name="message" 
          placeholder="Message">
        </input>
        <button 
          className="send" 
          type="button"
          onClick ={() => {
            emitChat(input)
            setInput("")
          }}>
          Send
        </button>            
      </form>
    </div>
  )
}