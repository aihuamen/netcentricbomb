import React from "react";
import { User } from "./App";
import "../css/Score.css"

interface TheScore {
  scores: User[];
}

export const Score: React.FC<TheScore> = ({scores}) => {
  return (
    <div className="Score-banner">
      {scores.map(user => (
        <p>{user.userName}: {user.score}</p>
      ))}
    </div>
  )
}