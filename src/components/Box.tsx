import React, { useState } from "react";
import {chooseBox} from "../api"

interface TheBox {
    pos:number;
  }
  
  const Box: React.FC<TheBox> = props => {
    const [pic, setPic] = useState(process.env.PUBLIC_URL + "/YeeInfobox.png");
  
    const togglePic = () => {
      /*const yeey = props.isBomb
        ? process.env.PUBLIC_URL + "/yajuu.jpg"
        : process.env.PUBLIC_URL + "/pepe.jpg";
      setPic(yeey);*/
    };
  
    return <img src={pic} onClick={chooseBox}  alt="Yee" />;
  };
  
  Box.defaultProps = {
    pos:69,
  };

  export {Box}