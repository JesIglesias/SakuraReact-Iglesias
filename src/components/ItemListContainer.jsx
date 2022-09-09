import productosBD from "../data/productos";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";

function getProductos() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productosBD);
    }, 2000);
  });
}

function ItemListContainer({ greeting }) {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    getProductos().then((respuestaPromise) => {
      console.log(respuestaPromise);
      setProductos(respuestaPromise);
    });
  }, []);

  return (
    <div>
      <div>{greeting}</div>;
      <ItemList productos={productos} />;
    </div>
  );
}

export default ItemListContainer;
