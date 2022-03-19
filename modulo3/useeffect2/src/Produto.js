import React from "react";

const Produto = ({ produto }) => {
  return (
    <>
      <h1>{produto.nome}</h1>
      <p>R$ {produto.preco}</p>
    </>
  );
};

export default Produto;
