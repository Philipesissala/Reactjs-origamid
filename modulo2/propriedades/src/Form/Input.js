import React from "react";

function Input({ label, id, ...props }) {
  return (
    <>
      <p>
        <label htmlFor={id}>{label}</label>
        <input type="text" id={id} {...props} />
      </p>
    </>
  );
}

export default Input;
