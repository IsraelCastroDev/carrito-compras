import { useContext } from "react";
import { CartContext } from "../context/cart";

export function useCart() {
  const cartContext = useContext(CartContext);

  if (cartContext === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }

  const { cart, addToCart, removeFromCart, clearCart } = cartContext;

  return { cart, addToCart, removeFromCart, clearCart };
}
