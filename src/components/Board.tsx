import React, { useState } from "react";
import { Box } from "./Box";
import {
  onResetBoard,
  emitResetBoard,
  emitUpdateRound,
  onUpdateRound
} from "../api";
import "../css/Board.css";

interface TheBoard {
  name: string;
  status: boolean;
}


export const Board: React.FC<TheBoard> = ({ name, status }) => {
  const [round, setRound] = useState(1);

  return (
    <div>
      <h2>Round: {round}</h2>
      {
        //Cr.SamuraiWarm
        Array(6)
        .fill(0)
        .map((_, i) => (
          <div className="Bomb-row">
            {Array(6)
              .fill(0)
              .map((_, j) => (
                <Box pos={6 * i + j} user={name} pStatus={status} />
              ))}
          </div>
        ))
      }
      <button
        className="reset"
        onClick={() => {
          emitResetBoard();
        }}
      >
        Reset
      </button>
    </div>
  );
};
