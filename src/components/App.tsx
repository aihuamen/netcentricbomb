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
      <body className="App-body">
        <div className="App-game">
          <header className="Game-header">
            <h1>&#x1F4A3; Find My Mines &#x1F4A3;</h1>
            <hr />
          </header>
          <Board />
          <p>{timestamp}</p>
        </div>
        <div className="App-chat">
          <header className="Chat-header">
            <h2 style={{ color: "black" }}>
             Online Player: {playNo}
             </h2>
          </header>
          <div>&#x1F6B4; Bike for Dad</div>
        </div>
      </body>
    </div>
  );
};

export default App;
