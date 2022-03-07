import Sessao from "./Sessao";
import Form from "./Form/Form";
const App = () => {
  return (
    <>
      <Sessao cor="red" texto="1º paragrafo" />
      <Sessao cor="blue" texto="2º paragrafo" />
      <Sessao cor="orange" classe="texto5" texto="5º paragrafo">
        Olá meu nome é filipe sissala e eu estou a aprender reactjs com a
        Origamid
      </Sessao>
      <Form/>
    </>
  );
};

export default App;
