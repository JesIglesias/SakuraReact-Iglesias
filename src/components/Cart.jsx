import React from "react";
import useCartContext from "../store/CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const { cart, removeFromCart, clearCart, cantInCart } = useCartContext();

  if (cart.length === 0) {
    return (
      <div className="m-5">
        <h4>No hay items en el carrito</h4>
        <Link to="/">Volver a Inicio</Link>
      </div>
    );
  } else {
    return (
      <div className="m-5">
        {cart.map((itemCart) => {
          return (
            <div className="m-3">
              <h4>{itemCart.producto}</h4>
              <h4>Cantidad: {itemCart.cant}</h4>
              <h4>${itemCart.cant * itemCart.precio}</h4>
              <button
                type="button"
                className="btn btn-outline-danger"
                onClick={() => removeFromCart(itemCart.id)}
              >
                X
              </button>
            </div>
          );
        })}
        <button onClick={clearCart}>Vaciar todo el carrito</button>
      </div>
    );
  }
}

export default Cart;
