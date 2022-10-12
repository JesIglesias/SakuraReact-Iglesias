import { useState } from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import useCartContext from "../store/CartContext";

function ItemDetail({ producto }) {
  const [isInCart, setIsInCart] = useState(false);
  const { addToCart } = useCartContext();

  function onAdd(count) {
    setIsInCart(true);
    addToCart(producto, count);
    console.log("agregado al cart;", producto, count);
  }

  if (!producto) {
    return (
      <div class="text-center">
        <div className="spinner-border text-success m-5" role="status">
          <span className="visually-hidden ">Loading...</span>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container m-3 p-3">
        <div className="row justify-content-evenly">
          <div className=" col-6 text-center">
            <div className="card border border-success p-2 mb-2 border-opacity-25 shadow ">
              <img
                src={producto.imagen}
                className="card-img-top rounded img-fluid"
                alt="{producto.producto}"
              />
              <div className="card-body">
                <h5 className="card-title text-success fs-5 fw-bold fst-italic">
                  {producto.producto}
                </h5>
                <p className="card-text fw-bold">${producto.precio}</p>
                <p className="card-text">{producto.descripcion}</p>

                {isInCart ? (
                  <Link to={"/cart"} className="btn btn-success opacity-75">
                    Ir al carrito
                  </Link>
                ) : (
                  <ItemCount stock={producto.stock} initial={1} onAdd={onAdd} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ItemDetail;
