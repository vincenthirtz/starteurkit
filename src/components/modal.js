import React from 'react';
import PropTypes from "prop-types";

const Modal = (props) => {
    const { children } = props
    
    return (
        <div className="modalWrap">
            <button type="button">pef</button>
            {children}
        </div>
    )
}

export default Modal;

Modal.propTypes ={
    children:PropTypes.element.isRequired
};