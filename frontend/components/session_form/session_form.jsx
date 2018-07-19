import React from 'react';
import Promise from 'promise';

import SessionErrors from './session_errors';

class SessionForm extends React.Component {
  constructor (props){
    super(props);
    this.state = {email: '', password: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.loginAsGuest = this.loginAsGuest.bind(this);
    this.loginAsGuestHelper = this.loginAsGuestHelper.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  update(field){
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state);
  }

  loginAsGuest() {
    const emailArr = 'guest@guest.com'.split('');
    const passwordArr = 'hunter2'.split('');
    const button = document.getElementById('login');
    this.loginAsGuestHelper(emailArr, passwordArr, button);
  }

  loginAsGuestHelper(emailArr, passwordArr, button){
    if (emailArr.length > 0) {
      this.setState(
        { email: this.state.email + emailArr.shift() }, () => {
          window.setTimeout( () =>
            this.loginAsGuestHelper(emailArr, passwordArr, button), 75);
        }
      );
    } else if (passwordArr.length > 0) {
      this.setState(
        { password: this.state.password + passwordArr.shift() }, () => {
          window.setTimeout( () =>
            this.loginAsGuestHelper(emailArr, passwordArr, button), 100);
        }
      );
    } else {
      button.click();
    }
  }

  render(){
    const { formType, navLink, errors } = this.props;

    let guestLoginButton;
    if (formType === 'Sign in') {
      guestLoginButton = <button onClick={this.loginAsGuest}>
                           Sign in as guest
                         </button>; }

    return (
      <div className='session'>
        <SessionErrors />
        <div className='form-container'>
          <h1>{formType} to Taut</h1>
          <h2 id='session-form-subhead'>'slack-to-taut.heroku.com'</h2>
          <h2>Enter your <b>email address</b> and <b>password</b>.</h2>
          <form onSubmit={this.handleSubmit}>
            <input
              type='text'
              value={this.state.email}
              onChange={this.update('email')}
              placeholder='you@example.com'/>

            <input
              type='password'
              value={this.state.password}
              onChange={this.update('password')}
              placeholder='password'/>

            <input id='login' type='submit' value={formType}/>
          </form>
          {guestLoginButton}
        </div>
        {navLink}
      </div>
    );

  }

}

export default SessionForm;
