<<<<<<< HEAD
import React, { useState } from "react";
=======
import React, { useState, useEffect } from 'react';
import { subscribeToTimer } from './api';
>>>>>>> master

interface TheBox {
  isBomb?: boolean;
}

const Box: React.FC<TheBox> = props => {
  const [pic, setPic] = useState(process.env.PUBLIC_URL + "/YeeInfobox.png");

  const togglePic = () => {
    const yeey = props.isBomb
      ? process.env.PUBLIC_URL + "/yajuu.jpg"
      : process.env.PUBLIC_URL + "/pepe.jpg";
    setPic(yeey);
  };

  return <img src={pic} onClick={togglePic} alt="Yee" />;
};

Box.defaultProps = {
  isBomb: false
};

const Board: React.FC = () => {
  const eachBomb = (pos: number, board: Array<boolean>) => {
    if (board[pos]) {
      return <Box isBomb={true} />;
    }
    return <Box />;
  };
  const generateBoard = () => {
    const ranBomb = Math.floor(Math.random() * 36);
    const newBoard = Array(36).fill(false);
    newBoard[ranBomb] = true;
    return (
      <div>
        <div>
          {eachBomb(0, newBoard)}
          {eachBomb(1, newBoard)}
          {eachBomb(2, newBoard)}
          {eachBomb(3, newBoard)}
          {eachBomb(4, newBoard)}
          {eachBomb(5, newBoard)}
        </div>
        <div>
          {eachBomb(6, newBoard)}
          {eachBomb(7, newBoard)}
          {eachBomb(8, newBoard)}
          {eachBomb(9, newBoard)}
          {eachBomb(10, newBoard)}
          {eachBomb(11, newBoard)}
        </div>
        <div>
          {eachBomb(12, newBoard)}
          {eachBomb(13, newBoard)}
          {eachBomb(14, newBoard)}
          {eachBomb(15, newBoard)}
          {eachBomb(16, newBoard)}
          {eachBomb(17, newBoard)}
        </div>
        <div>
          {eachBomb(18, newBoard)}
          {eachBomb(19, newBoard)}
          {eachBomb(20, newBoard)}
          {eachBomb(21, newBoard)}
          {eachBomb(22, newBoard)}
          {eachBomb(23, newBoard)}
        </div>
        <div>
          {eachBomb(24, newBoard)}
          {eachBomb(25, newBoard)}
          {eachBomb(26, newBoard)}
          {eachBomb(27, newBoard)}
          {eachBomb(28, newBoard)}
          {eachBomb(29, newBoard)}
        </div>
        <div>
          {eachBomb(30, newBoard)}
          {eachBomb(31, newBoard)}
          {eachBomb(32, newBoard)}
          {eachBomb(33, newBoard)}
          {eachBomb(34, newBoard)}
          {eachBomb(35, newBoard)}
        </div>
      </div>
    );
  };
  const [bomb, setBomb] = useState(generateBoard);

  return (
    <div>
      {bomb}
      <button
        onClick={() => {
          setBomb(generateBoard);
          console.log("Reset");
        }}
      >
        Reset
      </button>
    </div>
  );
};

const App: React.FC = () => {
  const [timestamp,setTimestamp] = useState('no time stamp yet')

  useEffect(() => {subscribeToTimer((err:any,interval:string) => setTimestamp(interval))},[setTimestamp])

  return (
<<<<<<< HEAD
    <div className="App">
      <header className="App-header">
        <h1>My Mines</h1>
      </header>
=======
    <div className="App" >
      <h1 className="App-header">
        Fuck Bomb
      </h1>
>>>>>>> master
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
