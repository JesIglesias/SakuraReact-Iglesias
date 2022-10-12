import React from "react";

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
      <div className="m-3">
        <h4 className="p-3">No hay productos en el carrito</h4>
        <Link to="/" className="p-3 text-decoration-none text-secondary">
          Volver a Inicio
        </Link>
      </div>
    );
  } else {
    return (
      <div className="m-2 p-4">
        <table className=" table table-bordered">
          <thead>
            <tr>
              <th scope="col" className="table-active">
                Producto
              </th>
              <th scope="col" className="table-active">
                Cantidad
              </th>
              <th scope="col" className="table-active">
                Precio
              </th>
              <th scope="col" className="table-active">
                Eliminar
              </th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {cart.map((itemCart) => {
              return (
                <div key={itemCart.id} className="m-3">
                  <tr>
                    <th scope="row"></th>
                    <td>
                      <h4 className="text-success fs-5 fw-semibold fst-italic">
                        {itemCart.producto}
                      </h4>
                    </td>
                    <td>
                      <h4>{itemCart.cant}</h4>
                    </td>
                    <td>
                      <h4>${itemCart.precio}</h4>
                    </td>
                    <td>
                      <button
                        type="button"
                        className="btn-close"
                        aria-label="Close"
                        onClick={() => removeFromCart(itemCart.id)}
                      ></button>
                    </td>
                  </tr>
                  {/* <tr>
                    <th scope="row">2</th>
                    <td>
                      <h4>{itemCart.cant}</h4>
                    </td>
                  </tr>

                  <tr>
                    <th scope="row">3</th>
                    <td>
                      <h4>${calcTotalPorItem(itemCart.id)}</h4>
                    </td>
                  </tr>

                  <tr></tr>
                  <th scope="row"></th>
                  <td>
                    <button
                      type="button"
                      className="btn-close"
                      aria-label="Close"
                      onClick={() => removeFromCart(itemCart.id)}
                    ></button>
                  </td> */}
                </div>
              );
            })}
          </tbody>
          <h4 className="text-end m-2">
            <mark>Total a pagar:</mark>${calcTotalPrice()}
          </h4>
          <button
            type="button"
            className="btn btn-success m-2"
            onClick={clearCart}
          >
            Vaciar todo el carrito
          </button>
          <div>
            <button
              type="button"
              className="btn btn-dark m-2"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              onClick={handleComprar}
            >
              Comprar
            </button>

            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">
                      ¡Gracias por tu compra!
                    </h1>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">El id de tu compra es:</div>
                </div>
              </div>
            </div>
          </div>
          )
        </table>
      </div>
    );
  }
}
export default Cart;
