import React, { useState, useEffect } from "react";
import { LoginPopup } from "./LoginPopup";
import {
  subscribeToTimer,
  playerNumber,
  updatePlayer,
  onUsername,
  onScore
} from "../api";
import { Board } from "./Board";
import { Chat } from "./Chat";
import "../css/App.css";
import { Score } from "./Score";

export interface User {
  userName: string
  score: number
}

const App: React.FC = () => {
  const [timestamp, setTimestamp] = useState("no time stamp yet");
  const [playNo, setPlayerNo] = useState(0);
  const [playerName, setPlayerName] = useState("null");
  const [isLogin, setLogin] = useState(false);
  const [isPlayer, setPlayerStatus] = useState(true);
  const [scores, setScores] = useState<User[]>([]);

  useEffect(() => {
    onUsername((err: any, name: Array<any>) => {
      setPlayerName(name[0]);
      setLogin(name[1]);
      setPlayerStatus(name[2])
    });
    subscribeToTimer((err: any, interval: string) => setTimestamp(interval));
    updatePlayer();
    playerNumber((err: any, playerNumber: number) => setPlayerNo(playerNumber));
    onScore((err: any, score: User[]) => setScores(score))
      
  }, [setTimestamp]);

  return (
    <div className="App">
      <body className="App-body">
        <div className="App-game">
          <header className="Game-header">
            <h1>&#x1F4A3; Find My Mines &#x1F4A3;</h1>
            <div>{isLogin ? ("Username: " + playerName + (isPlayer ? "" : " (spectator)")) : <LoginPopup />}</div>
            <hr />
          </header>
          <Score scores={scores}/>
          {isLogin ? <Board name={playerName} status={isPlayer} /> : <h2>Please Login First</h2>}
          <p>{timestamp}</p>
        </div>
        <div className="App-chat">
          <header className="Chat-header">
            <h2 style={{ color: "black" }}>
              Online Player: {isLogin ? playNo : 0}
            </h2>
          </header>
          {isLogin ? <Chat name={playerName} status={isPlayer} /> : <h2>Please Login First</h2>}
        </div>
      </body>
    </div>
  );
};

export default App;
