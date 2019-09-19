import React, { useState } from "react";
import {Box} from "./Box"
//import {resetBoard} from "../api"

const Board: React.FC = () => {
    const generateBoard = () => {
      const newBoard = Array(36).fill(null);
      return Array(6).fill(0).map((_,i) => (<div>{Array(6).fill(0).map((_,j) => <Box pos={6*i + j} />)}</div>))
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