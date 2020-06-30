/*eslint-disable*/
import React, { useState, useEffect } from "react";
import Lottie from "react-lottie";
import * as animationData from "./tasseAnim.json";

const AnimationTest = (props) => {
  const [isStopped, setIsStopped] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [toto, setToto] = useState(false);

  const playing = () => {
    setTimeout(() => {
      console.log("playing ", toto);
      setToto(!toto);
    }, 300);
  };

  useEffect(() => {
    if (toto) {
      setIsStopped(true);
    } else {
      setIsStopped(false);
    }
  }, [toto]);

  const animCoffee = {
    // container: '#coffeeContainer',
    loop: false,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  // document.addEventListener('onMouseOver', ()=>{
  //   console.log('osskour');
  // });

  return (
    <div onMouseOver={() => playing()}>
      <Lottie
        id="coffeeContainer"
        options={animCoffee}
        height={200}
        width={200}
        isStopped={isStopped}
        isPaused={isPaused}
      />
      {/* <button onClick={() => setIsPaused(true)} >paused</button>
      <button onClick={() => setIsStopped(true)} >is stopped</button>
      <button onClick={() => playing()}>play</button> */}
    </div>
  );
};

export default AnimationTest;
