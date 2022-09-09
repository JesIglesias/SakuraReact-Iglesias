import React from "react";
import productos from "../data/productos";

function Item({ producto }) {
  return (
    <div className="text-center">
      <p className="text-uppercase fs-5 fw-bold">
        Producto: {producto.producto}
      </p>
      <p className="text-uppercase">Precio: ${producto.precio}</p>
      <p className="text-uppercase ">Stock:{producto.stock}</p>
      <hr />
      <br />
    </div>
  );
}

export default Item;
