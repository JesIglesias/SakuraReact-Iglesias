import productosBD from "../data/productos";
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

function getProducto() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productosBD);
    }, 2000);
  });
}

function ItemDetailContainer() {
  const [producto, setProducto] = useState([]);

  useEffect(() => {
    getProducto().then((respuestaPromise) => {
      setProducto(respuestaPromise[0]);
    });
  }, []);

  return (
    <div className="container ">
      <div className="row">
        <div className="col-md-4">
          <ItemDetail producto={producto} />;
        </div>
      </div>
    </div>
  );
}

export default ItemDetailContainer;
