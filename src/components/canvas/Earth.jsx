import React from "react";
import Lottie from 'lottie-react';
import { earth } from "../../assets";


const EarthCanvas = () => {
  return (
    <Lottie
      animationData={earth}
      loop
      autoplay
      style={{ width: '35vw' }}
    />
  );
};

export default EarthCanvas;
