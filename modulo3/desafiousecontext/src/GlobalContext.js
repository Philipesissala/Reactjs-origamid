import React from "react";

export const GlobalContext = React.createContext();

export function StorageContext({ children }) {
  const [produtos, setProdutos] = React.useState(null);

  function limparDados() {
    setProdutos(null);
  }

  React.useEffect(() => {
    fetch("https://ranekapi.origamid.dev/json/api/produto/")
      .then((response) => response.json())
      .then((json) => setProdutos(json))
      .catch((err) => {
        console.error("Erro ao tentar carregar dados");
      });
  }, []);

  return (
    <GlobalContext.Provider value={{ produtos,limparDados }}>
      {children}
    </GlobalContext.Provider>
  );
}
