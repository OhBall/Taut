import React from 'react';

import UserListItem from './searchable_user_list_item';

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
    const { users, findMatchingUsers } = this.props;
    const matches = findMatchingUsers(users, this.state.query);
    const matchEls = matches.map(
       user => <UserListItem key={user.id} user={user} />
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
        </ul>
        <ul>
          {matchEls}
        </ul>
      </div>
    );
  }

}

export default SearchableUserList;
