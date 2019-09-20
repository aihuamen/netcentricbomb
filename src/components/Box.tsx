import React, { useState, useEffect } from "react";
import { chooseBox, onResetBoard } from "../api";

interface TheBox {
  pos: number;
}

export const Box: React.FC<TheBox> = ({pos=69}) => {
  const [pic, setPic] = useState(process.env.PUBLIC_URL + "/YeeInfobox.png");

  const togglePic = () => {
    chooseBox(pos, (real: number) => {

      const resPic = real
        ? process.env.PUBLIC_URL + "/yajuu.jpg"
        : process.env.PUBLIC_URL + "/pepe.jpg";

    setPic(resPic);
    });
  };

  useEffect(() => {
    onResetBoard(() => {setPic(process.env.PUBLIC_URL + "/YeeInfobox.png")})
  })

  return <img src={pic} onClick={togglePic} alt="Yee" />;
};

