import React from 'react';

import SearchableUserListItem from './searchable_user_list_item';
import SelectedUserListItem from './selected_user_list_item';
import { findMatchingUsers } from '../../utils/search_util';

class SearchableUserList extends React.Component {
  constructor(props){
    super(props);
    this.state = {query: ''};
    this.updateSearch = this.updateSearch.bind(this);
  }

  updateSearch(e){
    this.setState({query: e.target.value});
  }

  render(){
    const { users, selectUser, deselectUser } = this.props;
    const matches = findMatchingUsers(users, this.state.query);
    const matchEls = matches.map(
       user => <SearchableUserListItem
                  key={user.id}
                  user={user}
                  selectUser={selectUser} />
    );

    const selectedEls = Object.keys(this.props.selectedUsers).map(
      userId => <SelectedUserListItem
                  key={userId}
                  user={users[userId]}
                  deselectUser={deselectUser} />
  );

    return(
      <div className='user-search'>
        <label>
          <h2>Participants</h2>
          <div className='input-container'>
            <input
              className='user-searchbar'
              type='text'
              placeholder='Search Users'
              value={this.state.query}
              onChange={this.updateSearch} />
          </div>
        </label>
        <ul className='selected-users'>
          {selectedEls}
        </ul>
        <ul>
          {matchEls}
        </ul>
      </div>
    );
  }

}

export default SearchableUserList;
