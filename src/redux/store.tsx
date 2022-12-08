import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import initialState from "./initialState";
import kickscooterReducer, {
  KickscooterReducerAction,
} from "./kickscooterRedux";
import accessoriesReducer, { LoadAccessoriesAction } from "./accessoriesRedux";
import cartReducer, { CartReducerAction } from "./cartRedux";
import deviceReducer from "./deviseRedux";
import ordersReducer from "./ordersRedux";

export type ActionType =
  | LoadAccessoriesAction
  | CartReducerAction
  | KickscooterReducerAction;

const subreducers = {
  kickscooters: kickscooterReducer,
  accessories: accessoriesReducer,
  cart: cartReducer,
  device: deviceReducer,
  orders: ordersReducer,
};

const reducer = combineReducers(subreducers);

declare global {
  var __REDUX_DEVTOOLS_EXTENSION__: any;
}

const store = createStore(
  reducer,
  initialState,

  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f: any) => f
  )
);

export default store;
