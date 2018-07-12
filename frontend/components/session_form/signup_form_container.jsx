import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = state => {
  return {
    formType: 'Sign up',
    errors: state.errors.session,
    navLink: <div>{'Already have an account? '}
               <Link to='/signin'>{'Sign in Instead'}</Link>
             </div>,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: user => dispatch(signup(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
