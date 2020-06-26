/*eslint-disable*/
import React, { useState } from "react";
import Lottie from "react-lottie";
import * as animationData from "../../img/tasseAnim.json";

const AnimationTest = (props) => {
  const [isStopped, setIsStopped] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const buttonStyle = {
    display: "block",
    margin: "10px auto",
  };

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <Lottie options={defaultOptions} height={200} width={200} isStopped={isStopped} isPaused={isPaused} />
      {/* <button style={buttonStyle} onClick={() => (setIsStopped = !isStopped)}>
        stop/play
      </button>
      <button style={buttonStyle} onClick={() => (setIsPaused = !isPaused)}>
        pause
      </button> */}
    </div>
  );
};

export default AnimationTest;
