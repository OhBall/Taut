import { RECEIVE_CURRENT_USER,
         RECEIVE_SESSION_ERRORS,
         CLEAR_ERRORS} from '../../actions/session_actions';

import { RECEIVE_CHANNEL,
         RECEIVE_CHANNEL_ERRORS } from '../../actions/channel_actions';

const SessionErrorsReducer = (state = [], action)=>{
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
    case RECEIVE_CHANNEL_ERRORS:
      return action.errors;
    case RECEIVE_CURRENT_USER:
    case RECEIVE_CHANNEL:
    case CLEAR_ERRORS:
      return [];
    default:
      return state;
  }
};

export default SessionErrorsReducer;
