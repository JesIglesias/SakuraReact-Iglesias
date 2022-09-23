import { createContext } from "react";
import { useContext, useState } from "react";

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
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default useCartContext;
