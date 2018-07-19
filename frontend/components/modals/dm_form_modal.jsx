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
    createChannel: channel => dispatch(createChannel()),
    clearModal: () => dispatch(clearModal()),
  };
};

class DmFormModal extends React.Component {

  Submit() {
    this.props.createChannel({name: 'DM'}, this.props.selectedUsers);
  }

  render() {
    const disabled = !Object.keys(this.props.selectedUsers).length;
    return (
      <form className='dm-form modal-form'>
        <h1>Direct Messages</h1>
        <button
          className='submit'
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
