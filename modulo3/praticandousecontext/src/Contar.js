import React from "react";
import { Globalcontext } from "./GlobalContext";

function Contar() {
  const global = React.useContext(Globalcontext);
  return <button onClick={global.adicionar}>{global.contar}</button>;
}

export default Contar;
