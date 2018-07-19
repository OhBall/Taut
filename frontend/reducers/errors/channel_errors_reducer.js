import { RECEIVE_CHANNEL,
         RECEIVE_CHANNEL_ERRORS, } from '../../actions/channel_actions';

const SessionErrorsReducer = (state = [], action) => {
  switch (action.type) {
    case RECEIVE_CHANNEL_ERRORS:
      return action.errors;
    default:
      return state;
  }
};