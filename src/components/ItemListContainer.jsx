import productosBD from "../data/productos";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

function getProductos(categoryid) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (categoryid) {
        const arrayFiltrado = productosBD.filter((producto) => {
          return producto.categoria === categoryid;
        });
        resolve(arrayFiltrado);
      } else {
        resolve(productosBD);
      }
    }, 2000);
  });
}

function ItemListContainer({ greeting }) {
  const [productos, setProductos] = useState([]);
  const { categoryid } = useParams();

  useEffect(() => {
    getProductos(categoryid).then((respuestaPromise) => {
      setProductos(respuestaPromise);
    });
  }, [categoryid]);

  return (
    // <div>
    //   <div>{greeting}</div>;
    //   <ItemList productos={productos} />;
    // </div>
    <div className="container  ">
      <div className="row">
        <div className="col-md-3">
          <ItemList productos={productos} />;
        </div>
      </div>
    </div>
  );
}

export default ItemListContainer;
