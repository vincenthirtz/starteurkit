/*eslint-disable*/
import React, { useState, useEffect } from "react";
import Lottie from "react-lottie";
import * as animationData from "./tasseAnim.json";

const AnimationTest = (props) => {
  const [isStopped, setIsStopped] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [toto, setToto] = useState(false);

  const [scrollY, setScrollY] = useState(0);

  function logit() {
    setScrollY(window.pageYOffset);
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", logit);
      setToto(false);
    };
  });

  useEffect(() => {
    console.log("scrollY ", scrollY);
    if (scrollY > 290 && scrollY < 310) {
      playing();
    }
  }, [scrollY]);

  const playing = () => {
    setTimeout(() => {
      setToto(true);
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
    loop: false,
    autoplay: false,
    animationData: animationData,
    isClickToPauseDisabled: true,
    eventListeners: "enterFrame",
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

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
    </div>
  );
};

export default AnimationTest;
