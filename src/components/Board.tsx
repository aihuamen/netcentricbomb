import React, { useState } from "react";
import {Box} from "./Box"
import {resetBoard} from "../api"

const Board: React.FC = () => {
    const generateBoard = () => {
      //Cr.SamuraiWarm
      return Array(6).fill(0).map((_,i) => (<div>{Array(6).fill(0).map((_,j) => <Box pos={6*i + j} />)}</div>))
    };

    const [board, setBoard] = useState(generateBoard);
    const [round, setRound] = useState(1)
  
    return (
      <div >
      <h3>Round: {round}</h3>
        {board}
        {/* FIXME Fix this shit */}
        <button
          onClick={() => {
            setBoard(generateBoard);
            resetBoard((err:any,bStatus:number) => setRound(bStatus))
          }}
        >
          Reset
        </button>
      </div>
    );
  };

  export {Board}