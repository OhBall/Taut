import React from 'react';

import SearchableUserList from '../forms/searchable_user_list_container';

class DmFormModal extends React.Component {

  render() {
    return (
      <form className='dm-form modal-form'>
        <h1>Direct Messages</h1>
        <SearchableUserList />
      </form>
    );
  }

}

export default DmFormModal;
