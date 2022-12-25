import { API_URL } from "../config";
import { Store } from "./initialState";
import { CartItem } from "../types/CartItem";
import { ActionType, AppDispatch } from "./store";

//selectors
export const getSelectedKickscooter = (state: Store) =>
  state.kickscooters.find((kickscooter) => kickscooter.isSelect === true)!; // return value can't be undefined, because first item from db always have isSelect:true
export const getAllKickscooters = (state: Store) => state.kickscooters;

interface ToggleKickscooter {
  id: string;
  isSelect: boolean;
}

// action creators
export const toggleSelect = (payload: ToggleKickscooter) => ({
  type: "TOGGLE_KICKSCOOTER_SELECT",
  payload,
});
export const loadKickscooters = (
  payload: Store["kickscooters"]
): LoadKickscooterAction => ({
  type: "LOAD_KICKSCOOTERS",
  payload,
});
export const fetchKickscooters = () => {
  return (dispatch: AppDispatch) => {
    fetch(`${API_URL}/kickscooters`)
      .then((res) => res.json())
      .then((kickscooters) => dispatch(loadKickscooters(kickscooters)));
  };
};
export const updateAmountKickscooterRequest = (kickscooter: {
  id: string;
  inStock: number;
}) => {
  return () => {
    const options = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(kickscooter),
    };
    fetch(`${API_URL}/kickscooters/${kickscooter.id}`, options).then((res) =>
      console.log("res", res)
    );
  };
};

// action types
interface ToggleKickscooterAction {
  type: "TOGGLE_KICKSCOOTER_SELECT";
  payload: CartItem;
}

interface LoadKickscooterAction {
  type: "LOAD_KICKSCOOTERS";
  payload: Store["kickscooters"];
}

export type KickscooterReducerAction =
  | ToggleKickscooterAction
  | LoadKickscooterAction;

// reducer
const kickscooterReducer = (
  statePart: Store["kickscooters"] = [],
  action: ActionType
) => {
  switch (action.type) {
    case "TOGGLE_KICKSCOOTER_SELECT":
      return statePart.map((kickscooter) =>
        kickscooter.id === action.payload.id
          ? { ...kickscooter, isSelect: true }
          : { ...kickscooter, isSelect: false }
      );
    case "LOAD_KICKSCOOTERS":
      return [...action.payload];
    default:
      return statePart;
  }
};
export default kickscooterReducer;
