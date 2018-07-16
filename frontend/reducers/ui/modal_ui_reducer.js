import { CREATE_CHANNEL_MODAL } from '../../actions/modal_actions.js';

const ModalUIReducer = (state = null, action) => {
  switch (action.type) {
    case CREATE_CHANNEL_MODAL:
      return 'createChannel';
    default:
      return state;
  }
};

export default ModalUIReducer;
