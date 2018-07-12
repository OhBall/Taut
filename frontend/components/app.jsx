import React from 'react';
import { Route, Link } from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../utils/route_util';

import SplashHeader from './splash_screen/splash_header';
import LoginForm from './session_form/login_form_container';
import SignupForm from './session_form/signup_form_container';

const App = () => {
  return(
    <div id='app'>
      <Route path='/' component={SplashHeader} />
      <AuthRoute path='/signin' component={LoginForm} />
      <AuthRoute path='/signup' component={SignupForm} />
    </div>
  );
};

export default App;
