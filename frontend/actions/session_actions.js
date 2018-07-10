import * as SessionApiUtil from '../utils/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';


export const receiveCurrentUser = (user) => dispatch => {
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

export const login = user => dispatch => {
  SessionApiUtil.login(user).then(
    user => dispatch(receiveCurrentUser(user))
  );
};

export const logout = () => dispatch => {
  SessionApiUtil.logout().then(
    () => dispatch(logoutCurrentUser())
  );
};

export const signup = user => dispatch => {
  SessionApiUtil.signup(user).then(

  );
};
