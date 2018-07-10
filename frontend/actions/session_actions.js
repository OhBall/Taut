import * as SessionApiUtil from '../utils/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const receiveCurrentUser = (user) => dispatch => {
  debugger
  return {
    type: RECEIVE_CURRENT_USER,
    user,
  };
};

export const logoutCurrentUser = () => dispatch => {
  return {
    type: LOGOUT_CURRENT_USER,
  };
};

export const receiveErrors = errors  => dispatch => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors,
  };
};

export const login = user => dispatch => {
  SessionApiUtil.login(user).then(
    user => dispatch(receiveCurrentUser(user)) ,
    errors => dispatch(receiveErrors(errors))
  );
};

export const logout = () => dispatch => {
  SessionApiUtil.logout().then(
    () => dispatch(logoutCurrentUser()) ,
    errors => dispatch(receiveErrors(errors))
  );
};

export const signup = user => dispatch => {
  SessionApiUtil.signup(user).then(
    user => dispatch(receiveCurrentUser(user)) ,
    errors => dispatch(receiveErrors(errors))
  );
};
