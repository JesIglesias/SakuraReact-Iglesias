// import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  return (
    <div className="app">
      <header className="header">
        <NavBar />
        <ItemListContainer greeting="Bienvenido a la tienda" />

        <ItemDetailContainer />
      </header>
    </div>
  );
}

export default App;
