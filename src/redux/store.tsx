import {
  legacy_createStore as createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import initialState from "./initialState";
import kickscooterReducer, {
  KickscooterReducerAction,
} from "./kickscooterRedux";
import accessoriesReducer, { LoadAccessoriesAction } from "./accessoriesRedux";
import cartReducer, { CartReducerAction } from "./cartRedux";
import deviceReducer from "./deviceRedux";
import ordersReducer, { OrdersReducerAction } from "./ordersRedux";
import { DeviceType } from "./deviceRedux";

export type ActionType =
  | LoadAccessoriesAction
  | CartReducerAction
  | KickscooterReducerAction
  | DeviceType
  | OrdersReducerAction;

const subreducers = {
  kickscooters: kickscooterReducer,
  accessories: accessoriesReducer,
  cart: cartReducer,
  isDesktop: deviceReducer,
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
export type AppDispatch = typeof store.dispatch;
