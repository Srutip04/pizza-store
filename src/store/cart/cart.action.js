import { CART_ACTION_TYPES } from "./cart.types";

export const addToCart = (item) => {
  return {
    type: CART_ACTION_TYPES.ADD_TO_CART,
    payload: item,
  };
};

export const removeFromCart = (item) => {
  return {
    type: CART_ACTION_TYPES.REMOVE_FROM_CART,
    payload: item,
  };
};

export const insQty = (item) => {
  return {
    type: CART_ACTION_TYPES.INCREASE_QUANT,
    payload: item,
  };
};

export const decQty = (item) => {
  return {
    type: CART_ACTION_TYPES.DECREASE_QUANT,
    payload: item,
  };
};
