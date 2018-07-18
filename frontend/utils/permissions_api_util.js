import { RECEIVE_PERMISSIONS } from '../actions/permission_actions';

export const fetchPermissions = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/permissions'
  });
};
