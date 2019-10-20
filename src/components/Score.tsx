import React, { useEffect, useState } from "react";
import { User } from "./App";
import "../css/Score.css"
import { onWinner } from "../api";

interface TheScore {
  scores: User[];
}

export const Score: React.FC<TheScore> = ({scores}) => {
  const [winner, setWinner] = useState("")

  useEffect(() => {
    onWinner((err: any, winner: string) => {
      setWinner(winner)
    })
  })

  const generateName = (name: User) => {
    if(name.userName === winner)  return <p>&#x1f451; {name.userName}: {name.score}</p>
    return <p>{name.userName}: {name.score}</p>  
  }

  return (
    <div className="Score-banner">
      {scores.map(user => (
        generateName(user)
      ))}
    </div>
  )
}