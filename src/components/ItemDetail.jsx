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
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  } else {
    return (
      <div className="container m-5 p-4">
        <div className="row">
          <div className="text-center ">
            <div className="card">
              <img
                src={producto.imagen}
                className="card-img-top"
                alt="{producto.producto}"
              />
              <div className="card-body">
                <h5 className="card-title">{producto.producto}</h5>
                <p className="card-text">Precio: ${producto.precio}</p>
                <p className="card-text">{producto.descripcion}</p>
                <select className="form-select my-4 border">
                  <option selected>Seleccioná tu talle</option>
                  <option value="1">S</option>
                  <option value="2">M</option>
                  <option value="3">L</option>
                  <option value="4">XL</option>
                  <option value="5">XXL</option>
                </select>

                {isInCart ? (
                  <Link to={"/cart"} className="btn btn-primary">
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
