import React from 'react';
import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';

const mapStateToProps = state => {
  return {
    loggedIn: Boolean(state.session.id)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logoutAction: () => dispatch(logout())
  };
};

const LogoutButton = ({ loggedIn, logoutAction }) => (
    <button onClick={logoutAction} hidden={!loggedIn}>Logout</button>
);

export default connect(mapStateToProps, mapDispatchToProps)(LogoutButton);
