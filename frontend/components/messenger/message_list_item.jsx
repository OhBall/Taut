import React from 'react';

const MessageListItem = ({message, user}) => {
  const { id, body, created_at } = message;
  const {username, img_url} = user;
  return(
    <li key={id}>
      <img src={img_url}/>
      <span className='username'>{username}</span>
      <span className='timestamp'>{created_at}</span>
      <p>{body}</p>
    </li>
  );

};

export default MessageListItem;
