import React from "react";
import Lottie from 'lottie-react';
import { computer } from "../../assets";


const ComputersCanvas = () => {
  return (
    <Lottie
      animationData={computer}
      loop
      autoplay
      style={{ width: '40vw' }}
    />
  );
};

export default ComputersCanvas;
