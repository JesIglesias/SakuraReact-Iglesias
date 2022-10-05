import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import useCartContext from "../store/CartContext";
import { Link } from "react-router-dom";
import React from "react";

function CartWidget() {
  const { calcItemCant } = useCartContext();
  return (
    <div>
      <Link className="position-relative" to="/cart">
        <FontAwesomeIcon icon={faCartShopping} />
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {calcItemCant() > 0 ? calcItemCant() : ""}
        </span>
      </Link>
    </div>
  );
}

export default CartWidget;
