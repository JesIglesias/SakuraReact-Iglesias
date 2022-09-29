import { getItem as getProductos } from "../data";
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
  const [producto, setProducto] = useState();
  const { itemid } = useParams();

  useEffect(() => {
    getProductos(itemid).then((respuestaPromise) => {
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
