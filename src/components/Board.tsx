import React, { useState, useEffect } from "react";
import { Box } from "./Box";
import {
  onResetBoard,
} from "../api";
import "../css/Board.css";

interface TheBoard {
  name: string;
  status: boolean;
}

export const Board: React.FC<TheBoard> = ({ name, status }) => {
  const [round, setRound] = useState(1);

  useEffect(() => {
    onResetBoard((err: any, round: number) => {
      setRound(round)
    })
  })

  return (
    <div>
      <h3>Round: {round}</h3>
      {//Cr.SamuraiWarm
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
        ))}
    </div>
  );
};
