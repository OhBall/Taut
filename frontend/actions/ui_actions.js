export const SELECT_CHANNEL = 'SELECT_CHANNEL';
export const SELECT_USER = 'SELECT_USER';
export const SELECT_USERS = 'SELECT_USERS';
export const UNSELECT_USER = 'UNSELECT_USER';

export const selectChannel = channelId => {
  return {
    type: SELECT_CHANNEL,
    channelId,
  };
};

export const selectUser = userId => {
  return {
    type: SELECT_USER,
    userId,
  };
};

export const selectUsers = userIds => {
  return {
    type: SELECT_USERS,
    userIds,
  };
};

export const deselectUser = userId => {
  return {
    type: UNSELECT_USER,
    userId,
  };
};
