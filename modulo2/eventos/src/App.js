const App = () => {
  function message(event) {
    alert("Olá mundo!");
  }
  return (
    <>
      <button onClick={message}>Clicar</button>
    </>
  );
};

export default App;