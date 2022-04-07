import React from "react";

const Checkbox = ({ options, values, setValue }) => {
  function handleChange({ target }) {
    if (target.checked) {
      setValue([...values, target.value]);
    } else {
      setValue(values.filter((value) => value !== target.value));
    }
  }
  return (
    <>
      {options.map((option) => (
        <label key={option}>
          {option}
          <input
            type="checkbox"
            value={option}
            name="teste"
            checked={values.includes(option)}
            onChange={handleChange}
          />
        </label>
      ))}
    </>
  );
};

export default Checkbox;
