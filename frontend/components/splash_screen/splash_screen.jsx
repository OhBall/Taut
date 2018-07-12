import React from 'react';
import { Link } from 'react-router-dom';

const SplashScreen = () => {
  return(
    <div className='splash-screen'>
      <div className ='splash-illustration-container'>
        <img src={window.splash_illustration}/>
      </div>
      <div className = 'second-column'>
        <h1>Where Work Happens</h1>
        <p>
          When your team needs to kick off a project,
          hire a new employee, deploy some code,
          review a sales contract, finalize next year's budget,
          measure an A/B test, plan your next office opening,
          and more, Taut has you covered.
        </p>
        <Link to='signup'>Get Started</Link>
        <span>
          {'Already using Taut?'} <Link to='/signin'>{'Sign in'}</Link>.
        </span>
      </div>
    </div>
  );
};

export default SplashScreen;
