import { useReducer, createContext } from "react";
import { cartInitialState, cartReducer } from "../reducers/cart";
import { CART_ACTIONS } from "../reducers/cart-actions";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);

  const addToCart = (product) => {
    dispatch({ type: CART_ACTIONS.ADD_TO_CART, payload: { product } });
  };

  const decreaseQuantity = (id) => {
    dispatch({ type: CART_ACTIONS.DECREASE_QUANTITY, payload: { id } });
  };

  const removeFromCart = (id) => {
    dispatch({ type: CART_ACTIONS.REMOVE_FROM_CART, payload: { id } });
  };

  const clearCart = () => {
    dispatch({ type: CART_ACTIONS.CLEAR_CART });
  };

  return (
    <CartContext.Provider
      value={{
        cart: state,
        addToCart,
        removeFromCart,
        decreaseQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
