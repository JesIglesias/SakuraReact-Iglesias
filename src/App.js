// import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div className="app">
      <header className="header">
        <NavBar />
        <ItemListContainer greeting="Bienvenido a la tienda" />
        <h1>Tienda</h1>
      </header>
    </div>
  );
}

export default App;
