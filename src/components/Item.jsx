import React from "react";
import { Link } from "react-router-dom";

function Item({ producto }) {
  return (
    <div className="text-center">
      <div className="card">
        <img
          src={producto.imagen}
          className="card-img-top"
          alt="{producto.producto}"
        />
        <div className="card-body">
          <h5 className="card-title">{producto.producto}</h5>
          <p className="card-text">Precio: ${producto.precio}</p>
          <Link to={`/producto/${producto.id}`} className="btn btn-primary">
            Ver más
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Item;
