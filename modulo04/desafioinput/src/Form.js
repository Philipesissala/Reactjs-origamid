import React from "react";
import Input from "./Input";

function Form() {
  const [nome, setNome] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [cep, setCep] = React.useState("");
  const [rua, setRua] = React.useState("");
  const [numero, setNumero] = React.useState("");
  const [bairro, setBairro] = React.useState("");
  const [cidade, setCidade] = React.useState("");
  const [estado, setEstado] = React.useState("");

  function handleClick(e) {
    e.preventDefault();
    console.log(e);
  }
  return (
    <form onSubmit={handleClick}>
      <label htmlFor="nome">Nome </label>
      <Input nome="nome" valor={nome} estado={setNome} />
      <br />
      <label htmlFor="email">E-mail </label>
      <Input nome="email" valor={email} estado={setEmail} tipo="email" />
      <br />
      <label htmlFor="nome">Senha </label>
      <Input
        nome="senha"
        valor={password}
        estado={setPassword}
        tipo="password"
      />
      <br />
      <label htmlFor="cep">Cep </label>
      <Input nome="cep" valor={cep} estado={setCep} />
      <br />
      <label htmlFor="rua">Rua </label>
      <Input nome="rua" valor={rua} estado={setRua} />
      <br />
      <label htmlFor="numero">Numero </label>
      <Input nome="numero" valor={numero} estado={setNumero} />
      <br />
      <label htmlFor="bairro">Bairro </label>
      <Input nome="bairro" valor={bairro} estado={setBairro} />
      <br />
      <label htmlFor="cidade">Cidade </label>
      <Input nome="cidade" valor={cidade} estado={setCidade} />
      <br />
      <label htmlFor="estado">Estado </label>
      <Input nome="estado" valor={estado} estado={setEstado} />
      <br />
      <button>Enviar</button>
    </form>
  );
}

export default Form;
