import React from "react";
import { GlobalContext } from "./GlobalContext";

const Produto = () => {
  const global = React.useContext(GlobalContext);
  return (
    <div>
      <button onClick={global.adicionarUm}>Contar {global.contar}</button>
    </div>
  );
};

export default Produto;
