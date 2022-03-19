import React from "react";

const App = () => {
  const [items, setItems] = React.useState([]);
  const [cont, setCont] = React.useState(0);


  function handleClick() {
    let text = document.getElementById("texto").value;
    setItems((items) => [...items, text]);
    setCont((cont) => cont + 1);
  }
  return (
    <>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
      <input type="text" id="texto" />
      <button onClick={handleClick}>{cont}</button>
    </>
  );
};

export default App;
