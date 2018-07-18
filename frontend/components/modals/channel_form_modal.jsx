import React from 'react';

import SearchableUserList from '../forms/searchable_user_list_container';
class ChannelFormModal extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      name: props.name,
      description: props.description,
      private: props.private,
    };
    this.update = this.update.bind(this);
    this.submit = this.submit.bind(this);
    this.toggleCheckbox = this.toggleCheckbox.bind(this);
  }

  update(field){
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  toggleCheckbox(e){
    this.setState({private: e.target.checked});
  }

  submit(e){
    this.props.formAction(this.state);
  }

  render(){
    const disabled = !this.state.name;
    const { formType } = this.props;
    const privacy = this.state.private;
    let privacyStatus;
    let hideLock = '';
    let hideHash = '';
    if (privacy) {
      privacyStatus = 'Private';
      hideHash = 'hidden';
    } else {
      privacyStatus = 'Public';
      hideLock = 'hidden';
    }

    return (
      <form className='ChannelForm Modal' onSubmit={this.handleSubmit}>
        <h1>{`${formType} Channel`}</h1>
        <h4>{"Channels are where your members communicate. They're best when organized around a topic - #leads, for example."}</h4>
        <h2>{`Privacy: ${privacyStatus}`}</h2>
        <label className='switch'>
          <input type='checkbox' onChange={this.toggleCheckbox}/>
          <span className="slider"></span>
        </label>
        <label>
          <h2>Name</h2>
          <div className='input-container'>
            <span className={hideHash}>#</span>
            <span className={hideLock}>&#128274;</span>
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
          <button
            className='cancel'
            onClick={this.props.clearModal}>
            Cancel
          </button>
          <button
            className='submit'
            disabled={disabled}
            onClick={this.submit}>
            {`${formType} Channel`}
          </button>
        </div>
        <SearchableUserList />
      </form>
    );
  }

}

export default ChannelFormModal;
