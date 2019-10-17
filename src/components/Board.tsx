import React, { useState} from "react";
import { Box } from "./Box";
import { onResetBoard, emitResetBoard, emitUpdateRound, onUpdateRound } from "../api";
import "../css/Board.css";

interface TheBoard {
  name: string
}

export const Board: React.FC<TheBoard> = ({name = "null2"}) => {
  const generateBoard = () => {
    //Cr.SamuraiWarm
    return Array(6)
      .fill(0)
      .map((_, i) => (
        <div className="Bomb-row">
          {Array(6)
            .fill(0)
            .map((_, j) => (
              <Box pos={6 * i + j} user={name}/>
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
