import { CART_ACTIONS } from "./cart-actions";

export const cartInitialState =
  JSON.parse(window.localStorage.getItem("cart")) || [];
export const updateCartLS = (state) => {
  window.localStorage.setItem("cart", JSON.stringify(state));
};

export function cartReducer(state, action) {
  if (action.type === CART_ACTIONS.ADD_TO_CART) {
    updateCartLS(state);
    const newState = structuredClone(state);

    const productExistInCartIndex = newState.findIndex(
      (item) => item.id === action.payload.product.id
    );

    if (productExistInCartIndex >= 0) {
      newState[productExistInCartIndex].quantity++;
      updateCartLS(newState);
      return newState;
    }

    const updateState = [
      ...newState,
      { ...action.payload.product, quantity: 1 },
    ];
    
    updateCartLS(updateState);
    return updateState;
  }

  if (action.type === CART_ACTIONS.DECREASE_QUANTITY) {
    const newState = structuredClone(state);

    const productExistInCartIndex = newState.findIndex(
      (item) => item.id === action.payload.id
    );

    if (productExistInCartIndex >= 0) {
      if (newState[productExistInCartIndex].quantity > 1) {
        // Verifica que la cantidad no sea 0 o menor
        newState[productExistInCartIndex].quantity--;
      }
      updateCartLS(newState);
      return newState;
    }

    updateCartLS(newState);
    return newState;
  }

  if (action.type === CART_ACTIONS.REMOVE_FROM_CART) {
    const newArray = structuredClone(state);
    const newState = newArray.filter((item) => item.id !== action.payload.id);
    updateCartLS(newState);
    return newState;
  }

  if (action.type === CART_ACTIONS.CLEAR_CART) {
    updateCartLS([]);
    return [];
  }

  updateCartLS(state);
  return state;
}
