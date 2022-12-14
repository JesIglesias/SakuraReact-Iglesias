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
  function handleClick() {
    props.onAdd(count);
  }

  return (
    <div>
      <button type="button" className="btn btn-light m-2" onClick={handleResta}>
        -
      </button>
      <span> {count} </span>
      <button type="button" className="btn btn-light m-2" onClick={handleSuma}>
        +
      </button>
      <div>
        <button
          type="button"
          className="btn btn-success opacity-75"
          onClick={handleClick}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
