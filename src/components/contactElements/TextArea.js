import React from "react";
import PropTypes from "prop-types";

export const InputField = (props) => {
  const { label } = props;

  return (
    <>
      <span className="formTitle">{label}</span>
      <input />
    </>
  );
};

export const TextArea = (props) => {
  const { label } = props;

  return (
    <>
      <span className="formTitle">{label}</span>
      <textarea label={label} placeholder="Message" />
    </>
  );
};

TextArea.propTypes = {
  label: PropTypes.string.isRequired,
};

InputField.propTypes = {
  label: PropTypes.string.isRequired,
};
