import React from "react";
import useCartContext from "../store/CartContext";

function Cart() {
  const { cart } = useCartContext();
  console.log("este es el cart", cart);

  return <h1>cart</h1>;
}

export default Cart;
