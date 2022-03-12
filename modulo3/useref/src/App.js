import React from "react";

const App = () => {
  const [contamentarios, setComentarios] = React.useState([]);
  const [notificacao, setNotificacao] = React.useState(null);
  const [input, setInput] = React.useState("");

  const inputElement = React.useRef();
  const timeoutRef = React.useRef();

  function handleClick() {
    setComentarios([...contamentarios, input]);
    setInput("");
    setNotificacao("Item adicionado a lista");
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setNotificacao("");
    }, 1000);
    inputElement.current.focus();
  }
  return (
    <>
      <ul>
        {contamentarios.map((comentario, index) => (
          <li key={index}>{comentario}</li>
        ))}
      </ul>
      <input
        type="text"
        value={input}
        ref={inputElement}
        onChange={({ target }) => setInput(target.value)}
      />
      <button onClick={handleClick}>Enviar</button>
      <p>{notificacao}</p>
    </>
  );
};

export default App;
