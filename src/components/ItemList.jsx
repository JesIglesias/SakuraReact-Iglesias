import React from "react";
import Item from "./Item";

function ItemList({ productos }) {
  return (
    <div>
      {productos.map((thisproducto) => {
        return <Item producto={thisproducto} key={thisproducto.id} />;
      })}
    </div>
  );
}

export default ItemList;
