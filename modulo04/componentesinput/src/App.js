import React from "react";
import Input from "./Form/Input";
import Select from "./Form/Select";

function App() {
  const [nome, setNome] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [produto, setProduto] = React.useState("");
  return (
    <form>
      <Input label="Nome" id="nome" value={nome} setValue={setNome} />
      <Input label="Email" id="email" value={email} setValue={setEmail} />
      <Select
        options={["Notebook", "Smartphone", "Tablet"]}
        value={produto}
        setValue={setProduto}
      />
    </form>
  );
}

export default App;
