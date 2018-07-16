export const CREATE_CHANNEL_MODAL = 'CREATE_CHANNEL_MODAL';
export const CLEAR_MODAL = 'CLEAR_MODAL';

export const createChannelModal = () => {
  return {
    type: CREATE_CHANNEL_MODAL,
  };
};

export const clearModal = () => {
  return {
    type: CLEAR_MODAL,
  };
};
