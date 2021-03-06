import React from 'react';

import SearchableUserList from '../forms/searchable_user_list_container';
import ChannelErrors from './channel_errors';

class ChannelFormModal extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      id: props.id,
      name: props.name,
      description: props.description,
      private: props.private,
      is_dm: false,
    };
    this.update = this.update.bind(this);
    this.submit = this.submit.bind(this);
    this.toggleCheckbox = this.toggleCheckbox.bind(this);
    this.disabledStatus = this.disabledStatus.bind(this);
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
    e.preventDefault();
    this.props.formAction(this.state, this.props.selectedUsers);
  }

  disabledStatus(){
    const selectedUsers = this.props.selectedUsers;
    if (!this.state.name) return true;
    return this.state.private && Object.keys(selectedUsers).length == 0;
  }

  render(){

    const { formType } = this.props;
    const privacy = this.state.private;
    let privacyToggle;
    let hideOnPublic = '';
    let hideOnPrivate = '';
    if (privacy) {
      privacyToggle = ' Private';
      hideOnPrivate = 'hidden';
    } else {
      privacyToggle = ' Public';
      hideOnPublic = 'hidden';
    }

    return (
      <div>
        <ChannelErrors />
        <form className='channel-form modal-form' onSubmit={this.handleSubmit}>
          <h1>{`${formType}${privacyToggle} Channel`}</h1>
          <h4>{"Channels are where your members communicate. They're best when organized around a topic - #leads, for example."}</h4>
          <h2>{`Privacy:${privacyToggle}`}</h2>
          <label className='switch'>
            <input type='checkbox'
              checked={this.state.private}
              onChange={this.toggleCheckbox} />
            <span className="slider"></span>
          </label>
          <label>
            <h2>Name</h2>
            <div className='input-container'>
              <span className={hideOnPrivate}>#</span>
              <span className={hideOnPublic}>&#128274;</span>
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
              disabled={this.disabledStatus()}
              onClick={this.submit}>
              {`${formType}${privacyToggle} Channel`}
            </button>
          </div>
          <section className={hideOnPublic}>
            <SearchableUserList />
          </section>
        </form>
      </div>
    );
  }

}

export default ChannelFormModal;
