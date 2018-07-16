import { CREATE_CHANNEL_MODAL,
         CLEAR_MODAL } from '../../actions/modal_actions.js';

const ModalUIReducer = (state = null, action) => {
  switch (action.type) {
    case CREATE_CHANNEL_MODAL:
      return CREATE_CHANNEL_MODAL;
    case CLEAR_MODAL:
      return null;
    default:
      return state;
  }
};

export default ModalUIReducer;
