import React, { useState, useEffect } from "react";
import { chooseBox, onResetBoard, onBox, scoreUpdate, getScore } from "../api";

interface TheBox {
  pos: number;
  user: string;
  pStatus: boolean
}

export const Box: React.FC<TheBox> = ({ pos = 69, user, pStatus }) => {
  const [pic, setPic] = useState(process.env.PUBLIC_URL + "image/unClick");

  useEffect(() => {
    onResetBoard(() => {
      setPic(process.env.PUBLIC_URL + "image/unClick");
    });
    onBox((err: any, res: Array<any>) => {
      if (res && pos === res[0]) {
        const resPic = res[1]
          ? process.env.PUBLIC_URL + "image/bomb"
          : process.env.PUBLIC_URL + "image/tiles";

        if (res[1] && user === res[2]) {
          scoreUpdate(res[2]);
          getScore();
        }
        setPic(resPic);
      }
    });
  }, [setPic,pos,user]);

  const togglePic = () => {
    if(pStatus && pic===process.env.PUBLIC_URL + "image/unClick"){
      chooseBox(pos, user);
    }
  };

  return <img src={pic} onClick={togglePic} alt="Tiles" />;
};
