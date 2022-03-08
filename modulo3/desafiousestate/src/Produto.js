import React from "react";

const Produto = ({ dados }) => {
  return (
    <>
      <h1>{dados.nome}</h1>
      <p>{dados.preco}</p>
      <img src={dados.fotos[0].src} alt={dados.fotos.titulo} />
    </>
  );
};

export default Produto;
