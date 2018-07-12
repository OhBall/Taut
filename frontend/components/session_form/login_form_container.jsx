import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { login, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = state => {
  return {
    formType: 'Sign in',
    errors: state.errors.session,
    navLink: <div>{"Don't have an account? "}
                <Link to='/signup'>Sign up instead</Link>
             </div>,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: user => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors())

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
