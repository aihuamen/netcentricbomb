import React, { useState, FormEvent, ChangeEvent } from "react"
import Popup from "reactjs-popup"
import {emitUsername} from "../api"
import "../css/LoginPopup.css"

export const LoginPopup: any = () => {
  const [input,setInput] = useState("");

  const changeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    emitUsername(input)
    setInput('')
    event.preventDefault()
  }

  return (
    <Popup
      trigger={<button className="button"> Login </button>}
      modal
      closeOnDocumentClick
    >
      <div className="Username">
        <header id="header">
          <h1>Login Page &#x1F4A3;</h1>
          <hr />
        </header>
        <form 
          id="form" 
          action="" 
          onSubmit={handleSubmit}>
          Username: <br/>
          <input 
            value={input}
            onChange={changeInput}
            className="Inputt" 
            type="text" 
            name="username">
          </input>    
          <button 
            type="button"
            onClick={() => {
              emitUsername(input)
              setInput("")
            }}>
            OK
          </button>
        </form>
      </div>
    </Popup>
  )
};