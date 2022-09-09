import React from "react";
import productos from "../data/productos";

function Item({ productos }) {
  return (
    <div>
      <h1>{productos.id}</h1>
    </div>
  );
}

export default Item;
