import React, { useState, useEffect } from "react";
import { chooseBox, onResetBoard, scoreUpdate } from "../api";

interface TheBox {
  pos: number;
}

export const Box: React.FC<TheBox> = ({ pos = 69 }) => {
  const [pic, setPic] = useState(process.env.PUBLIC_URL + "image/unClick");

  const togglePic = () => {
    chooseBox(pos, (real: number) => {
      console.log(real);
      const resPic = real
        ? process.env.PUBLIC_URL + "image/bomb"
        : process.env.PUBLIC_URL + "image/tiles";

      if (real === 1) {
        scoreUpdate();
      }
      setPic(resPic);
    }); 
  };

  useEffect(() => {
    onResetBoard(() => {
      setPic(process.env.PUBLIC_URL + "image/unClick");
    });
  });

  return <img src={pic} onClick={togglePic} alt="Tiles" />;
};
