import React from "react";



export const InputField = (props) => {
    const { label } = props;

    return (
        <>
            <span className="formTitle" >{label}</span>
            <input></input>
        </>
    );
};

export const TextArea = (props) => {
    const { label } = props;

    return (
        <>
            <span className="formTitle" >{label}</span>
            <textarea label={label} placeholder={`Message`} required ></textarea >
        </>
    );
};

