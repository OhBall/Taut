import React from 'react';

const UserListItem = props => {
  const {username, email} = props.user;
  return (
    <li className='user-list-item'>
      <div className='profile-picture' />
      <h1>{username}</h1> - <h2>{email}</h2>
    </li>
  );
};

export default UserListItem;
