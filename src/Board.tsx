import React, { useState } from "react";
import {Box} from "./Box"

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
      return Array(6).fill(0).map((_,i) => (<div>{Array(6).fill(0).map((_,j) => eachBomb(6*i+j,newBoard))}</div>))
    };
    const [bomb, setBomb] = useState(generateBoard);
  
    return (
      <div>
        {bomb}
        {/* FIXME Fix this shit */}
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

  export {Board}