import { getAllItems as getProductos, getItemsByCategory } from "../data";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

function ItemListContainer({ greeting }) {
  const [productos, setProductos] = useState([]);
  const { categoryid } = useParams();

  useEffect(() => {
    if (categoryid === undefined) {
      getProductos().then((respuestaPromise) => {
        setProductos(respuestaPromise);
      });
    } else {
      getItemsByCategory(categoryid).then((respuestaPromise) => {
        setProductos(respuestaPromise);
      });
    }
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
