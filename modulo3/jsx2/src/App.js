import react from "react";

const Luana = {
  cliente: "Luana",
  idade: 27,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
  ],
  ativa: true,
};

const Mario = {
  cliente: "Mario",
  idade: 31,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
    { nome: "Guitarra", preco: "R$ 3500" },
  ],
  ativa: false,
};

const App = () => {
  const dados = Mario;
  const totalGastos = dados.compras;
  let total = 0;
  for (let i = 0; i < totalGastos.length; i++) {
    total += Number(totalGastos[i].preco.replace("R$ ", ""));
  }

  return (
    <>
      <p>Nome: {dados.cliente}</p>
      <p>Idade: {dados.idade}</p>
      <p>
        Situação:
        <span style={{ color: dados.ativa ? "green" : "red" }}>
          {dados.ativa == true ? " Ativo" : " Inativo"}
        </span>
      </p>
      <p>Total gasto: R$ {total}</p>
      {total > 10000 ? <p>Você está gastando muito</p> : ""}
    </>
  );
};

export default App;
