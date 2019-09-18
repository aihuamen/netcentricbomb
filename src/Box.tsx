import React, { useState } from "react";

interface TheBox {
    isBomb?: boolean;
  }
  
  const Box: React.FC<TheBox> = props => {
    const [pic, setPic] = useState(process.env.PUBLIC_URL + "/YeeInfobox.png");
  
    const togglePic = () => {
      const yeey = props.isBomb
        ? process.env.PUBLIC_URL + "/yajuu.jpg"
        : process.env.PUBLIC_URL + "/pepe.jpg";
      setPic(yeey);
    };
  
    return <img src={pic} onClick={togglePic} alt="Yee" />;
  };
  
  Box.defaultProps = {
    isBomb: false
  };

  export {Box}