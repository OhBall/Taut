import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = state => {
  return {
    formType: 'Log In',
    errors: state.errors.session,
    navLink: <Link to='/signup'>Sign Up Instead</Link>,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: user => dispatch(login(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
