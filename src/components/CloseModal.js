import React, { useRef, useEffect } from "react";
import ModalHook from "./ModalHook";

/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutsideAlerter(ref) {
  const [, setModalHook] = ModalHook.useModalHook();

  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setModalHook(false);
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

/**
 * Component that alerts if you click outside of it
 */
export default function OutsideModal(props) {
  /* eslint-disable*/
  const { children } = props;
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  return <div ref={wrapperRef}>{children}</div>;
}
