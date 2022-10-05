import React from "react";
import { useState } from "react";
import useCartContext from "../store/CartContext";
import { Link } from "react-router-dom";
import { createOrdenDeCompra } from "../data";

function Cart() {
  const { cart, removeFromCart, clearCart, calcTotalPorItem, calcTotalPrice } =
    useCartContext();

  function handleComprar() {
    const itemsComprados = cart.map((item) => ({
      producto: item.producto,
      cant: item.cant,
      precio: item.precio,
      id: item.id,
    }));

    const ordenDeCompra = {
      buyer: {
        name: "María Pérez",
        phone: "12345678",
        email: "mariaperez@mail.com",
      },
      items: itemsComprados,

      total: calcTotalPrice(),
    };
    createOrdenDeCompra(ordenDeCompra);
    clearCart();
  }

  if (cart.length === 0) {
    return (
      <div>
        <div className="m-5">
          <h4>No hay items en el carrito</h4>
          <Link to="/">Volver a Inicio</Link>
        </div>
      </div>
    );
  } else {
    return (
      <div className="m-5">
        {cart.map((itemCart) => {
          return (
            <div key={itemCart.id} className="m-3">
              <h4>{itemCart.producto}</h4>
              <h4>Cantidad: {itemCart.cant}</h4>
              <h4>${calcTotalPorItem(itemCart.id)}</h4>
              <h4>Talle:{itemCart.talle}</h4>
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
        <h4>Total a pagar: {calcTotalPrice()}</h4>
        <button onClick={clearCart}>Vaciar todo el carrito</button>
        <button onClick={handleComprar}>Comprar</button>
      </div>
    );
  }
}

export default Cart;
