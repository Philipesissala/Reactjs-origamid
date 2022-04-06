import React from "react";

const Input = ({ label, id, value, setValue }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        name={id}
        id={id}
        value={value}
        onChange={({ target }) => setValue(target.value)}
      />
    </>
  );
};

export default Input;
