import React from "react";
import useCartContext from "../store/CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const { cart, removeFromCart, clearCart, calcTotalPrice, getOrdenDeCompra } =
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

    getOrdenDeCompra(ordenDeCompra);

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
              <th className="table-danger">Producto</th>
              <th className="table-danger">Cantidad</th>
              <th className="table-danger">Precio</th>
              <th className="table-danger">Eliminar</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {cart.map((itemCart) => {
              return (
                <tr key={itemCart.id} className="m-3">
                  <td>
                    <h4 className="text-success fs-5 fw-semibold fst-italic">
                      {itemCart.producto}
                    </h4>
                  </td>
                  <td>
                    <h4> {itemCart.cant}</h4>
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
              );
            })}
          </tbody>
        </table>

        <h4 className="text-center m-2">
          <mark>Total a pagar:</mark>${calcTotalPrice()}
        </h4>
        <div className="text-end">
          <button
            type="button"
            className="btn btn-success m-2 "
            onClick={clearCart}
          >
            Vaciar todo el carrito
          </button>
        </div>

        <div className="text-end">
          <button
            type="button"
            className="btn btn-dark m-2 btn-lg"
            onClick={handleComprar}
          >
            Comprar
          </button>
        </div>
      </div>
    );
  }
}
export default Cart;
