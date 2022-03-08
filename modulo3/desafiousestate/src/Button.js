import React from "react";

const Button = ({ titulo, evento }) => {
  return <button onClick={evento}>{titulo}</button>;
};

export default Button;
