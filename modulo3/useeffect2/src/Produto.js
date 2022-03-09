import React from "react";

const Produto = ({ produto }) => {
  return (
    <>
      <h1>Preferência: {produto.nome}</h1>
      <p>R$ {produto.preco}</p>
    </>
  );
};

export default Produto;
