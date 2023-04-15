/* eslint-disable default-case */
import { PIZZA_ACTION_TYPES } from "./pizza.types";

export const PIZZA_INITIAL_STATE = {
    pizzas: [],
    error: ''
}

export const pizzaReducer = (state = PIZZA_INITIAL_STATE, action = {}) => {
    const { type, payload } = action;

    switch (type) {
      case PIZZA_ACTION_TYPES.FETCH_PIZZAS_SUCCESS:
        return {
          ...state,
          pizzas: payload,
        };
      case PIZZA_ACTION_TYPES.FETCH_PIZZAS_FAILED:
        return {
          ...state,
          pizzas: [],
          error: payload,
        };
      case PIZZA_ACTION_TYPES.FETCH_PIZZAS_REQ:
        return {
          ...state,
          pizzas: payload,
        };
      default:
        return state;
    }
}