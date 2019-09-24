import React from "react"
import Popup from "reactjs-popup"
import "../css/LoginPopup.css"

export default () => (
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
        <form id="form" action="">
          Username: <br/>
          <input className="Inputt" type="text" name = "username"/>
          <button type="button">OK</button>
        </form>
      </div>
    </Popup>
);