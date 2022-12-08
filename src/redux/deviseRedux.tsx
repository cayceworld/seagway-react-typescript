import { Store } from "./initialState";

/* selectors */
export const getDevice = ({ device }: Store) => device;

/* action creators */
export const windowResize = (payload: boolean) => ({
  type: "WINDOW_RESIZE",
  payload,
});

//action type
interface DeviceType {
  type: "WINDOW_RESIZE";
  payload: boolean;
}

/* reducer */
export default function reducer(statePart = [], action: DeviceType) {
  switch (action.type) {
    case "WINDOW_RESIZE":
      return action.payload;
    default:
      return statePart;
  }
}
