import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from './session_actions';


const defaultState = {id: null};
export const SessionReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {id: action.user.id};
    case LOGOUT_CURRENT_USER:
      return {defaultState};
    default:
      return state;
  }
};
