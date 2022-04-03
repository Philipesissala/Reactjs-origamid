import React from "react";

function App() {
  const [genero, setGenero] = React.useState("");
  function handleChange({ target }) {
    setGenero(target.value);
  }
  return (
    <form>
      <label htmlFor="">
        <input
          type="radio"
          name="genero"
          value="Masculino"
          onChange={handleChange}
        />{" "}
        Masculino
      </label>
      <label htmlFor="">
        <input
          type="radio"
          name="genero"
          value="Feminino"
          onChange={handleChange}
        />{" "}
        Feminino
      </label>

      {genero}
    </form>
  );
}

export default App;
