import { API_URL } from "../config";
import { Store } from "./initialState";


//selectors
export const getOrders = (state: Store) => state.orders;


// action creators
export const addToOrders = (payload: Store["orders"]) => ({ type: "ADD_TO_ORDERS", payload });
export const loadOrders = (payload: Store["orders"]) => ({ type: "LOAD_ORDERS", payload });

export const fetchOrders = () => {
  return (dispatch) => {
    fetch(`${API_URL}/orders`)
      .then((res) => res.json())
      .then((orders) => dispatch(loadOrders(orders)));
  };
};

export const addOrder = (order: Store["orders"], goToOrderPage) => {
  console.log("order", order);
  return () => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    };
    fetch(`${API_URL}/orders/`, options).then(goToOrderPage());
  };
};

//action types

interface AddOrderAction {
  type: "ADD_TO_ORDERS",
  payload: Store["orders"]
}

interface LoadOrdersAction {
  type: "LOAD_ORDERS",
  payload: Array<Store["orders"]>
}

export type OrdersReducerAction = AddOrderAction | LoadOrdersAction;

// reducer
const ordersReducer = (statePart = [], action: OrdersReducerAction) => {
  switch (action.type) {
    case "ADD_TO_ORDERS":
      return [...statePart, { ...action.payload }];
    case "LOAD_ORDERS":
      return [...action.payload];
    default:
      return statePart;
  }
};
export default ordersReducer;
