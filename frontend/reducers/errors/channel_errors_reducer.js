import { RECEIVE_CHANNEL,
         RECEIVE_CHANNEL_ERRORS, } from '../../actions/channel_actions';
import { CLEAR_MODAL } from '../../actions/modal_actions';

const SessionErrorsReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_CHANNEL_ERRORS:
      return action.errors;
    case CLEAR_MODAL:
    case RECEIVE_CHANNEL:
      return [];
    default:
      return state;
  }
};

export default SessionErrorsReducer;
