import React from "react";

const Radio = ({ options, id, value, setValue }) => {
  return (
    <>
      {options.map((option) => (
        <label key={option}>
          <input
            type="radio"
            value={option}
            name={id}
            checked={option === value}
            onChange={({ target }) => setValue(target.value)}
          />
          {option}
        </label>
      ))}
    </>
  );
};

export default Radio;
