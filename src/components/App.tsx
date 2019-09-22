import React, { useState, useEffect } from "react";
import { subscribeToTimer, playerNumber, updatePlayer } from "../api";
import { Board } from "./Board";
import "../css/App.css";

const App: React.FC = () => {
  const [timestamp, setTimestamp] = useState("no time stamp yet");
  const [playNo, setPlayerNo] = useState(0);

  useEffect(() => {
    subscribeToTimer((err: any, interval: string) => setTimestamp(interval));
    updatePlayer();
    playerNumber((err: any, playerNumber: number) => setPlayerNo(playerNumber));
  }, [setTimestamp]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Find My Mines</h1>
        <hr />
      </header>
      <body className="App-body">
        <div className="App-game">
          <Board />
          <p>{timestamp}</p>
        </div>
        <div className="App-chat">
          <div className="header">
            <h2 style={{ color: "black" }}> Online Player: {playNo}</h2>
          </div>
          <div>1CHAT 2CHAT</div>
        </div>
      </body>
    </div>
  );
};

export default App;
