export const RECEIVE_PERMISSIONS = 'RECEIVE_PERMISSIONS';

export const receivePermissions = permissions => {
  return {
    type: RECEIVE_PERMISSIONS,
    permissions,
  };
};

export const requestPermissions = () => {
  
};
