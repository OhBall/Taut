import React from 'react';

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
      if (!this.lockInput) { this.setState({[field]: e.target.value}) };
    };
  }

  handleSubmit(e) {
    if (!this.lockInput) {
      e.preventDefault();
      this.props.processForm(this.state);
    }
  }

  loginAsGuest() {
    if (!this.lockInput) {
      this.lockInput = true;
      const emailArr = 'guest@guest.com'.split('');
      const passwordArr = 'hunter2'.split('');
      const button = document.getElementById('login');
      this.setState({email: '', password: ''}, () =>
        this.loginAsGuestHelper(emailArr, passwordArr, button)
      );
    }
  }

  loginAsGuestHelper(emailArr, passwordArr, button){
    if (emailArr.length > 0) {
      this.setState(
        { email: this.state.email + emailArr.shift() }, () => {
          window.setTimeout( () =>
            this.loginAsGuestHelper(emailArr, passwordArr, button), 50);
        }
      );
    } else if (passwordArr.length > 0) {
      this.setState(
        { password: this.state.password + passwordArr.shift() }, () => {
          window.setTimeout( () =>
            this.loginAsGuestHelper(emailArr, passwordArr, button), 70);
        }
      );
    } else {
      this.lockInput = false;
      button.click();
    }
  }

  render(){
    const { formType, navLink } = this.props;

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
