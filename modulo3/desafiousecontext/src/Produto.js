import React from "react";
import { GlobalContext } from "./GlobalContext";
import ButtonLimpar from "./ButtonLimpar";

const Produto = () => {
  const global = React.useContext(GlobalContext);
  const { produtos } = global;
  if (produtos === null) return null;
  return (
    <div>
      {produtos.map((produto) => (
        <li key={produto.id}>{produto.nome}</li>
      ))}
      <ButtonLimpar />
    </div>
  );
};

export default Produto;
