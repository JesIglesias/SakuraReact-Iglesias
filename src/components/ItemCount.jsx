import React, { useState } from "react";

const ItemCount = (props) => {
  const [count, setCount] = useState(props.initial, props.stock);

  function handleSuma() {
    if (count < props.stock) {
      setCount(count + 1);
    }
  }

  function handleResta() {
    if (count > props.initial) {
      setCount(count - 1);
    }
  }
  function handleAgregar() {
    alert("Agregaste" + " " + count + " " + " productos al carrito");
  }

  return (
    <div>
      <div className="text-center">
        <h2>ItemCount</h2>
        <div>
          <button
            type="button"
            className="btn btn-light m-2"
            onClick={handleResta}
          >
            -
          </button>
          <span> {count} </span>
          <button
            type="button"
            className="btn btn-light m-2"
            onClick={handleSuma}
          >
            +
          </button>
        </div>
        <div>
          <button
            type="button"
            className="btn btn-light"
            onClick={handleAgregar}
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCount;
