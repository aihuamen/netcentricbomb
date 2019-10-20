import React, { useState, useEffect } from "react";
import { LoginPopup } from "./LoginPopup";
import {
  subscribeToTimer,
  playerNumber,
  updatePlayer,
  onUsername,
  onScore,
  onResetBoard,
  emitCountDown,
  onCountDown,
  onPlayable,
  onWinner
} from "../api";
import { Board } from "./Board";
import { Chat } from "./Chat";
import "../css/App.css";
import { Score } from "./Score";

export interface User {
  userName: string;
  score: number;
}

const App: React.FC = () => {
  const [timestamp, setTimestamp] = useState("no time stamp yet");
  const [countdown, setCountdown] = useState(0);
  const [playNo, setPlayerNo] = useState(0);
  const [playerName, setPlayerName] = useState("null");
  const [isLogin, setLogin] = useState(false);
  const [isPlayer, setPlayerStatus] = useState(false);
  const [isPlayable, setPlayable] = useState("null");
  const [scores, setScores] = useState<User[]>([]);
  const [winner, setWinner] = useState("");
  const [notReady, setReady] = useState(true);
  const [welcome, setWelcome] = useState(true);

  useEffect(() => {
    onUsername((err: any, name: Array<any>) => {
      setPlayerName(name[0]);
      setLogin(name[1]);
      setPlayerStatus(name[2]);
    });
    subscribeToTimer((err: any, interval: string) => setTimestamp(interval));
    updatePlayer();
    playerNumber((err: any, playerNumber: number) => setPlayerNo(playerNumber));
    onScore((err: any, score: User[]) => setScores(score));
    onPlayable((err: any, playable: string) => {
      console.log(playable);
      setWelcome(false);
      setPlayable(playable);
    });
    onCountDown((err: any, count: number) => {
      setCountdown(count);
    });
    onWinner((err: any, winner: string) => {
      setWinner(winner);
    });
    onResetBoard((err: any, round: number) => {
      setReady(true);
    });
  }, [setTimestamp, setCountdown, setPlayable]);

  const clickReady = () => {
    if (notReady) {
      emitCountDown(playerName, winner);
      setReady(false);
    }
  };

  const toggleReady = () => {
    return !notReady ? (
      <div>
        <button className="Start-button" onClick={clickReady}>
          Ready &#x1f44d;
        </button>
      </div>
    ) : (
      <div>
        <button className="Start-button" onClick={clickReady}>
          Ready
        </button>
      </div>
    );
  };

  return (
    <div className="App">
      <div className="App-body">
        <div className="App-game">
          <header className="Game-header">
            <h1>&#x1F4A3; Find My Mines &#x1F4A3;</h1>
            <div>
              {isLogin ? (
                "Nickname  : " + playerName + (isPlayer ? "" : " (spectator)")
              ) : (
                <LoginPopup />
              )}
            </div>
            <hr />
          </header>
          {isLogin ? (
            welcome ? (
              <h3>Welcome {playerName}!</h3>
            ) : (
              <h2>Timer: {countdown}</h2>
            )
          ) : (
            <p></p>
          )}
          {winner === "" ? <p></p> : <h2>The winner is: {winner}</h2>}
          {isLogin ? <Score scores={scores} /> : <p></p>}
          {isLogin ? (
            <h3 style={{ background: "lightgrey" }}>
              Current turn: {isPlayable}
            </h3>
          ) : (
            <p></p>
          )}
          {isLogin ? (
            <Board name={playerName} status={playerName === isPlayable} />
          ) : (
            <h2>Please Login First</h2>
          )}

          {isPlayer ? toggleReady() : ""}
          <p>{timestamp}</p>
        </div>
        }
        <div className="App-chat">
          <header className="Chat-header">
            <h2 style={{ color: "black" }}>
              Online Player: {isLogin ? playNo : 0}
            </h2>
          </header>
          {isLogin ? (
            <Chat name={playerName} status={isPlayer} />
          ) : (
            <h2>Please Login First</h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
