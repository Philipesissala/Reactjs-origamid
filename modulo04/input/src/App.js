import React from 'react';

function App() {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    console.log(event);
  }
  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="nome"
          value={nome}
          onChange={(event) => setNome(event.target.value)}
        />
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <button>Salvar</button>
      </form>
      {nome}
    </>
  );
}

export default App;
