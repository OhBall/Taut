import React from 'react';

class SessionForm extends React.Component {
  constructor (props){
    super(props);
    this.state = {email: '', password: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
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

  render(){
    const {navLink} = this.props;
    return (
      <div className='session'>
        <div className='form-container'>
          <h1>{this.props.formType} to Taut</h1>
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

            <input type='submit' value={this.props.formType}/>
          </form>
        </div>
        {navLink}
      </div>
    );

  }

}

export default SessionForm;
