import { createStore, applyMiddleware, combineReducers } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import { pizzaReducer } from "./pizzas/pizza.reducer";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const logger = createLogger();

const rootReducer = combineReducers({
    pizzaState: pizzaReducer
})

const persistConfig = {
  key: "root",
  storage,
};

const middlewares = [logger, thunk];
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(
  persistedReducer,
  applyMiddleware(...middlewares)
);
export const persistor = persistStore(store);