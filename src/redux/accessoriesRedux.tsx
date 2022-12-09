import { API_URL } from "../config";
import { Store } from "./initialState";
import { ProductType } from "../types/ProductType";
import { ActionType } from "./store";

//selectors
export const getGiftAccessoryByKickscooter = (
  { accessories }: Store,
  gift: string
) => accessories.find((accessory) => accessory.title === gift);
export const getAllAccessories = (state: Store) => state.accessories;

// action creators
export const loadAccessories = (
  payload: ProductType[]
): LoadAccessoriesAction => ({
  type: "LOAD_ACCESSORIES",
  payload,
});
export const fetchAccessories = () => {
  return (dispatch) => {
    fetch(`${API_URL}/accessories`)
      .then((res) => res.json())
      .then((accessories) => dispatch(loadAccessories(accessories)));
  };
};
export const updateAmountAccessoryRequest = (accessory: ProductType) => {
  return () => {
    const options = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(accessory),
    };
    fetch(`${API_URL}/accessories/${accessory.id}`, options);
  };
};

//action types

export interface LoadAccessoriesAction {
  type: "LOAD_ACCESSORIES";
  payload: ProductType[];
}

// reducer
const accessoriesReducer = (
  statePart: Store["accessories"] = [],
  action: ActionType
) => {
  switch (action.type) {
    case "LOAD_ACCESSORIES":
      return [...action.payload];
    default:
      return statePart;
  }
};
export default accessoriesReducer;
