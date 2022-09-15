import React from "react";
import productos from "../data/productos";
import ItemCount from "./ItemCount";

function ItemDetail({ producto }) {
  return (
    <div className="text-center">
      {/* <p className="text-uppercase fs-5 fw-bold">
        Producto: {producto.producto}
      </p>
      <div>
        <img src={producto.imagen} alt={producto.producto} />
      </div>
      <p className="text-uppercase">Precio: ${producto.precio}</p>
      <p className="text-uppercase ">Stock:{producto.stock}</p>
      <hr />
      <br /> */}
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
          <select class="form-select my-4 border">
            <option selected>Seleccioná tu talle</option>
            <option value="1">S</option>
            <option value="2">M</option>
            <option value="3">L</option>
            <option value="3">XL</option>
            <option value="3">XXL</option>
          </select>
          <ItemCount stock={producto.stock} initial={1} />
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
