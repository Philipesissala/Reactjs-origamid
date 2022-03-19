import React from "react";
function App() {
  function operacaoLenta() {
    let c;
    for (let i = 0; i < 100000000; i++) {
      c = i + i / 10;
    }
    return c;
  }
  const valor = React.useMemo(() => operacaoLenta(), []);
  console.log(valor);

  return <></>;
}

export default App;
