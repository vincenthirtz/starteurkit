import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Cancel from "../img/images/cancel";
import ModalHook from "./ModalHook";
import OutsideModal from "./CloseModal";

const Modal = (props) => {
  const { children } = props;
  const [modalHook, setModalHook] = ModalHook.useModalHook();

  const handleClickOutside = () => {
    setModalHook(false);
  };

  useEffect(() => {
    if (modalHook) {
      const bodyHTML = document.getElementsByTagName("body")[0];
      const bodyModal = document.getElementsByClassName("modalWrap")[0];
      if (bodyHTML && bodyHTML.style && bodyModal && bodyModal.style) {
        bodyHTML.style.overflow = "hidden";
        bodyModal.style.overflow = "auto";
      }
    } else {
      const bodyHTML = document.getElementsByTagName("body")[0];
      bodyHTML.style.overflow = "auto";
    }
  }, [modalHook]);

  return (
    <div className="modalWrap">
      <div className="modalBackground">
        <div onClick={handleClickOutside}>
          <Cancel />
        </div>
        <OutsideModal>{children}</OutsideModal>
      </div>
    </div>
  );
};

export default Modal;

Modal.propTypes = {
  children: PropTypes.element.isRequired,
};
