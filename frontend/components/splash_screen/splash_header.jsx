import React from 'react';
import { Link } from 'react-router-dom';

const SplashHeader = (props) => {
  return (
    <header className='splash-nav'>
      <Link to='/'/>
      <section>
        <Link to='/signin'>Sign in</Link>
        <Link to='/signup'>Sign up</Link>
      </section>
    </header>
  );
};

export default SplashHeader;
