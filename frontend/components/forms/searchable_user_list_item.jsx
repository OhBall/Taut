import React from 'react';

const SearchableUserListItem = props => {

  const handleClick = () => {
    props.selectUser(props.user.id);
  };

  const { username, email } = props.user;

  return (
    <li className='searchable-user-list-item' onClick={handleClick}>
      <div className='profile-picture' />
      <h1>{username}</h1> - <h2>{email}</h2>
    </li>
  );
};

export default SearchableUserListItem;
