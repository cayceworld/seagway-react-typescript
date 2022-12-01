import { API_URL } from "../config";


//selectors
export const getSelectedKickscooter = state => state.kickscooters.find(kickscooter => kickscooter.isSelect === true);
export const getAllKickscooters = state => state.kickscooters;


// action name creator
const createActionName = actionName => `app/kickscooters/${actionName}`;

// action types 
const TOGGLE_KICKSCOOTER_SELECT = createActionName('TOGGLE_KICKSCOOTER_SELECT');
const LOAD_KICKSCOOTERS = createActionName('LOAD_KICKSCOOTERS');

// action creators
export const toggleSelect = payload => ({ type: TOGGLE_KICKSCOOTER_SELECT, payload });

export const loadKickscooters = payload => ({ type: LOAD_KICKSCOOTERS, payload });
export const fetchKickscooters = () => {
  return (dispatch) => {
    fetch(`${API_URL}/kickscooters`)
      .then(res => res.json())
      .then(kickscooters => dispatch(loadKickscooters(kickscooters)));
  }
};
export const updateAmountKickscooterRequest = (kickscooter) => {
  return () => {
    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(kickscooter),
    };
    fetch(`${API_URL}/kickscooters/${kickscooter.id}`, options)
      .then(res => console.log('res', res))
  }
}





// reducer
const kickscooterReducer = (statePart = [], action) => {
  switch (action.type) {
    case TOGGLE_KICKSCOOTER_SELECT:
      console.log(statePart);
      return statePart.map(kickscooter => (kickscooter.id === action.payload.id) ? { ...kickscooter, isSelect: true } : { ...kickscooter, isSelect: false });
    case LOAD_KICKSCOOTERS:
      console.log('db.kickscooters:', action.payload);
      return [...action.payload]
    default:
      return statePart;
  };
};
export default kickscooterReducer; 