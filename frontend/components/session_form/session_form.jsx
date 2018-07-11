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
      <div>
        {navLink}
        <form onSubmit={this.handleSubmit}>
          <label>Email
            <input
              type='text'
              value={this.state.email}
              onChange={this.update('email')}/>
          </label>
          <label>Password
            <input
              type='password'
              value={this.state.password}
              onChange={this.update('password')}/>
          </label>
          <input type='submit' value={this.props.formType}/>
        </form>
      </div>
    );

  }

}

export default SessionForm;
