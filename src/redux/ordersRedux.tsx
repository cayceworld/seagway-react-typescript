import { API_URL } from "../config";

//selectors
export const getOrders = (state) => state.orders;

// action name creator
const createActionName = (actionName) => `app/orders/${actionName}`;

// action types
const ADD_TO_ORDERS = createActionName("ADD_TO_ORDERS");
const LOAD_ORDERS = createActionName("LOAD_ORDERS");

// action creators
export const addToOrders = (payload) => ({ type: ADD_TO_ORDERS, payload });
export const loadOrders = (payload) => ({ type: LOAD_ORDERS, payload });

export const fetchOrders = () => {
  return (dispatch) => {
    fetch(`${API_URL}/orders`)
      .then((res) => res.json())
      .then((orders) => dispatch(loadOrders(orders)));
  };
};

export const addOrder = (order, goToOrderPage) => {
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

// reducer
const ordersReducer = (statePart = [], action) => {
  switch (action.type) {
    case ADD_TO_ORDERS:
      return [...statePart, { ...action.payload }];
    case LOAD_ORDERS:
      console.log("db.orders:", action.payload);
      return [...action.payload];
    default:
      return statePart;
  }
};
export default ordersReducer;
