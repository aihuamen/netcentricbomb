import React, { useState, useEffect } from "react";
import { LoginPopup } from "./LoginPopup"
import { subscribeToTimer, playerNumber, updatePlayer, onUsername } from "../api";
import { Board } from "./Board";
import { Chat } from "./Chat"
import "../css/App.css";

const App: React.FC = () => {
  const [timestamp, setTimestamp] = useState("no time stamp yet");
  const [playNo, setPlayerNo] = useState(0);
  const [playerName, setPlayerName] = useState("null")
  const [isLogin, setLogin] = useState(false)

  useEffect(() => {
    onUsername((err: any, name: Array<any>) => {
      setPlayerName(name[0])
      setLogin(name[1])
    });
    subscribeToTimer((err: any, interval: string) => setTimestamp(interval));
    updatePlayer();
    playerNumber((err: any, playerNumber: number) => setPlayerNo(playerNumber));
  }, [setTimestamp]);

  return (
    <div className="App">
      <body className="App-body">
        <div className="App-game">
          <header className="Game-header">
            <h1>&#x1F4A3; Find My Mines &#x1F4A3;</h1>
            <div>
              {isLogin ? "Username: " + playerName : <LoginPopup />}
            </div>
            <hr />
          </header>
          {isLogin ? <Board /> : <h2>Please Login First</h2>}
          <p>{timestamp}</p>
        </div>
        <div className="App-chat">
          <header className="Chat-header">
            <h2 style={{ color: "black" }}>Online Player: {isLogin ? playNo : 0}</h2>
          </header>
          {isLogin ? <Chat /> : <h2>Please Login First</h2>}
        </div>
      </body>
    </div>
  );
};

export default App;
