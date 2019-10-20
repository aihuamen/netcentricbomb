import React, { useState, useEffect } from "react";
import { Box } from "./Box";
import { onResetBoard, gameStart, onWinner } from "../api";
import "../css/Board.css";

interface TheBoard {
  name: string;
  status: boolean;
}

export const Board: React.FC<TheBoard> = ({ name, status }) => {
  const [round, setRound] = useState(1);
  const [startGame, setStart] = useState(false);

  useEffect(() => {
    onResetBoard((err: any, round: number) => {
      setRound(round);
      setStart(false);
    });
    gameStart((err: any, foo: string) => {
      setStart(true);
    });
    onWinner((err: any, winner: string) => {
      setStart(false);
    });
  });

  return (
    <div>
      {startGame ? (
        <h3 style={{ color: "red" }}>Round: {round} Start!!</h3>
      ) : (
        <h3>Round: {round} </h3>
      )}
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
