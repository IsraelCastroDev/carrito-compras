import { CART_ACTIONS } from "./cart-actions";

export const cartInitialState = [];

export function cartReducer(state, action) {
  if (action.type === CART_ACTIONS.ADD_TO_CART) {
    const newArray = structuredClone(state);

    const productExistInCartIndex = newArray.findIndex(
      (item) => item.id === action.payload.product.id
    );

    if (productExistInCartIndex >= 0) {
      newArray[productExistInCartIndex].quantity++;
      return newArray;
    }

    return [...newArray, { ...action.payload.product, quantity: 1 }];
  }

  if (action.type === CART_ACTIONS.DECREASE_QUANTITY) {
    const newArray = structuredClone(state);

    const productExistInCartIndex = newArray.findIndex(
      (item) => item.id === action.payload.id
    );

    if (productExistInCartIndex >= 0) {
      newArray[productExistInCartIndex].quantity--;
      return newArray;
    }

    return newArray;
  }

  if (action.type === CART_ACTIONS.REMOVE_FROM_CART) {
    return state.filter((item) => item.id !== action.payload.id);
  }

  if (action.type === CART_ACTIONS.CLEAR_CART) {
    return [];
  }

  return state;
}
