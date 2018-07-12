import React from 'react';
import { Link } from 'react-router-dom';

import LogoutButton from './logout_button_container';

const SplashHeader = (props) => {
  return (
    <header className='splash-nav'>
      <Link to='/'><img/>Taut</Link>
      <section>
        <LogoutButton/>
        <Link to='/signin'>{'Sign in'}</Link>
        <Link to='/signup'>{'Sign up'}</Link>
      </section>
    </header>
  );
};

export default SplashHeader;
