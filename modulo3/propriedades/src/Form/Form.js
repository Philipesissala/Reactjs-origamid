import React from "react";
import Input from "./Input";
import Button from "./Button";

function Form() {
  return (
    <>
      <form action="">
        <Input id="1" label="E-mail" required placeholder="Email"/>
        <Input id="2" type="password" label="Password" placeholder="Senha"/>
        <Button title="Logar" />
      </form>
    </>
  );
}

export default Form;
