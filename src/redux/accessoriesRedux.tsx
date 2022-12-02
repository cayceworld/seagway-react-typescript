import { API_URL } from "../config";

//selectors
export const getGiftAccessoryByKickscooter = ({ accessories }, gift) =>
  accessories.find((accessory) => accessory.title === gift);
export const getAllAccessories = (state) => state.accessories;

// action name creator
const createActionName = (actionName) => `app/accessories/${actionName}`;

// action types
const LOAD_ACCESSORIES = createActionName("LOAD_ACCESSORIES");

// action creators
export const loadAccessories = (payload) => ({
  type: LOAD_ACCESSORIES,
  payload,
});
export const fetchAccessories = () => {
  return (dispatch) => {
    fetch(`${API_URL}/accessories`)
      .then((res) => res.json())
      .then((accessories) => dispatch(loadAccessories(accessories)));
  };
};
export const updateAmountAccessoryRequest = (accessory) => {
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

// reducer
const accessoriesReducer = (statePart = [], action) => {
  switch (action.type) {
    case LOAD_ACCESSORIES:
      console.log("db.accessories:", action.payload);
      return [...action.payload];
    default:
      return statePart;
  }
};
export default accessoriesReducer;
