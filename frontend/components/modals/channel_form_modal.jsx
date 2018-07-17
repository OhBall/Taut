import React from 'react';

class ChannelFormModal extends React.Component {

  constructor(props){
    super(props);
    this.state = {name: props.name, description: props.description};
    this.update = this.update.bind(this);
    this.submit = this.submit.bind(this);
  }

  update(field){
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  submit(e){
    this.props.formAction(this.state);
  }

  render(){
    const disabled = !this.state.name;
    const { formType } = this.props;
    const prefix = '#';
    return (
      <form className='ChannelForm Modal' onSubmit={this.handleSubmit}>
        <h1>{`${formType} Channel`}</h1>
        <h4>{"Channels are where your members communicate. They're best when organized around a topic - #leads, for example."}</h4>
        <label>
          <h2>Name</h2>
          <div className='input-container'>
            <span>{prefix}</span>
            <input
              type='text'
              placeholder='e.g. leads'
              value={this.state.name}
              onChange={this.update('name')}
              />
          </div>
        </label>
        <label>
          <div>
            <h2>Purpose</h2> <h3>(optional)</h3>
          </div>
          <div className='input-container'>
            <input
              type='text'
              value={this.state.description}
              onChange={this.update('description')}
              />
          </div>
        <h5>{"What's this channel about?"}</h5>
        </label>
        <div className='buttons-container'>
          <button className='cancel' onClick={this.props.clearModal}>Cancel</button>
          <button
            className='submit'
            disabled={disabled}
            onClick={this.submit}>{`${formType} Channel`}</button>
        </div>
      </form>
    );
  }

}

export default ChannelFormModal;
