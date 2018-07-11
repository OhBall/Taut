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
      <div className='session form-container'>
        <h2>{this.props.formType}</h2>
        <h3>'slack-to-taut.heroku.com'</h3>
        <section>Enter your <b>email address</b> and <b>password</b></section>
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
        {navLink}
      </div>
    );

  }

}

export default SessionForm;
