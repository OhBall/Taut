import React from 'react';

const SelectedUserListItem = props => {

  const handleClick = () => {
    props.deselectUser(props.user.id);
  };

  const { id, username } = props.user;
  return (
    <li className='selected-user-list-item' onClick={handleClick}>
      {username} &#10005;
    </li>
  );
};

export default SelectedUserListItem;
