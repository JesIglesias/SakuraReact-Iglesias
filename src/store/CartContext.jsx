import { createContext } from "react";
import { useContext, useState } from "react";
import { firestoreDB } from "../data";
import { collection, Timestamp, addDoc } from "firebase/firestore/lite";
import swal from "sweetalert";

const CartContext = createContext();
const useCartContext = () => useContext(CartContext);

export function CartContexProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (item, cant) => {
    if (isInCart(item.id)) {
      const newCart = cart.map((cartItem) => {
        if (cartItem.id === item.id) {
          const copyItem = { ...cartItem };
          copyItem.cant += cant;
          return copyItem;
        } else return cartItem;
      });
      setCart(newCart);
    } else {
      const newItem = { ...item, cant };
      setCart([...cart, newItem]);
    }
  };

  const removeFromCart = (id) => {
    const newCart = [...cart];
    const cartFilter = newCart.filter((item) => {
      return item.id !== id;
    });
    setCart(cartFilter);
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (id) => {
    return cart.some((itemCart) => itemCart.id === id);
  };

  const calcItemCant = () => {
    let itemCant = cart.map((item) => item.cant);
    return itemCant.reduce(
      (valorAnterior, valorActual) => valorAnterior + valorActual,
      0
    );
  };

  const calcTotalPorItem = (id) => {
    let totalItem = cart.find((item) => item.id === id);
    let total = totalItem.precio * totalItem.cant;
    return total;
  };

  const calcTotalPrice = () => {
    let totalPrice = cart.map((item) => calcTotalPorItem(item.id));
    return totalPrice.reduce(
      (valorAnterior, valorActual) => valorAnterior + valorActual
    );
  };

  async function getOrdenDeCompra(ordenData) {
    const compraTimestamp = Timestamp.now();
    const ordenDate = {
      ...ordenData,
      date: compraTimestamp,
    };
    const miColec = collection(firestoreDB, "ordenesDeCompras");
    const ordenDoc = await addDoc(miColec, ordenDate);

    swal({
      title: "¡Gracias por tu compra!",
      text: `El número de compra es: ${ordenDoc.id}`,
      icon: "success",
      button: "Ok",
    });
  }

  const contextFunction = () => console.log("Contexto");
  return (
    <CartContext.Provider
      value={{
        contextFunction,
        cart,
        addToCart,
        removeFromCart,
        isInCart,
        clearCart,
        calcItemCant,
        calcTotalPorItem,
        calcTotalPrice,
        getOrdenDeCompra,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default useCartContext;
