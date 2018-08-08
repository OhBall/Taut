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

  componentDidMount(){
    const { modalType, selectUsers, prevUserIds } = this.props;
    if (modalType === 'EDIT_CHANNEL_MODAL') {
      selectUsers(prevUserIds);
    }
  }

  updateSearch(e){
    this.setState({query: e.target.value});
  }

  createMatchEls(){
    const { users,
            selectedUsers,
            currentUserId,
            selectUser } = this.props;
    const matches = findMatchingUsers(users, this.state.query);

    const nonSelectedMatches = matches.filter(user => {
      return (!Object.values(selectedUsers).includes(user.id) &&
              user.id !== currentUserId);
    });

    const matchEls = nonSelectedMatches.map(
       user => <SearchableUserListItem
                  key={user.id}
                  user={user}
                  selectUser={selectUser} />
    );
    return matchEls;
  }

  createSelectedEls(){
    const { users, selectedUsers, deselectUser } = this.props;
    const selectedEls = Object.keys(selectedUsers).map(
      userId => <SelectedUserListItem
                  key={userId}
                  user={users[userId]}
                  deselectUser={deselectUser} />
              );
    return selectedEls;
  }

  render(){
    const matchEls = this.createMatchEls();
    const selectedEls = this.createSelectedEls();
    return(
      <div className='user-search'>
        <label>
          <div className='input-container'>
            <input
              className='user-searchbar'
              type='text'
              placeholder='Search Users'
              value={this.state.query}
              onChange={this.updateSearch} />
          </div>
        </label>
        <h2>Participants</h2>
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
