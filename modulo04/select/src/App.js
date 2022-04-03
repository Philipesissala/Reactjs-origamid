import React from "react";
function App() {
  const [select, setSelect] = React.useState("");
  return (
    <form>
      <select
        name="cursos"
        id="cursos"
        value={select}
        onChange={({ target }) => setSelect(target.value)}
      >
        <option disabled value="">Selecione</option>
        <option value="Javascript">Javascript</option>
        <option value="Nodejs">Nodejs</option>
        <option value="Reactjs">Reactjs</option>
        <option value="React Native">React Native</option>
      </select>
      {select}
    </form>
  );
}

export default App;
