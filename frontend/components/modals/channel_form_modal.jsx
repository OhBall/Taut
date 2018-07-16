import React from 'react';

class ChannelFormModal extends React.Component {

  constructor(props){
    super(props);
    this.state = {name: props.name, description: props.description};
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field){
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.formAction(this.state);
  }

  render(){
    return (
      <form className='ChannelForm Modal' onSubmit={this.handleSubmit}>
        <h1>{`${this.props.formType} Channel`}</h1>
        <label>
          Channel Name
          <input
            type='text'
            value={this.state.name}
            onChange={this.update('name')}
          />
        </label>
        <label>
          {'Description (optional)'}
          <input
            type='text'
            value={this.state.name}
            onChange={this.update('description')}
          />
        </label>
        <input type='submit' />
      </form>
    );
  }

}

export default ChannelFormModal;
