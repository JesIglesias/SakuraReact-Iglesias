// import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemCount from "./components/ItemCount";

function App() {
  return (
    <div className="app">
      <header className="header">
        <NavBar />
        <ItemListContainer greeting="Bienvenido a la tienda" />
        <ItemCount stock={3} initial={1} />
      </header>
    </div>
  );
}

export default App;
