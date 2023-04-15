import { CART_ACTION_TYPES } from "./cart.types";

export const CART_INITIAL_STATE = {
  cart: [],
};

export const cartReducer = (state = CART_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, payload],
      };

    case CART_ACTION_TYPES.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(
          (item) => item.cartItemId !== action.payload.cartItemId
        ),
      };
    case CART_ACTION_TYPES.INCREASE_QUANT:
      return {
        ...state,
        cart: state.cart.map(function (item) {
          if (item.cartItemId === action.payload.cartItemId) {
            item.quantity = item.quantity + 1;
          }
          return item;
        }),
      };
    case CART_ACTION_TYPES.DECREASE_QUANT:
      return {
        ...state,
        cart: state.cart.map(function (item) {
          if (item.cartItemId === action.payload.cartItemId) {
            item.quantity = item.quantity - 1;
          }
          return item;
        }),
      };
    default:
      return state;
  }
};
