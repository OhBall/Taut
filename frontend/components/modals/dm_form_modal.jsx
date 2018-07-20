import React from 'react';
import { connect } from 'react-redux';

import { clearModal } from '../../actions/modal_actions';
import { createChannel } from '../../actions/channel_actions';
import SearchableUserList from '../forms/searchable_user_list_container';


const mapStateToProps = state => (
  { selectedUsers: state.ui.selectedUsers }
);

const mapDispatchToProps = dispatch => {
  return {
    createChannel: (channel, permissions) =>
      dispatch(createChannel(channel, permissions)),
    clearModal: () => dispatch(clearModal()),
  };
};

class DmFormModal extends React.Component {

  constructor(props){
    super(props);
    this.submit = this.submit.bind(this);
  }

  submit() {
    this.props.createChannel(
      {name: 'DM', is_dm: true, private: true},
      this.props.selectedUsers
    );
  }

  render() {
    const disabled = !Object.keys(this.props.selectedUsers).length;
    return (
      <form className='dm-form modal-form'>
        <h1>Direct Messages</h1>
        <button
          className='submit'
          onClick={this.submit}
          disabled={disabled}>
          {'Create DM'}
        </button>
        <button
          className='cancel'
          onClick={this.props.clearModal}>
            Cancel
        </button>
        <SearchableUserList />
      </form>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(DmFormModal);
