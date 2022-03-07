import React from "react";
const App = () => {
  const filmes = [
    { nome: "Game of Thrones", ano: 1996 },
    { nome: "Clash of Kings", ano: 1998 },
    { nome: "Storm of Swords", ano: 2000 },
  ];
  return (
    <ul>
      {filmes
        .filter(({ ano }) => ano >= 1998)
        .map(({ nome, ano }) => (
          <li key={nome}>
            {nome},{ano}
          </li>
        ))}
    </ul>
  );
};

export default App;
