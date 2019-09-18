import React, { useState, useEffect } from "react";
import { subscribeToTimer } from "./api";
import {Board} from "./Board"

const App: React.FC = () => {
  const [timestamp, setTimestamp] = useState("no time stamp yet");

  useEffect(() => {
    subscribeToTimer((err: any, interval: string) => setTimestamp(interval));
  }, [setTimestamp]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>My Mines</h1>
      </header>
      <body className="App-body">
        <div>
          <Board />
          {timestamp}
        </div>
      </body>
    </div>
  );
};

export default App;
