import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import useCartContext from "../store/CartContext";
import React from "react";

function CartWidget() {
  return (
    <div>
      <div className="position-relative">
        <FontAwesomeIcon icon={faCartShopping} />
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {4}
        </span>
      </div>
    </div>
  );
}

export default CartWidget;
