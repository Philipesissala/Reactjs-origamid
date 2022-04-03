import React from "react";

function Input({ nome, valor, estado, tipo }) {
  return (
    <input
      type={tipo ? tipo : "text"}
      name={nome}
      id={nome}
      value={valor}
      onChange={({ target }) => estado(target.value)}
    />
  );
}

export default Input;
