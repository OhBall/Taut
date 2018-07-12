import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

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


const SplashHeader = ({ loggedIn, logoutAction }) => {
  return (
    <header className='splash-nav'>
      <Link to='/'><img/>Taut</Link>
      <section>
        <button onClick={logoutAction} hidden={!loggedIn}>Logout</button>
        <Link to='/signin' hidden={loggedIn}>{'Sign in'}</Link>
        <Link to='/signup' hidden={loggedIn}>{'Sign up'}</Link>
      </section>
    </header>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(SplashHeader);
