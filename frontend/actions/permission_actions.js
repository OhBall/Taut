import * as PermissionsApiUtil from '../utils/permissions_api_util';

export const RECEIVE_PERMISSIONS = 'RECEIVE_PERMISSIONS';

export const receivePermissions = permissions => {
  return {
    type: RECEIVE_PERMISSIONS,
    permissions,
  };
};

export const requestPermissions = () => dispatch => {
  return PermissionsApiUtil.fetchPermissions().then(
    permissions => dispatch(receivePermissions(permissions))
  );
};
