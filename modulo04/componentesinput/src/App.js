import React from "react";
import Checkbox from "./Form/Checkbox";
import Input from "./Form/Input";
import Radio from "./Form/Radio";
import Select from "./Form/Select";

function App() {
  const [nome, setNome] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [produto, setProduto] = React.useState("");
  const [cores, setCores] = React.useState("");
  const [frutas, setFrutas] = React.useState("");
  const [comida, setComida] = React.useState([]);
  return (
    <form>
      <Input label="Nome" id="nome" value={nome} setValue={setNome} />
      <Input label="Email" id="email" value={email} setValue={setEmail} />
      <Select
        options={["Notebook", "Smartphone", "Tablet"]}
        value={produto}
        setValue={setProduto}
      />
      <h2>Cores</h2>
      <Radio
        options={["Azul", "Vermelho"]}
        id="cores"
        value={cores}
        setValue={setCores}
      />
      <h2>Frutas</h2>
      <Radio
        options={["Maça", "Banana", "Pera", "Morango", "Ananás", "Limão"]}
        id="frutas"
        value={frutas}
        setValue={setFrutas}
      />{" "}
      <h2>Checkbox</h2>
      <Checkbox
        options={["Arroz", "Feijão", "batatas", "carne","Fígado"]}
        values={comida}
        setValue={setComida}
      />
    </form>
  );
}

export default App;
