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

  useEffect(() => {
    subscribeToTimer((err: any, interval: string) => setTimestamp(interval));
    updatePlayer();
    onUsername((err: any, name: string) => setPlayerName(name));
    playerNumber((err: any, playerNumber: number) => setPlayerNo(playerNumber));
  }, [setTimestamp]);

  return (
    <div className="App">
      <body className="App-body">
        <div className="App-game">
          <header className="Game-header">
            <h1>&#x1F4A3; Find My Mines &#x1F4A3;</h1>
            <div>
              <LoginPopup /> Username: {playerName}
            </div>
            <hr />
          </header>
          <Board />
          <p>{timestamp}</p>
          
        </div>
        <div className="App-chat">
          <header className="Chat-header">
            <h2 style={{ color: "black" }}>Online Player: {playNo}</h2>
          </header>
          <Chat />
        </div>
      </body>
    </div>
  );
};

export default App;
