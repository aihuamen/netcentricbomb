import React, { useState } from "react";
import { chooseBox } from "../api";

interface TheBox {
  pos: number;
}

const Box: React.FC<TheBox> = props => {
  const [pic, setPic] = useState(process.env.PUBLIC_URL + "/YeeInfobox.png");
  const [isBomb, setBomb] = useState(0);

  const togglePic = () => {
    chooseBox(props.pos, (err: any, real: number) => setBomb(real));

    const resPic =
      isBomb === 1
        ? process.env.PUBLIC_URL + "/yajuu.jpg"
        : process.env.PUBLIC_URL + "/pepe.jpg";

    setPic(resPic);
  };

  return <img src={pic} onClick={togglePic} alt="Yee" />;
};

Box.defaultProps = {
  pos: 69
};

export { Box };
