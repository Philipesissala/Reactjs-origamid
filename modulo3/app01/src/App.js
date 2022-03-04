import React from "react";

const App = () => {
  const nome = "Filipe Sissala";
  const titulo = <h1>Primeiro app React</h1>;
  function mostrarNme(sobrenome) {
    return "Filipe " + sobrenome;
  }

  const style = {
    color: "blue",
    fontSize: "20px",
    fontFamily: "Verdana",
  };
  return (
    <>
      <a href="texto" title={nome} style={style}>
        Olá mundo meu nome é {nome}
        {titulo}
        {true ? "filipe" : "Sissala"}
        {mostrarNme("Sissala")}
        {new Date().getFullYear()}
      </a>
    </>
  );
};

export default App;
