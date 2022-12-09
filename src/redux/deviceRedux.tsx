import { Store } from "./initialState";
import { ActionType } from "./store";

/* selectors */
export const getDevice = (isDesktop: Store) => isDesktop;

/* action creators */
export const windowResize = (payload: boolean): DeviceType => ({
  type: "WINDOW_RESIZE",
  payload,
});

//action type
export interface DeviceType {
  type: "WINDOW_RESIZE";
  payload: boolean;
}

/* reducer */
export default function reducer(statePart: Store, action: ActionType) {
  switch (action.type) {
    case "WINDOW_RESIZE":
      return action.payload;
    default:
      return statePart;
  }
}
