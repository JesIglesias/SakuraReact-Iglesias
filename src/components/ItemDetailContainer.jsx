import productosBD from "../data/productos";
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

function getProducto(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const productoPedido = productosBD.find((producto) => {
        return parseInt(id) === producto.id;
      });
      resolve(productoPedido);
    }, 2000);
  });
}

function ItemDetailContainer() {
  const [producto, setProducto] = useState();
  const { itemid } = useParams();

  useEffect(() => {
    getProducto(itemid).then((respuestaPromise) => {
      setProducto(respuestaPromise);
    });
  }, [itemid]);

  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-lg-4 ">
          <ItemDetail producto={producto} />;
        </div>
      </div>
    </div>
  );
}

export default ItemDetailContainer;
