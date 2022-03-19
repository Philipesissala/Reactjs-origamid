import React from "react";
import Produto from "./Produto";
const App = () => {
  const [produto, setProduto] = React.useState("");

  function handleClick(event) {
    fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`
    )
      .then((response) => response.json())
      .then((json) => {
        setProduto(json);
        localStorage.setItem("Produto", json.nome);
      });
  }

  React.useEffect(() => {
    const storedProduct = localStorage.getItem("Produto");
    if(storedProduct === null) return;
    fetch(`https://ranekapi.origamid.dev/json/api/produto/${storedProduct}`)
      .then((response) => response.json())
      .then((json) => setProduto(json));
  }, []);
  return (
    <>
    <h1>Preferência: {produto.nome}</h1>
      <button onClick={handleClick}>Notebook</button>
      <button onClick={handleClick}>Smartphone</button>
      <Produto produto={produto} />
    </>
  );
};

export default App;
