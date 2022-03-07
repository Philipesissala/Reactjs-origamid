import React from "react";
import Titulo from "./Titulo";

const Proutos = () => {
  const produtos = [
    { nome: "Notebook", propriedades: ["16gb ram", "512gb"] },
    { nome: "Smartphone", propriedades: ["12gb ram", "128gb"] },
  ];
  return (
    <>
      <Titulo titulo="Produtos" />
      {produtos.map((produto) => (
        <div
          style={{
            border: "solid 1px",
            marginBottom: "10px",
            padding: "20px",
          }}
          key={produto.nome}
        >
          <p>{produto.nome}</p>
          <ul>
            {produto.propriedades.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default Proutos;
