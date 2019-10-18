import React, { useState, useEffect, FormEvent, ChangeEvent } from "react";
import "../css/Chat.css"
import {emitChat, onChat, updateChat} from "../api"

interface TheChat {
  name: string
  status: boolean
}

export const Chat: React.FC<TheChat> = ({ name = "null", status }) => {
  const blankArray: string[] = []
  const [input,setInput] = useState("");
  const [message,setMessage] = useState(blankArray);
  
  useEffect(() => {
    updateChat()
    onChat((err: any, record: string[]) => {
      setMessage(record);
    })
  },[setMessage])

  const changeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    emitChat(name + (status ? "" : " (spec)")+ ": " + input)
    setInput('')
    event.preventDefault()
  }
  
  return (
    <div className="chat-form">
      <div className="chat-box">
      {
        message.map((word) => <div>{word}</div>)
      }
      </div>
      <form id="form" className="chat-form-submit" onSubmit={handleSubmit}>
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
            emitChat(name + (status ? "" : " (spec)")+ ": " + input)
            setInput("")
          }}>
          Send
        </button>   
      </form>
    </div>
  )
}