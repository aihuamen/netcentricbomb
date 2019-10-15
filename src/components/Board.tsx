import React, { useState} from "react";
import { Box } from "./Box";
import { onResetBoard, emitResetBoard, emitUpdateRound, onUpdateRound } from "../api";
import "../css/Board.css";

export const Board: React.FC = () => {
  const generateBoard = () => {
    //Cr.SamuraiWarm
    return Array(6)
      .fill(0)
      .map((_, i) => (
        <div className="Bomb-row">
          {Array(6)
            .fill(0)
            .map((_, j) => (
              <Box pos={6 * i + j} />
            ))}
        </div>
      ));
  };

  const [board, setBoard] = useState(generateBoard);
  const [round, setRound] = useState(1);

  return (
    <div>
      <h2>Round: {round}</h2>
      {board}
      <button
        className="reset"
        onClick={() => {
          setBoard(generateBoard);
          emitResetBoard();
        }}
      >
        Reset
      </button>
    </div>
  );
};
