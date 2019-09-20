import React, { useState, useEffect } from "react";
import { subscribeToTimer, playerNumber } from "../api";
import { Board } from "./Board";

const App: React.FC = () => {
  const [timestamp, setTimestamp] = useState("no time stamp yet");
  const [playNo, setPlayerNo] = useState(0)

  useEffect(() => {
    subscribeToTimer((err: any, interval: string) => setTimestamp(interval))
    playerNumber((err: any, playerNumber: number) => setPlayerNo(playerNumber));
  }, [setTimestamp,playNo]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>My Mines</h1>
        <hr></hr>
      </header>
      <body className="App-body">
        <p>Online Player: {playNo}</p>
        <div>
          <Board />
          {timestamp}
        </div>
      </body>
    </div>
  );
};

export default App;
