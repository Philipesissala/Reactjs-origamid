import React from "react";
import Produto from "./Produto";
import {StorageContext } from "./GlobalContext";
function App() {
  return (
    <StorageContext>
      <Produto />
    </StorageContext>
  );
}

export default App;
