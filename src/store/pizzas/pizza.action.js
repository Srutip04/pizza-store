import { PIZZA_ACTION_TYPES } from "./pizza.types";

const fetchReq = () => {
  return {
    type: PIZZA_ACTION_TYPES.FETCH_PIZZAS_REQ,
  };
};

const fetchSuccess = (pizzas) => {
  return {
    type: PIZZA_ACTION_TYPES.FETCH_PIZZAS_SUCCESS,
    payload: pizzas,
  };
};

const fetchFailed = (error) => {
  return {
    type: PIZZA_ACTION_TYPES.FETCH_PIZZAS_FAILED,
    payload: error,
  };
};

export const fetchPizzas = () => {
  return async (dispatch) => {
    dispatch(fetchReq());
    try {
      const res = await fetch(
        "https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68"
      );
      const data = await res.json();
      dispatch(fetchSuccess(data));
    } catch (err) {
      dispatch(fetchFailed(err.message));
    }
  };
};
