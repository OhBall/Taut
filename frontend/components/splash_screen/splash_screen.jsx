import React from 'react';
import { Link } from 'react-router-dom';

const SplashScreen = () => {
  return(
    <div className='splash-screen'>
      <img src={window.splash_illustration}/>
      <h1>Where Work Happens</h1>
      <p>
        When your team needs to kick off a project,
        hire a new employee, deploy some code,
        review a sales contract, finalize next year's budget,
        measure an A/B test, plan your next office opening,
        and more, Slack has you covered.
      </p>
      <Link to='signup' value='Get Started'/>
      <div>
        {'Already using Slack?'} <Link to='/signin' value='Sign in'/>.
      </div>
    </div>
  );
};

export default SplashScreen;
