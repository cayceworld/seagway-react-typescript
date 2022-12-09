import { API_URL } from "../config";
import { ActionType } from "./store";
import { Order } from "./initialState";

// action creators
export const addToOrders = (payload: Order): AddOrderAction => ({
  type: "ADD_TO_ORDERS",
  payload,
});
export const loadOrders = (payload: Order[]): LoadOrdersAction => ({
  type: "LOAD_ORDERS",
  payload,
});

export const fetchOrders = () => {
  return (dispatch) => {
    fetch(`${API_URL}/orders`)
      .then((res) => res.json())
      .then((orders) => dispatch(loadOrders(orders)));
  };
};

export const addOrder = (order: Order, goToOrderPage) => {
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
  type: "ADD_TO_ORDERS";
  payload: Order;
}

interface LoadOrdersAction {
  type: "LOAD_ORDERS";
  payload: Order[];
}

export type OrdersReducerAction = AddOrderAction | LoadOrdersAction;

// reducer
const ordersReducer = (
  statePart: Order[] = [],
  action: ActionType
): Order[] => {
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
