import React from 'react';
import { Route } from 'react-router-dom';

import LoginForm from './session_form/login_form_container';
import SignupForm from './session_form/signup_form_container';

const App = () => {
  return(
    <div>
      <Route path='/login' component={LoginForm} />
      <Route path='/signup' component={SignupForm} />
    </div>
  );
};

export default App;
