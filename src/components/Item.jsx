import React from "react";
import { Link } from "react-router-dom";

function Item({ producto }) {
  return (
    <div className="container m-5">
      <div className="row">
        <div className=" col-12 d-flex justify-content-center text-center">
          <div className="card  border border-success p-2 mb-2 border-opacity-25 shadow ">
            <img
              src={producto.imagen}
              className="card-img-top rounded img-fluid"
              alt="{producto.producto}"
            />
            <div className="card-body card-img-overlay">
              <h5 className="card-title text-bg-dark text-white fs-5 fw-bold fst-italic">
                {producto.producto}
              </h5>
            </div>
            <div className="d-flex align-content-end">
              <Link
                to={`/producto/${producto.id}`}
                className="btn btn-success opacity-75 vw-100 mt-1"
              >
                Ver más
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
