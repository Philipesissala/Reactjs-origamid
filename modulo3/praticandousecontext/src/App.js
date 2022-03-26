import React from "react";
import { GlobalStorage } from "./GlobalContext";
import Contar from "./Contar";

const App = () => {
  return (
    <GlobalStorage>
      <Contar />
    </GlobalStorage>
  );
};

export default App;
