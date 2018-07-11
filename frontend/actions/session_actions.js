import * as SessionApiUtil from '../utils/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const receiveCurrentUser = (user) => {
  return {
    type: RECEIVE_CURRENT_USER,
    user,
  };
};

export const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER,
  };
};

export const receiveErrors = errors => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors,
  };
};

export const login = user => dispatch => {
  SessionApiUtil.login(user).then(
    responseUser => dispatch(receiveCurrentUser(responseUser)) ,
    ({responseJSON}) => dispatch(receiveErrors(responseJSON))
  );
};

export const logout = () => dispatch => {
  SessionApiUtil.logout().then(
    () => dispatch(logoutCurrentUser()) ,
    ({responseJSON}) => dispatch(receiveErrors(responseJSON))
  );
};

export const signup = user => dispatch => {
  SessionApiUtil.signup(user).then(
    responseUser => dispatch(receiveCurrentUser(responseUser)) ,
    ({responseJSON}) => dispatch(receiveErrors(responseJSON))
  );
};
