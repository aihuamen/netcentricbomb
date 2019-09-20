import React, { useState, useEffect } from "react";
import {Box} from "./Box"
import {onResetBoard, emitResetBoard, emitUpdateRound, onUpdateRound} from "../api"

export const Board: React.FC = () => {
    const generateBoard = () => {
      //Cr.SamuraiWarm
      return Array(6).fill(0).map((_,i) => (<div>{Array(6).fill(0).map((_,j) => <Box pos={6*i + j} />)}</div>))
    };

    const [board, setBoard] = useState(generateBoard);
    const [round, setRound] = useState(1)
    
    useEffect(() => {
      emitUpdateRound()
      onUpdateRound((err: any, bStatuss: number) => setRound(bStatuss))
      onResetBoard((err:any,bStatus:number) => setRound(bStatus))
    })

    return (
      <div >
      <h3>Round: {round}</h3>
        {board}
        <button
          onClick={() => {
            setBoard(generateBoard);
            emitResetBoard()
          }}
        >
          Reset
        </button>
      </div>
    );
  };
