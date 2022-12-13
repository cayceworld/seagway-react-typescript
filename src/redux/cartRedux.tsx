import { Store } from "./initialState";
import { CartItem } from "../types/CartItem";
import { ActionType } from "./store";

//selectors
export const getCartProducts = (state: Store) => state.cart;

// action creators
export const addToCart = (payload: CartItem): AddItemAction => ({
  type: "ADD_TO_CART",
  payload,
});
export const addAmount = (id: string, amount: number): AddItemAmountAction => ({
  type: "ADD_AMOUNT",
  id,
  amount,
});
export const removeAmount = (
  id: string,
  amount: number
): RemoveAmountAction => ({
  type: "REMOVE_AMOUNT",
  id,
  amount,
});
export const removeItem = (id: string): RemoveItemAction => ({
  type: "REMOVE_ITEM",
  id,
});
export const clearCart = (): ClearCartAction => ({ type: "CLEAR_CART" });

//action types
interface AddItemAction {
  type: "ADD_TO_CART";
  payload: CartItem;
}

interface AddItemAmountAction {
  type: "ADD_AMOUNT";
  id: string;
  amount: number;
}

interface RemoveItemAction {
  type: "REMOVE_ITEM";
  id: string;
}

interface ClearCartAction {
  type: "CLEAR_CART";
}

interface RemoveAmountAction {
  type: "REMOVE_AMOUNT";
  id: string;
  amount: number;
}

export type CartReducerAction =
  | AddItemAction
  | AddItemAmountAction
  | RemoveItemAction
  | ClearCartAction
  | RemoveAmountAction;

// reducer
const cartReducer = (statePart: Store["cart"] = [], action: ActionType) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return [...statePart, { ...action.payload }];
    case "ADD_AMOUNT":
      return statePart.map((item) =>
        item.id === action.id
          ? { ...item, amount: item.amount + action.amount }
          : item
      );
    case "REMOVE_AMOUNT":
      return statePart.map((item) =>
        item.id === action.id
          ? { ...item, amount: item.amount - action.amount }
          : item
      );
    case "REMOVE_ITEM":
      return statePart.filter((item) => item.id !== action.id);
    case "CLEAR_CART":
      return [];
    default:
      return statePart;
  }
};
export default cartReducer;
