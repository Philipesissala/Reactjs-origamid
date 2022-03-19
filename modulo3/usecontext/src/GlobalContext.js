import React from "react";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [contar, setContar] = React.useState(0);

  function adicionarUm() {
    setContar(contar + 1);
  }
  return (
    <GlobalContext.Provider value={{ contar, setContar,adicionarUm }}>
      {children}
    </GlobalContext.Provider>
  );
};
