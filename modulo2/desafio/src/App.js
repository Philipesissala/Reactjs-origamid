import Header from "./Header";
import Home from "./Home";
import Produtos from "./Proutos";

const App = () => {
  const { pathname } = window.location;
  return (
    <>
      <Header />
      {pathname === "/produtos" ? <Produtos /> : <Home />}
    </>
  );
};

export default App;
