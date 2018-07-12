import React from 'react';

import SessionErrors from './session_errors';

class SessionForm extends React.Component {
  constructor (props){
    super(props);
    this.state = {email: '', password: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.loginAsGuest = this.loginAsGuest.bind(this);
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

  loginAsGuest(){
    const guestUser = {email: 'guest@guest.com', password: 'hunter2'};
    this.props.processForm(guestUser);
  }

  render(){
    const { formType, navLink, errors } = this.props;

    let guestLoginButton;
    if (formType === 'Sign in') {
      guestLoginButton = <button onClick={this.loginAsGuest}>
                           Sign in as guest
                         </button>; }

    const hidden = errors.length === 0 ? 'hidden' : '';

    return (
      <div className='session'>
        <SessionErrors errors={errors} hidden={hidden}/>
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

            <input type='submit' value={formType}/>
          </form>
          {guestLoginButton}
        </div>
        {navLink}
      </div>
    );

  }

}

export default SessionForm;
