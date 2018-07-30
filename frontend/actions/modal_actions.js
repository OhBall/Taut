export const CREATE_CHANNEL_MODAL = 'CREATE_CHANNEL_MODAL';
export const EDIT_CHANNEL_MODAL = 'EDIT_CHANNEL_MODAL';
export const CREATE_DM_MODAL = 'CREATE_DM_MODAL';
export const CLEAR_MODAL = 'CLEAR_MODAL';

export const createChannelModal = () => {
  return {
    type: CREATE_CHANNEL_MODAL,
  };
};

export const createDmModal = () => {
  return {
    type: CREATE_DM_MODAL,
  };
};

export const editChannelModal = () => {
  return {
    type: EDIT_CHANNEL_MODAL,
  };
};

export const clearModal = () => {
  return {
    type: CLEAR_MODAL,
  };
};
