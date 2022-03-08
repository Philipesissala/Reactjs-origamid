import React from "react";
import { useState } from "react/cjs/react.production.min";

const App = () => {
  const [contar, setContar] = React.useState(0);
  const [dados, setDados] = React.useState(null);

  React.useEffect(() => {
    document.title = "Contador: " + contar;
    console.log("DIz olá");
  }, [contar]);

  React.useEffect(() => {
    fetch("https://ranekapi.origamid.dev/json/api/produto/tablet")
      .then((response) => response.json())
      .then((json) => setDados(json));
  }, []);
  return (
    <>
      {dados && (
        <div>
          <h1>{dados.nome}</h1>
          <p>R$ {dados.preco * contar}</p>
        </div>
      )}
      <button onClick={() => setContar(contar + 1)}>{contar}</button>
    </>
  );
};

export default App;
