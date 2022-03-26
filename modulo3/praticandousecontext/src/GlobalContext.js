import React from "react";

export const Globalcontext = React.createContext();

export function GlobalStorage({ children }) {
  const [contar, setContar] = React.useState(0);

  function adicionar() {
    setContar(contar + 1);
  }
  return (
    <Globalcontext.Provider value={{ contar, setContar, adicionar }}>
      {children}
    </Globalcontext.Provider>
  );
}
