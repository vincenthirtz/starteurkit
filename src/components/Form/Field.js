import React from "react";
import PropTypes from "prop-types";
import { useField } from "@formiz/core";

const MyField = (props) => {
  const { errorMessage, id, isValid, isPristine, isSubmitted, resetKey, setValue, value } = useField(props);
  const { label, type, required } = props;
  const [isFocused, setIsFocused] = React.useState(false);
  const showError = !isValid && (!isPristine || isSubmitted);

  return (
    <form className={`form-left demo-form-group ${showError && !isFocused ? "is-error" : ""}`} >
        <label htmlFor={id}>
          {label}
          {required && " *"}
        </label>
        <input
          key={resetKey}
          id={id}
          type={type || "text"}
          value={value || ""}
          className="contactStyle"
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          aria-invalid={!isValid}
          aria-describedby={!isValid ? `${id}-error` : null}
        />
        {showError && (
          <div id={`${id}-error`} className="demo-form-feedback">
            {errorMessage}
          </div>
        )}
    </form>
  );
};

export default MyField;

MyField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  required: PropTypes.string.isRequired,
};
