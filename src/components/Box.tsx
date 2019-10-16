import React, { useState, useEffect } from "react";
import { chooseBox, onResetBoard, onBox, scoreUpdate } from "../api";

interface TheBox {
  pos: number;
}

export const Box: React.FC<TheBox> = ({ pos = 69 }) => {
  const [pic, setPic] = useState(process.env.PUBLIC_URL + "image/unClick");

  const togglePic = () => {
    chooseBox(pos)
  };

  useEffect(() => {
    onResetBoard(() => {
      setPic(process.env.PUBLIC_URL + "image/unClick");
    });
    onBox((err: any, res: number[]) => {
      if(res && pos == res[0]){
        const resPic = res[1]
          ? process.env.PUBLIC_URL + "image/bomb"
          : process.env.PUBLIC_URL + "image/tiles";

        if (res && res[1] === 1) {
          scoreUpdate();
        }
        setPic(resPic);
      }
    })
  },[setPic]);

  return <img src={pic} onClick={togglePic} alt="Tiles" />;
};
